import React from 'react';
import {
  chakra,
  Text,
} from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkText = chakra(Text, {
  baseStyle: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: 'teal.500',
    _hover: {
      textDecoration: 'underline',
    },
  },
});

const ExplainSubTitle = ({ children, href }: Props) => (
  <LinkText
    as="a"
    href={href}
    target="_blank"
    rel="noreferrer"
    className="tool_title"
  >
    {children}
  </LinkText>
);

export default ExplainSubTitle;
