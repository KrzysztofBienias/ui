import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import image from '../../../assets/images/journey.jpg';
import {
  Wrapper,
  StyledButton,
  StyledText,
  StyledSpan,
  StyledImage,
  StyledCloseButton,
} from './Demo2.styled';

const Demo2 = () => {
  const tlOpen = useRef(null);
  const tlClose = useRef(null);
  const buttonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    tlOpen.current = gsap.timeline({ paused: true });
    tlClose.current = gsap.timeline({ paused: true });

    if (tlOpen.current) {
      tlOpen.current
        .to(titleRef.current, { opacity: '0', y: '-=50px', duration: 0.2 })
        .to(
          buttonRef.current.children[0],
          {
            scale: 25,
            duration: 1,
          },
          '+=0.1'
        )
        .set(wrapperRef.current, { backgroundColor: 'black' })
        .to(buttonRef.current, { opacity: '0', duration: 0.1 })
        .set(titleRef.current, { display: 'none' })
        .set(buttonRef.current, { display: 'none' })
        .set(closeButtonRef.current, { display: 'block' })
        .set(imageRef.current, { display: 'block' })
        .fromTo(
          [imageRef.current, closeButtonRef.current],
          { opacity: '0', y: '+=50px' },
          { opacity: '1', y: '0', stagger: '0.2' }
        );
    }
  }, []);

  const playOpen = () => tlOpen.current.play();

  const playClose = () => tlOpen.current.reverse();

  return (
    <Wrapper ref={wrapperRef}>
      <StyledText ref={titleRef}>Amazing journey</StyledText>
      <StyledButton ref={buttonRef} onClick={playOpen}>
        Discover
        <StyledSpan />
      </StyledButton>
      <StyledImage ref={imageRef} src={image} alt="My journey" />
      <StyledCloseButton ref={closeButtonRef} onClick={playClose}>
        Close
      </StyledCloseButton>
    </Wrapper>
  );
};

export default Demo2;
