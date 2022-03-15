import React, { useState } from 'react';
import {
  Nav,
  NavList,
  NavListItem,
  StyledNavLink,
  NavButton,
} from './Navigation.styled';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav isOpen={isOpen}>
      <NavButton onClick={() => setIsOpen(!isOpen)}>🍔</NavButton>
      <NavList>
        <NavListItem>
          <StyledNavLink isOpen={isOpen} exact to="/">
            Home
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink isOpen={isOpen} exact to="/infinite-scroll">
            Infinite Scroll
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink isOpen={isOpen} exact to="/accordion-faq">
            Accordion Faq
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink isOpen={isOpen} exact to="/sidebar">
            Sidebar
          </StyledNavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
