import React, { useRef, useEffect, useState } from 'react';
// import { Terminal } from 'xterm';
import { XTerm } from 'xterm-for-react';
import { io } from 'socket.io-client';
import { chakra, Box, useMediaQuery } from '@chakra-ui/react';
// import { AttachAddon } from 'xterm-addon-attach';
import { MIN_WIDTH_1100 } from '#/constants';

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
  // const [chatMessage, setChatMessage] = useState();
  // const [splitChatMessage, setSplitChatMessage] = useState([]);
  const [islargerthan1100] = useMediaQuery(MIN_WIDTH_1100);
  const [buffer, setBuffer] = useState('');

  const prompt = () => {
    const shellprompt = ' $ ';
    xtermRef.current.terminal.write(shellprompt);
  };

  const onData = (string) => {
    setBuffer((prevState) => prevState + string);
    // console.log('buffer', buffer);
    // console.log('onData', string);
    xtermRef.current.terminal.write(string);
  };

  const onKey = (event) => {
    // console.log(event);

    if (event.key === '\r') {
      // enter
      socketClient.current.emit('chat message', buffer.trim());
      setBuffer('');
      prompt();
    } else if (event.key === '\x7F') {
      // back-space
      setBuffer((prevState) => prevState.slice(0, -1));
    }
  };

  useEffect(() => {
    // 소켓 생성 및 연결
    const socket = io('http://13.124.116.53:3000', {
      transports: ['websocket', 'polling'],
    });

    // 연결 완료 했을 때
    socket.on('connect', () => {
      console.log('연결완료', socket.id);
      socketClient.current = socket;
    });

    socket.on('chat message', (res) => {
      console.log('chat message res\n', res);
      xtermRef.current.terminal.write(res);
    });

    return () => {
      socketClient.current.close();
    };
  }, []);

  // const onClickButton = () => {
  //   const res = socketClient.current.emit('chat message', 'ls');
  //   console.log('res', res);
  // };

  const options = {
    rows: 13,
  };

  return (
    <>
      {/* <button type="button" onClick={onClickButton}>
        Button
      </button>
      <div>
        buffer:
        {buffer}
      </div>
      <div>
        {chatMessage
          ? (
            <div>
              {splitChatMessage.map((line) => <div>{line}</div>)}
            </div>
          ) : (
            <div>
              No chat message
            </div>
          )}
      </div> */}
      {islargerthan1100 ? (
        <Container>
          {/* Create a new terminal and set it's ref. */}
          <XTerm options={options} ref={xtermRef} onData={onData} onKey={onKey} />
        </Container>
      ) : (
        <SmallContainer>
          {/* Create a new terminal and set it's ref. */}
          <XTerm options={options} ref={xtermRef} onData={onData} onKey={onKey} />
        </SmallContainer>
      )}

    </>
  );
};

export default Terminal;
