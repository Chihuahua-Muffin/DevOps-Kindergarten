import React, { useRef, useEffect, useState } from 'react';
// import { Terminal } from 'xterm';
import { XTerm } from 'xterm-for-react';
import { io } from 'socket.io-client';
import { chakra, Box } from '@chakra-ui/react';

const Container = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20vh',
    color: 'white',
    backgroundColor: 'black',
  },
});

export const Terminal = () => {
  const xtermRef = useRef(null);
  const socketClient = useRef(null);
  const [chatMessage, setChatMessage] = useState();

  const onData = (string) => {
    xtermRef.current.terminal.write(string);
  };

  const onKey = (key, event) => {
    console.log(key, event);
  };

  const onLineFeed = () => {
    console.log('onLineFeed');
  };

  const prompt = () => {
    const shellprompt = '$ ';
    xtermRef.current.terminal.write(`\r\n${shellprompt}`);
  };

  useEffect(() => {
    const socket = io('http://13.124.116.53:3000', {
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => {
      console.log('연결완료', socket.id);
      socketClient.current = socket;
    });

    socket.on('chat message', (res) => {
      console.log('chat message res', res);
      setChatMessage(res);
    });

    prompt();
  }, []);

  const onClickButton = () => {
    const res = socketClient.current.emit('chat message', 'ls -l');
    console.log('res', res);
  };

  return (
    <>
      <button type="button" onClick={onClickButton}>
        Button
      </button>
      <div>
        {chatMessage
          ? (
            <div>
              {chatMessage}
            </div>
          ) : (
            <div>
              No chat message
            </div>
          )
        }
      </div>
      <Container>
        {/* Create a new terminal and set it's ref. */}
        <XTerm
          ref={xtermRef}
          onData={onData}
          onKey={onKey}
          onLineFeed={onLineFeed}
        />
      </Container>
    </>
  );
};

export default Terminal;
