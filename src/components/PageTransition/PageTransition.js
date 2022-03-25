import React from 'react';
import { Wrapper, Header, Logo, Navigation } from './PageTransition.styled';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Subpages/Home';
import About from './Subpages/About';
import Contact from './Subpages/Contact';

const PageTransition = () => {
  return (
    <Wrapper>
      <Header>
        <Logo>
          Company <br /> Logo
        </Logo>
        <Navigation>
          <li>
            <NavLink to="/page-transition/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/page-transition/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/page-transition/contact">Contact</NavLink>
          </li>
        </Navigation>
      </Header>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Wrapper>
  );
};

export default PageTransition;
