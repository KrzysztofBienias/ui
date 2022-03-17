import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Wrapper,
  Hero,
  Image,
  Article,
  Curtain,
  CurtainBackground,
  CurtainImage,
} from './ScrollAnimations.styled';

const imageUrl =
  'https://i.picsum.photos/id/1042/3456/5184.jpg?hmac=5xr8Veg2D_kEQQO6rvGj_Yk8s_N4iq3-eZ9_KclSXNQ';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  const hero = useRef(null);
  const article1 = useRef(null);
  const article2 = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const curtain = useRef(null);
  const tlHero = useRef(null);
  const tlCurtain = useRef(null);

  useEffect(() => {
    tlHero.current = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        start: 'top top',
        scrub: 1,
      },
    });

    tlHero.current.to(hero.current.children[0], {
      letterSpacing: 500,
      ease: 'power3',
      duration: 1,
    });

    gsap.fromTo(
      article1.current.children,
      { x: '-=150%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          trigger: article1.current,
          start: 'top center',
        },
      }
    );
    gsap.fromTo(
      article2.current.children,
      { x: '+=150%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          trigger: article2.current,
          start: 'top center',
        },
      }
    );
    gsap.fromTo(
      image1.current,
      { x: '+=150%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          trigger: image1.current,
          start: 'top center',
        },
      }
    );
    gsap.fromTo(
      image2.current,
      { x: '-=150%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          trigger: image2.current,
          start: 'top center',
        },
      }
    );

    tlCurtain.current = gsap.timeline({
      scrollTrigger: {
        trigger: curtain.current,
        start: 'top center',
      },
    });

    gsap.set(curtain.current.children[1], { autoAlpha: 0 });

    tlCurtain.current
      .to(curtain.current.children[0], { width: '100%', duration: 1 })
      .to(curtain.current.children[1], { autoAlpha: 1 });

    gsap.to(curtain.current.children[1], {
      rotate: 45,
      scrollTrigger: {
        trigger: curtain.current,
        start: 'top center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <Wrapper>
      <Hero ref={hero}>
        <h1>inspired</h1>
      </Hero>
      <Article ref={article1}>
        <h2>get inspired</h2>
        <p>
          Something has always existed. According to physics, there can never be
          true physical nothingness—though there can be times when existence
          resembles nothing, such as a vacuum (the state of minimum possible
          energy).
        </p>
      </Article>
      <Image ref={image1} />
      <Image ref={image2} />
      <Article ref={article2}>
        <h2>get inspired</h2>
        <p>
          Something has always existed. According to physics, there can never be
          true physical nothingness—though there can be times when existence
          resembles nothing, such as a vacuum (the state of minimum possible
          energy).
        </p>
      </Article>
      <Curtain ref={curtain}>
        <CurtainBackground />
        <CurtainImage src={imageUrl} />
      </Curtain>
    </Wrapper>
  );
};

export default ScrollAnimations;
