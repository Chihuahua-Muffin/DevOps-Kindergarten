import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

import BackButton from './BackButton';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '70vh',
    width: '300px',
    shadow: 'lg',
    zIndex: 10,
    backgroundColor: '#fafafa',
    padding: '20px',
  },
});

const Sidebar = () => {
  const hi = 'hi';
  return (
    <Container>
      <BackButton />
    </Container>
  );
};

export default Sidebar;