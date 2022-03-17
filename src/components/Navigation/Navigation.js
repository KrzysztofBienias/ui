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
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/infinite-scroll">
            Infinite Scroll
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/accordion-faq">
            Accordion Faq
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/sidebar">
            Sidebar
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/combobox">
            Combobox
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/fancy-buttons">
            Fancy Buttons
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/cool-transitions/demo-1">
            Cool Transitions
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/animated-svg">
            Animated Svg
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink exact to="/scroll-animations">
            Scroll Animations
          </StyledNavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
