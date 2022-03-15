import React from 'react';
import { Wrapper, StyledDetails } from './AccordianFaq.styled';
import { data } from './data';

const AccordionFaq = () => {
  return (
    <Wrapper>
      {data.map((item) => (
        <StyledDetails key={item.title}>
          <summary>{item.title}</summary>
          <div>
            <p>{item.content}</p>
          </div>
        </StyledDetails>
      ))}
    </Wrapper>
  );
};

export default AccordionFaq;
