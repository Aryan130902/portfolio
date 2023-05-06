import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Card from './Card/Card';
import { useSpring, animated } from '@react-spring/web';
import TimeLine from './TimeLine/TimeLine';

const Main = () => {
  const ref = useRef(null);
  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setSpringProps({
            opacity: 1,
            transform: 'translateY(0px)',
            config: { duration: 1000 },
          });
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
      <TimeLine/>
      <Footer />
    </div>
  );
};

export default Main;
