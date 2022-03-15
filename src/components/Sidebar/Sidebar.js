import React, { useState } from 'react';
import { MenuToggleButton, Navigation, Content } from './Sidebar.styled';

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
            <a tabIndex={isOpen ? null : '-1'} href="/">
              Lorem
            </a>
          </li>
          <li>
            <a tabIndex={isOpen ? null : '-1'} href="/">
              Ipsum
            </a>
          </li>
          <li>
            <a tabIndex={isOpen ? null : '-1'} href="/">
              Dolor
            </a>
          </li>
          <li>
            <a tabIndex={isOpen ? null : '-1'} href="/">
              Sit
            </a>
          </li>
          <li>
            <a tabIndex={isOpen ? null : '-1'} href="/">
              Amet
            </a>
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
