import React, { useEffect, useRef } from 'react';
import { Image, Container } from './Subpages.styled';
import img from '../../../assets/images/home.jpg';
import Transition, { contentAnimation } from '../Transition';
import gsap from 'gsap';

const Home = () => {
  const home = gsap.timeline();
  const homeH2 = useRef(null);
  const homeImg = useRef(null);

  useEffect(() => {
    contentAnimation(home, homeH2, homeImg);
  }, [home]);

  return (
    <div>
      <Transition timeline={home} />
      <Image img={img} ref={homeImg} />
      <Container>
        <h2 ref={homeH2}>Home Page</h2>
      </Container>
    </div>
  );
};

export default Home;
