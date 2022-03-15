import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
