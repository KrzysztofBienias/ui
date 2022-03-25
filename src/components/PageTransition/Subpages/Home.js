import React from 'react';
import { Image, Container } from './Subpages.styled';
import img from '../../../assets/images/home.jpg';

const Home = () => {
  return (
    <div>
      <Image img={img} />
      <Container>
        <h2>Home Page</h2>
      </Container>
    </div>
  );
};

export default Home;
