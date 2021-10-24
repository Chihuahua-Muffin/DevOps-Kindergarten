import React, { useRef, useEffect, useState } from 'react';
// import { Terminal } from 'xterm';
import { XTerm } from 'xterm-for-react';
import { io } from 'socket.io-client';
import { chakra, Box } from '@chakra-ui/react';
import { AttachAddon } from 'xterm-addon-attach';

const Container = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40vh',
    color: 'white',
    backgroundColor: 'black',
  },
});

const Terminal = () => {
  const xtermRef = useRef(null);
  const socketClient = useRef(null);
  const [chatMessage, setChatMessage] = useState();
  const [splitChatMessage, setSplitChatMessage] = useState([]);
  const [buffer, setBuffer] = useState('');

  const prompt = () => {
    const shellprompt = ' $ ';
    xtermRef.current.terminal.write(shellprompt);
  };

  const onData = (string) => {
    setBuffer((prevState) => prevState + string);
    console.log('buffer', buffer);
    console.log('onData', string);
    xtermRef.current.terminal.write(string);
  };

  const onKey = (event) => {
    console.log(event);

    if (event.key === '\r') { // enter
      socketClient.current.emit('chat message', buffer.trim());
      setBuffer('');
      prompt();
    } else if (event.key === '\x7F') { // back-space
      setBuffer((prevState) => prevState.slice(0, -1));
    }
  };

  useEffect(() => {
    // 소켓 생성 및 연결
    // const socket = io('http://13.124.116.53:3000', {
    //   transports: ['websocket', 'polling'],
    // });

    // // 연결 완료 했을 때
    // socket.on('connect', () => {
    //   console.log('연결완료', socket.id);
    //   const attachAddon = new AttachAddon(socket);
    //   xtermRef.current.terminal.loadAddon(attachAddon);
    //   console.log('attach socket');
    //   socketClient.current = socket;
    // });

    // socket.on('chat message', (res) => {
    //   console.log('chat message res\n', res);
    //   setChatMessage(res);
    //   const splitted = res.split('\n');
    //   setSplitChatMessage(splitted);
    //   splitted.forEach((line) => {
    //     xtermRef.current.terminal.write(line);
    //     xtermRef.current.terminal.write('\r\n');
    //   });
    // });

    // prompt();

    // return () => {
    //   socketClient.current.close();
    // };
  }, []);

  const onClickButton = () => {
    const res = socketClient.current.emit('chat message', 'ls');
    console.log('res', res);
  };

  const options = {
    rows: 17,
  };

  return (
    <>
      <button type="button" onClick={onClickButton}>
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
      </div>
      <Container>
        {/* Create a new terminal and set it's ref. */}
        <XTerm
          options={options}
          ref={xtermRef}
          onData={onData}
          onKey={onKey}
        />
      </Container>
    </>
  );
};

export default Terminal;
