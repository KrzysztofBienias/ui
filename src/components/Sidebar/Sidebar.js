import React, { useState } from 'react';
import {
  MenuToggleButton,
  Navigation,
  Content,
  StyledNavLink,
} from './Sidebar.styled';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span />
        <span />
      </MenuToggleButton>
      <Navigation isOpen={isOpen}>
        <ul>
          <li>
            <StyledNavLink to="/">Lorem</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">Ipsum</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">Dolor</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">Sit</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/">Amet</StyledNavLink>
          </li>
        </ul>
      </Navigation>
      <Content>
        <div />
        <div />
        <div />
        <div />
      </Content>
    </>
  );
};

export default Sidebar;
