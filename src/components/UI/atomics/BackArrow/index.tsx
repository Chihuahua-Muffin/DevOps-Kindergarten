import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'next/link';
import * as Styled from './styled';

import {
  ICON_STYLE,
} from '#/constants';

interface BackArrowProps {
  href: string;
}

const BackArrow = ({ href }: BackArrowProps) => (
  <Link href={href}>
    <Styled.Container>
      <ArrowBackIcon style={ICON_STYLE} />
    </Styled.Container>
  </Link>
);

export default BackArrow;
