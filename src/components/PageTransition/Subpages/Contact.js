import React from 'react';
import { Image, Container } from './Subpages.styled';
import img from '../../../assets/images/contact.jpg';

const Contact = () => {
  return (
    <div>
      <Image img={img} />
      <Container>
        <h2>Contact Page</h2>
      </Container>
    </div>
  );
};

export default Contact;
