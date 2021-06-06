import React from 'react';
import {
  chakra,
  IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import EditIcon from '@material-ui/icons/Edit';

interface EditButtonProps {
  id: string;
}

const EditButtonContainer = chakra(IconButton, {
  baseStyle: {
    position: 'fixed',
    bottom: '0',
    right: '0',
    margin: '20px',
    fontSize: '24px',
    fontWeight: '600',
  },
});

const EditButton = ({ id }: EditButtonProps) => (
  <Link href={`/dictionary/edit/${id}`}>
    <EditButtonContainer
      icon={<EditIcon />}
      colorScheme="teal"
      size="lg"
      isRound
    />
  </Link>
);

export default EditButton;
