import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { SvgIconProps } from '@material-ui/core';
import * as Styled from './styled';

interface FieldProps {
  id: number;
  icon: SvgIconProps;
  title: string;
  gridRow: string;
  gridColumn: string;
  setHoverField: Dispatch<SetStateAction<string>>;
}

// Field 컴포넌트는 로드맵 페이지에서 하나의 데브옵스 분야에 대한 버튼을 나타냄
const Field = ({
  id,
  icon,
  title,
  gridRow,
  gridColumn,
  setHoverField,
}: FieldProps) => {
  const onHoverField = () => {
    if (id === 1 || id === 2 || id === 3 || id === 4) {
      setHoverField('Dev');
    } else {
      setHoverField('Ops');
    }
  };

  return (
    <Styled.FieldTooltip label={title}>
      <Styled.FieldBox
        id={title}
        className="field"
        onMouseEnter={onHoverField}
        margin="auto 0"
        gridColumn={gridColumn}
        gridRow={gridRow}
        as="span"
      >
        <Link href={`/explain/${title}`}>
          <Styled.Container>
            <Styled.FieldBadge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={id}
            >
              {icon}
            </Styled.FieldBadge>
          </Styled.Container>
        </Link>
      </Styled.FieldBox>
    </Styled.FieldTooltip>
  );
};

export default Field;
