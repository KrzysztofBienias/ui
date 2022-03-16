import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Wrapper,
  StyledCurtain,
  TextContainer,
  StyledText,
  StyledButton,
} from './Demo1.styled';

const firstSlide = ['Start', 'here'];
const secondSlide = ['End', 'there'];

const Demo2 = () => {
  const [content, setContent] = useState(firstSlide);
  const [currentSlide, setCurrentSlide] = useState(1);
  const tl = useRef(null);
  const textRef = useRef();
  const textRef2 = useRef();
  const curtainRef = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    if (tl.current) {
      tl.current
        .to(
          [textRef.current, textRef2.current],
          {
            y: '-105%',
            duration: 0.5,
            onComplete: () => {
              if (currentSlide === 1) {
                setContent(secondSlide);
              } else {
                setContent(firstSlide);
              }
            },
          },
          0
        )
        .set(curtainRef.current, {
          x: '100%',
        })
        .to(curtainRef.current, {
          x: '0',
          duration: 0.3,
        })
        .to(
          curtainRef.current,
          {
            x: '-100%',
            duration: 0.3,
          },
          '+=0.2'
        )
        .set([textRef.current, textRef2.current], {
          y: '100%',
        })
        .to([textRef.current, textRef2.current], {
          y: '0',
          duration: 0.5,
        });
    }
  }, [currentSlide]);

  const handleClick = () => {
    currentSlide === 1 ? setCurrentSlide(2) : setCurrentSlide(1);
    tl.current.play();
  };

  return (
    <Wrapper>
      <TextContainer>
        <StyledText>
          <span ref={textRef}>{content[0]}</span>
        </StyledText>
        <StyledText>
          <span ref={textRef2}>{content[1]}</span>
        </StyledText>
      </TextContainer>
      <StyledCurtain ref={curtainRef} />
      <StyledButton onClick={handleClick}>{currentSlide} / 2</StyledButton>
    </Wrapper>
  );
};

export default Demo2;
