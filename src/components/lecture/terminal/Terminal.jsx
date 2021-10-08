import React, { useRef, useEffect } from 'react';
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
    // You can call any method in XTerm.js by using
    // 'xterm xtermRef.current.terminal.[What you want to call
    const socket = io('http://13.124.116.53:3000', {
      withCredentials: true,
    });
    console.log('socket', socket);
    socket.on('connect', () => {
      console.log(socket.connected); // true
    });
    prompt();
  }, []);

  return (
    <Container>
      {/* Create a new terminal and set it's ref. */}
      <XTerm
        ref={xtermRef}
        onData={onData}
        onKey={onKey}
        onLineFeed={onLineFeed}
      />
    </Container>
  );
};

export default Terminal;
