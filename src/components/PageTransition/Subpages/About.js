import React from 'react';
import { Image, Container } from './Subpages.styled';
import img from '../../../assets/images/about.jpg';

const About = () => {
  return (
    <div>
      <Image img={img} />
      <Container>
        <h2>About Page</h2>
      </Container>
    </div>
  );
};

export default About;
