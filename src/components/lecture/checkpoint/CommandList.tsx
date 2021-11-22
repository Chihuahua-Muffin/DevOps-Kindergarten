import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

// import { MIN_WIDTH_1100 } from '#/constants';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '5px',
    margin: '10px 0 0 10px',
  },
});

const Command = chakra(Box, {
  baseStyle: {
    position: 'relative',
    // backgroundColor: 'gray.800',
    color: 'gray.700',
    borderRadius: '5px',
    fontSize: '16px',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
});

const CommandList = ({ commands }: { commands: string[] }) => (
  <Container>
    {commands.map((command, index) => (
      <Command key={command}>
        {`${index + 1}. ${command}`}
      </Command>
    ))}
  </Container>
);

export default CommandList;
