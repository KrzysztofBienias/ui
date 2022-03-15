import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
