import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Card = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [springProps1, setSpringProps1] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  const [springProps2, setSpringProps2] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  const [springProps3, setSpringProps3] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  const [springProps4, setSpringProps4] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  useEffect(() => {
    const handleScroll = () => {
        if (ref1.current) {
          const top = ref1.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top <= windowHeight / 2) {
            setSpringProps1({
              opacity: 1,
              transform: 'translateY(0px)',
              config: { duration: 500 },
            });
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };
      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (ref2.current) {
          const top = ref2.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top <= windowHeight / 2) {
            setSpringProps2({
              opacity: 1,
              transform: 'translateY(0px)',
              config: { duration: 500 },
            });
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (ref3.current) {
          const top = ref3.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top <= windowHeight / 2) {
            setSpringProps3({
              opacity: 1,
              transform: 'translateY(0px)',
              config: { duration: 500 },
            });
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (ref4.current) {
          const top = ref4.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top <= windowHeight / 2) {
            setSpringProps4({
              opacity: 1,
              transform: 'translateY(0px)',
              config: { duration: 500 },
            });
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    <div className="container">
    <h1 className="lg:ml-8 mt-12 font-primaryfont lg:text-5xl font-medium text-gray-900 text-center md:text-left text-4xl md:mx-auto">
      Check Out <br />
      <span className="text-secondary font-primary">The Projects!</span>
    </h1>

      <section ref={ref1} className="my-10">
        <animated.div style={springProps1}>
          <Card1/>
        </animated.div>
      </section>
      <section ref={ref2} className="my-10">
        <animated.div style={springProps2}>
          <Card2/>
        </animated.div>
      </section>
      <section ref={ref3} className="my-10">
        <animated.div style={springProps3}>
          <Card3/>
        </animated.div>
      </section>
      <section ref={ref4} className="my-10">
        <animated.div style={springProps4}>
          <Card4/>
        </animated.div>
      </section>
      </div>
    </>
  );
};

export default Card;
