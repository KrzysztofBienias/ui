import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import AccordionFaq from './components/AccordionFaq/AccordionFaq';
import Sidebar from './components/Sidebar/Sidebar';
import Combobox from './components/Combobox/Combobox';
import FancyButtons from './components/FancyButtons/FancyButtons';
import CoolTransitions from './components/CoolTransitions/CoolTransitions';
import AnimatedSvg from './components/AnimatedSvg/AnimatedSvg';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Routes>
          <Route path="animated-svg" element={<AnimatedSvg />} />
          <Route path="cool-transitions/*" element={<CoolTransitions />} />
          <Route path="fancy-buttons" element={<FancyButtons />} />
          <Route path="combobox" element={<Combobox />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="accordion-faq" element={<AccordionFaq />} />
          <Route path="infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
