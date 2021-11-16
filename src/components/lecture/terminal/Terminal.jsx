import React, { useRef, useEffect, useState } from 'react';
// import { Terminal } from 'xterm';
import { XTerm } from 'xterm-for-react';
import { io } from 'socket.io-client';
import { chakra, Box, useMediaQuery } from '@chakra-ui/react';
// import { AttachAddon } from 'xterm-addon-attach';
import { MIN_WIDTH_1100 } from '#/constants';

const EMIT_CHAT_MESSAGE = 'chat message';

const Container = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    bottom: 0,
    left: '300px',
    width: 'calc(100vw - 300px)',
    height: '30vh',
    color: 'white',
    backgroundColor: 'black',
    paddingLeft: '10px',
  },
});

const SmallContainer = chakra(Container, {
  baseStyle: {
    left: '70px',
    width: 'calc(100vw - 70px)',
  },
});

const Terminal = () => {
  const xtermRef = useRef(null);
  const socketClient = useRef(null);
  const [islargerthan1100] = useMediaQuery(MIN_WIDTH_1100);
  const [buffer, setBuffer] = useState('');

  const onData = (string) => {
    const code = string.charCodeAt(0);

    console.log('code', code);

    // 한글 입력 시
    if (code >= 0x1100 && code <= 0x11FF) { console.log(code, '한글입력'); return; }
    if (code >= 0x3130 && code <= 0x318F) { console.log(code, '한글입력'); return; }
    if (code >= 0xAC00 && code <= 0xD7A3) { console.log(code, '한글입력'); return; }

    // 백 스페이스
    if (code === 127) {
      if (!buffer) return;
      console.log('백 스페이스 입력');
      setBuffer(buffer.slice(0, -1));
      xtermRef.current.terminal.write('\b \b');
      return;
    }

    // 엔터
    if (code === 13) {
      socketClient.current.emit(EMIT_CHAT_MESSAGE, buffer.trim());
      setBuffer('');
      return;
    }

    // 나머지 string 입력 [buffer, socket]
    setBuffer((prevState) => prevState + string);
    xtermRef.current.terminal.write(string);
  };

  // // 터미널 키 입력
  // const onKey = (event) => {
  //   const string = event.key;
  //   const code = event.domEvent.keyCode;

  //   if (string === '\r') {
  //     // enter
  //     socketClient.current.emit(EMIT_CHAT_MESSAGE, buffer.trim());
  //     setBuffer('');
  //   } else if (event.domEvent.keyCode === 8) {
  //     // back-space
  //     setBuffer(buffer.slice(0, -1));
  //     xtermRef.current.terminal.write(buffer.slice(0, -1));
  //   }
  // };

  useEffect(() => {
    // 소켓 생성 및 연결
    const socket = io(process.env.NEXT_PUBLIC_DEV_SOCKET_SERVER_URL, {
      transports: ['websocket', 'polling'],
    });

    // 연결 완료 했을 때
    socket.on('connect', () => {
      console.log('연결완료', socket.id);
      socketClient.current = socket;
    });

    // 채팅 메세지 메소드
    socket.on(EMIT_CHAT_MESSAGE, (res) => {
      xtermRef.current.terminal.write(res);
    });

    return () => {
      socketClient.current.close();
    };
  }, []);

  const options = {
    rows: 13,
  };

  return (
    <>
      {islargerthan1100 ? (
        <Container>
          {/* Create a new terminal and set it's ref. */}
          <XTerm options={options} ref={xtermRef} onData={onData} />
        </Container>
      ) : (
        <SmallContainer>
          {/* Create a new terminal and set it's ref. */}
          <XTerm options={options} ref={xtermRef} onData={onData} />
        </SmallContainer>
      )}
    </>
  );
};

export default Terminal;
