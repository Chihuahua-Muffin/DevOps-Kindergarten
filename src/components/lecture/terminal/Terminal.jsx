/* eslint-disable no-console */
import React, { useRef, useEffect, useState } from 'react';
import { XTerm } from 'xterm-for-react';
import { io } from 'socket.io-client';
import { chakra, Box, useMediaQuery, useToast } from '@chakra-ui/react';

import { MIN_WIDTH_1100 } from '#/constants';
import { onChangeBuffer, clearCommand } from '#/redux/ducks/lecture';
import { useAppDispatch, useAppSelector } from '#/hooks/useRedux';

const EMIT_CHAT_MESSAGE = 'chat message';
const TOAST_ID = 'error-toast';

const Container = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    bottom: 0,
    height: '30vh',
    color: 'white',
    backgroundColor: 'black',
    paddingLeft: '10px',
  },
});

const Terminal = () => {
  const [connectError, setConnectError] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const {
    terminalBuffer,
    currentCommands,
    commandCount,
  } = useAppSelector((state) => state.lecture);
  const xtermRef = useRef(null);
  const socketClient = useRef(null);
  const [islargerthan1100] = useMediaQuery(MIN_WIDTH_1100);

  const onData = (string) => {
    const code = string.charCodeAt(0);

    // console.log('code', code);

    // 한글 입력 시
    if (code >= 0x1100 && code <= 0x11FF) return;
    if (code >= 0x3130 && code <= 0x318F) return;
    if (code >= 0xAC00 && code <= 0xD7A3) return;

    // 백 스페이스
    if (code === 127) {
      if (!terminalBuffer) return;
      dispatch(onChangeBuffer(terminalBuffer.slice(0, -1)));
      xtermRef.current.terminal.write('\b \b');
      return;
    }

    // 엔터
    if (code === 13) {
      if (currentCommands[commandCount] === terminalBuffer) {
        dispatch(clearCommand());
      }

      terminalBuffer.split('').forEach(() => xtermRef.current.terminal.write('\b \b'));
      socketClient.current.emit(EMIT_CHAT_MESSAGE, terminalBuffer.trim());
      dispatch(onChangeBuffer(''));
      return;
    }

    // 나머지 string 입력 [buffer, socket]
    dispatch(onChangeBuffer(terminalBuffer + string));
    xtermRef.current.terminal.write(string);
  };

  const onErrorData = () => {
    if (!toast.isActive(TOAST_ID)) {
      toast({
        id: TOAST_ID,
        title: '서버 연결에 실패했습니다.',
        duration: 3000,
        status: 'error',
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    // 소켓 생성 및 연결
    const socket = io(process.env.NEXT_PUBLIC_DEV_SOCKET_SERVER_URL, {
      transports: ['websocket', 'polling'],
    });

    // 연결 완료 했을 때
    socket.on('connect', () => {
      console.log('연결 완료', socket.id);
      setConnectError(false);
      socketClient.current = socket;
    });

    socket.on('connect_error', () => {
      console.log('연결 실패');
      setConnectError(true);
    });

    // 채팅 메세지 메소드
    socket.on(EMIT_CHAT_MESSAGE, (message) => {
      xtermRef.current.terminal.write(message);
    });

    return () => {
      if (socketClient.current) {
        socketClient.current.close();
      }
      dispatch(onChangeBuffer(''));
    };
  }, [dispatch]);

  const options = {
    rows: 13,
  };

  return (
    <Container
      width={islargerthan1100 ? 'calc(100vw - 300px)' : 'calc(100vw - 70px)'}
      left={islargerthan1100 ? '300px' : '70px'}
    >
      {/* Create a new terminal and set it's ref. */}
      <XTerm options={options} ref={xtermRef} onData={!connectError ? onData : onErrorData} />
    </Container>
  );
};

export default Terminal;
