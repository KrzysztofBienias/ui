import React from 'react';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import Welcome from './components/Welcome/Welcome';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Welcome />
    </>
  );
};

export default App;
