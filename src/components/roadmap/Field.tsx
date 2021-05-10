import { Dispatch, SetStateAction } from 'react';
import {
  chakra,
  Box,
  Tooltip,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SvgIconProps, Badge } from '@material-ui/core';

interface FieldProps {
  id: number;
  icon: SvgIconProps;
  title: string;
  gridRow: string;
  gridColumn: string;
  setHoverField: Dispatch<SetStateAction<string>>;
}

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7FAFC',
    widht: '100px',
    height: '100px',
    borderRadius: '50%',
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      backgroundColor: '#B2F5EA',
      cursor: "pointer",
    },
  },
});

// 모듈화 시키는 작업 필요
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
    if(id === 1 || id === 2 || id === 3 || id === 4) {
      setHoverField('Dev');
    } else {
      setHoverField('Ops');
    }
  };

  return (
    <Tooltip label={title}>
      <Box onMouseEnter={onHoverField} margin="auto 0" gridColumn={gridColumn} gridRow={gridRow} as="span">
        <Link href={`/explain/${title}`}>
          <Container>
            <Badge 
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }} 
              badgeContent={id}
              color="default"
            >
              {icon}
            </Badge>
          </Container>
        </Link>
      </Box>
    </Tooltip>
  );
};

export default Field;
