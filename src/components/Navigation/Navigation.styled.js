import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  z-index: 10000;
  width: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #eee;
  position: absolute;
  right: 0;
  top: 50px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
`;

export const NavList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const NavListItem = styled.li`
  margin: 10px 0;
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  tabIndex: props.isActive ? null : '-1',
}))`
  font-family: 'IBM Plex Mono', monospace;
  text-decoration: none;
  color: black;
  font-size: 14px;

  &.active {
    font-weight: bold;
  }
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #eee;
  border: none;
  position: absolute;
  left: -40px;
`;
