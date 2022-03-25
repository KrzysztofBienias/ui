import React, { useEffect, useRef } from 'react';
import { Image, Container } from './Subpages.styled';
import img from '../../../assets/images/contact.jpg';
import gsap from 'gsap';
import Transition, { contentAnimation } from './../Transition';

const Contact = () => {
  const contact = gsap.timeline();
  const contactH2 = useRef(null);
  const contactImg = useRef(null);

  useEffect(() => {
    contentAnimation(contact, contactH2, contactImg);
  }, [contact]);

  return (
    <div>
      <Transition timeline={contact} />
      <Image img={img} ref={contactImg} />
      <Container>
        <h2 ref={contactH2}>Contact Page</h2>
      </Container>
    </div>
  );
};

export default Contact;
