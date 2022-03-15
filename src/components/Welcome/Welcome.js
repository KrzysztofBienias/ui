import React from 'react';
import { Wrapper, Content, StyledLogo } from './Welcome.styled';

const Welcome = () => {
  return (
    <Wrapper>
      <Content>
        <StyledLogo />
        <h1>UI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          porro a, iusto at eos minus assumenda cumque, dicta praesentium
          aliquam mollitia nesciunt dolorum, eaque voluptates.
        </p>
        <p>
          <strong>Hope you enjoy it.</strong>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Welcome;
