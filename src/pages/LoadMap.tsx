import React from 'react';
import styles from 'styled-components';

const Container = styles.div`
  display: flex;
  background-color: darkgray;
  height: 1000px;
`;

const LoadMap = () => {
  return (
    <Container>
      데브옵스 로드맵 페이지
    </Container>
  );
};

export default LoadMap;
