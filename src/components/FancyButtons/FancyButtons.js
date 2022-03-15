import React, { useState } from 'react';
import {
  Wrapper,
  ButtonA,
  ButtonB,
  ButtonC,
  ButtonD,
  ButtonE,
  ButtonF,
} from './FancyButtons.styled';

const FancyButtons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Wrapper>
      <ButtonA>Click me</ButtonA>
      <ButtonB>Submit</ButtonB>
      <ButtonC>
        <span>Submit</span>
      </ButtonC>
      <ButtonD
        isLoading={isLoading}
        isSuccess={isSuccess}
        onClick={handleClick}
      >
        <span>Submit</span>
        <span>Loading</span>
        <span>Thank you!</span>
      </ButtonD>
      <ButtonE>
        <span>Next</span>
      </ButtonE>
      <ButtonF>
        <span>Next</span>
      </ButtonF>
    </Wrapper>
  );
};

export default FancyButtons;
