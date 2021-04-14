import React from 'react';
import styles from 'styled-components';

const Container = styles.header`
  position: sticky;
  top: 0px;
  height: 80px;
  background-color: gray;
`;

const Header = () => {
  return (
    <Container>
      헤더
    </Container>
  );
};

export default Header;
