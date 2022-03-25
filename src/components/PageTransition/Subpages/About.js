import React, { useEffect, useRef } from 'react';
import { Image, Container } from './Subpages.styled';
import img from '../../../assets/images/about.jpg';
import gsap from 'gsap';
import Transition from '../Transition';
import { contentAnimation } from './../Transition';

const About = () => {
  const about = gsap.timeline();
  const aboutH2 = useRef(null);
  const aboutImg = useRef(null);

  useEffect(() => {
    contentAnimation(about, aboutH2, aboutImg);
  }, [about]);

  return (
    <div>
      <Transition timeline={about} />
      <Image img={img} ref={aboutImg} />
      <Container>
        <h2 ref={aboutH2}>About Page</h2>
      </Container>
    </div>
  );
};

export default About;
