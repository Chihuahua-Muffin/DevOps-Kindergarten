import React from 'react';
import * as Stlyed from './styled';

interface AnchorProps {
  id: string;
}

const Anchor = ({ id }: AnchorProps) => (
  <Stlyed.Container
    aria-label="anchor"
    href={`#${id}`}
    as="a"
  >
    #
  </Stlyed.Container>
);

export default Anchor;
