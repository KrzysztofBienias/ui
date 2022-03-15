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
      </NavList>
    </Nav>
  );
};

export default Navigation;
