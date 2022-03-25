import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Curtain = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #bcada3;
  z-index: 2000;
`;

export const contentAnimation = (timeline, title, image) => {
  timeline
    .from(title.current, {
      duration: 0.6,
      skewX: 10,
      x: -100,
      opacity: 0,
    })
    .from(image.current, {
      duration: 0.5,
      y: -200,
      opacity: 0,
    });
};

const Transition = ({ timeline }) => {
  const curtainRef = useRef(null);

  useEffect(() => {
    timeline
      .set(curtainRef.current, {
        x: '100%',
      })
      .to(curtainRef.current, {
        x: '0',
        duration: 0.375,
      })
      .to(
        curtainRef.current,
        {
          x: '-100%',
        },
        '+=0.2'
      );
  }, [timeline]);

  return <Curtain ref={curtainRef} />;
};

export default Transition;
