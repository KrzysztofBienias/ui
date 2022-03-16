import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import image from '../../../assets/images/discover.jpg';
import {
  Wrapper,
  StyledHalfBox,
  StyledText,
  StyledCurtain,
  StyledContent,
  StyledParagraph,
} from './Demo3.styled';

const Demo4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef(null);
  const curtainRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.addLabel('start').to(
      [curtainRef.current.children, titleRef.current, contentRef.current],
      {
        x: '-50vw',
        duration: 0.5,
        ease: 'cubic-bezier(.47,.93,0,1.02)',
        stagger: 0.03,
      },
      'start'
    );
  }, []);

  const handleClick = () => {
    if (isOpen) {
      tl.current.reverse();
      setIsOpen(!isOpen);
    } else {
      tl.current.play();
      setIsOpen(!isOpen);
    }
  };

  return (
    <Wrapper>
      <StyledHalfBox ref={titleRef}>
        <StyledText>Discover</StyledText>
      </StyledHalfBox>
      <StyledCurtain ref={curtainRef} onClick={handleClick}>
        <img src={image} alt="" />
        <StyledText isWhite>More</StyledText>
      </StyledCurtain>
      <StyledContent isColumn ref={contentRef}>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          asperiores atque blanditiis commodi consequuntur ducimus ea earum in
          ipsum iste itaque iusto minus natus necessitatibus numquam, quam quos
          recusandae rerum!
        </StyledParagraph>
        <StyledParagraph>[click here to close]</StyledParagraph>
      </StyledContent>
    </Wrapper>
  );
};

export default Demo4;
