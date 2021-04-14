import React from 'react';
import styles from 'styled-components';
import LoadMap from 'pages/LoadMap';
import Header from 'components/Header';

const Container = styles.body`
  display: flex;
  flex-direction: column;
  widht: 100%:
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Header />
      <LoadMap />
    </Container>
  );
}

export default App;
