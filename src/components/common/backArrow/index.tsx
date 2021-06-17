import {
  chakra,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  ICON_STYLE,
  HEADER_HEIGHT,
} from '#/constants';

const Container = chakra(Box, {
  baseStyle: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: '0',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#EDF2F7' // gray 100
    },
  },
})

interface BackArrowProps {
  href: string;
}

const BackArrow = ({ href }: BackArrowProps) => {
  return (
    <Link href={href}>
      <Container>
        <ArrowBackIcon style={ICON_STYLE} />
      </Container>
    </Link>
  );
}

export default BackArrow;
