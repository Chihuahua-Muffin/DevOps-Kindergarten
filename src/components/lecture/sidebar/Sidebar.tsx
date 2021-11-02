import React from 'react';
import { chakra, Box, Divider } from '@chakra-ui/react';

import BackButton from './BackButton';
import Title from './Title';
import type { Checkpoint } from '#/components/lecture/contents/types';
import CheckpointList from '#/components/lecture/checkpoint';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '300px',
    shadow: 'lg',
    zIndex: 10,
    backgroundColor: '#fafafa',
    padding: '20px',
    overflowY: 'auto',
  },
});

// eslint-disable-next-line arrow-body-style
const Sidebar = ({
  checkpoints,
  title,
}: {
  checkpoints: Checkpoint[];
  title: string;
}) => (
  <Container>
    <BackButton />
    <Title title={title} />
    <Divider margin="15px 0" />
    <CheckpointList checkpoints={checkpoints} />
  </Container>
);

export default Sidebar;
