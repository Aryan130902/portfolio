import React, { useRef, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Projects/Card/Card';
import TimeLine from '../TimeLine/TimeLine';
import Certificates from '../Certificates/Certificates';
import Contact from '../Contact/Contact';
import { useState } from "react";
import styles from './navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Main = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const headerSection = useRef(null);
  const projectSection = useRef(null);
  const timelineSection = useRef(null);
  const certificatesSection = useRef(null);
  const contactSection = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(currentScrollPos <= prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundImage: 'url(/Group%2010.png)', backgroundRepeat: 'no-repeat',  backgroundAttachment: 'fixed', }}>
      <nav className={`bg-primary sticky z-10 ${isNavbarVisible ? 'top-0' : '-top-20'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="./Mainlogo.png" alt="#" height={40} width={40} />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <button className={styles.butt_nav} onClick={() => scrollDown(headerSection.current)}>
              About
            </button>
            <button className={styles.butt_nav} onClick={() => scrollDown(projectSection)}>
              Projects
            </button>
            <button className={styles.butt_nav} onClick={() => scrollDown(timelineSection)}>
              Experience
            </button>
            <button className={styles.butt_nav} onClick={() => scrollDown(certificatesSection)}>
              Certificates
            </button>
            <button className={styles.butt_nav} onClick={() => scrollDown(contactSection)}>
              Contact
            </button>

            </div>
          </div>

          <div className="mr-2 flex md:hidden justify-end">
            <button
              onClick={() => toggleMenu()}
              type="button"
              className={styles.butt_menu}
              aria-expanded="false"
            >
              <AiOutlineMenu className={`${isOpen ? 'hidden' : 'block'}`} />
              <AiOutlineClose className={`${isOpen ? 'block' : 'hidden'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button className={styles.butt_nav} onClick={() => scrollDown(headerSection)}>
          About
        </button>
        <button className={styles.butt_nav} onClick={() => scrollDown(projectSection)}>
          Projects
        </button>
        <button className={styles.butt_nav} onClick={() => scrollDown(timelineSection)}>
          Experience
        </button>
        <button className={styles.butt_nav} onClick={() => scrollDown(certificatesSection)}>
          Certificates
        </button>
        <button className={styles.butt_nav} onClick={() => scrollDown(contactSection)}>
          Contact
        </button>

        </div>
      </div>
    </nav>
      <div ref={ headerSection }>
      <Header />
      </div>
      <div ref={ projectSection } >
      <Card />
      </div>
      <div ref={ timelineSection }>
      <TimeLine  />
      </div>
      <div ref={ certificatesSection }>
      <Certificates />
      </div>
      <div ref={ contactSection }>
      <Contact  />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
