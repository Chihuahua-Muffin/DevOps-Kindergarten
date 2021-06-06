import React from 'react';
import {
  chakra,
  IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import AddIcon from '@material-ui/icons/Add';

const CreateButtonContainer = chakra(IconButton, {
  baseStyle: {
    position: 'fixed',
    bottom: '0',
    right: '0',
    margin: '20px',
    fontSize: '24px',
    fontWeight: '600',
  },
});

const CreateButton = () => (
  <Link href={`/dictionary/create`}>
    <CreateButtonContainer
      icon={<AddIcon />}
      colorScheme="teal"
      size="lg"
      isRound
    />
  </Link>
);

export default CreateButton;
