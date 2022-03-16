import React from 'react';
import { Navigation } from './CoolTransitions.styled';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Demo1 from './Demo1/Demo1';
import Demo2 from './Demo2/Demo2';
import Demo3 from './Demo3/Demo3';

const CoolTransitions = () => {
  return (
    <>
      <Navigation>
        <NavLink to="/cool-transitions/demo-1">Demo 1</NavLink>
        <NavLink to="/cool-transitions/demo-2">Demo 2</NavLink>
        <NavLink to="/cool-transitions/demo-3">Demo 3</NavLink>
      </Navigation>
      <Routes>
        <Route path="demo-1" element={<Demo1 />} />
        <Route path="demo-2" element={<Demo2 />} />
        <Route path="demo-3" element={<Demo3 />} />
      </Routes>
    </>
  );
};

export default CoolTransitions;

// eslint-disable-next-line no-lone-blocks
{
  /* <>
      <Navigation>
        <NavLink to="/cool-transitions">Demo 1</NavLink>
        <NavLink to="/cool-transitions/demo-2">Demo 2</NavLink>
        <NavLink to="/cool-transitions/demo-3">Demo 3</NavLink>
        <NavLink to="/cool-transitions/demo-4">Demo 4</NavLink>
      </Navigation>
      <Routes>
        <Route path="/cool-transitions/demo-4" element={<Demo4 />} />
        <Route path="/cool-transitions/demo-3" element={<Demo3 />} />
        <Route path="/cool-transitions/demo-2" element={<Demo2 />} />
        <Route path="/cool-transitions" element={<Demo1 />} />
      </Routes>
    </> */
}
