import React, { useEffect, useRef } from 'react';
import { BsCalendar2 } from 'react-icons/bs';
import styles from './TimeLine.module.css';

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      let isScrolling = false;
      let startX = 0;
      let scrollLeft = 0;

      const onWheel = e => {
        if (e.deltaY === 0) return;

        if (el.scrollLeft === 0 && e.deltaY < 0) {
          // Scroll the page up
          window.scrollTo({
            top: window.pageYOffset + e.deltaY,
            behavior: 'smooth'
          });
        } else if (el.scrollLeft === el.scrollWidth - el.clientWidth && e.deltaY > 0) {
          // Scroll the page down
          window.scrollTo({
            top: window.pageYOffset + e.deltaY,
            behavior: 'smooth'
          });
        } else {
          // Scroll horizontally
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: 'smooth'
          });
        }
      };

      const handleTouchStart = (event) => {
        isScrolling = true;
        startX = event.touches[0].clientX;
        scrollLeft = el.scrollLeft;
      };

      const handleTouchMove = (event) => {
        if (!isScrolling) return;
        const x = event.touches[0].clientX;
        const walk = (x - startX) * 3; // Adjust the scrolling speed here
        el.scrollLeft = scrollLeft - walk;
      };

      const handleTouchEnd = () => {
        isScrolling = false;
      };

      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchmove', handleTouchMove, { passive: true });
      el.addEventListener('touchend', handleTouchEnd);
      el.addEventListener('wheel', onWheel);

      return () =>{
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchmove', handleTouchMove);
        el.removeEventListener('touchend', handleTouchEnd);
        el.removeEventListener('wheel', onWheel);
      }
    }
  }, []);

  return elRef;
}

const TimeLine = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="container py-24" ref={scrollRef} style={{ overflow: 'hidden' }}>
      <div>
        <h1 className="lg:ml-8 mt-12 font-primaryfont lg:text-5xl font-medium text-gray-900 text-center md:text-left text-4xl md:mx-auto">
          Have a look at <br />
          <span className="text-secondary font-primary">My Journey!</span>
        </h1>
      </div>
      <div style={{ whiteSpace: 'nowrap' }}>
        <ol className="flex whitespace-nowrap">
        <li className="relative mb-6 sm:mb-0 m-2">
            <div className="flex items-center">
              <div className={styles.butt}>
                <BsCalendar2 />
              </div>
              <div className="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white font-primaryfont">St. Xaviers Sr. Sec. CO-ED School, Bhopal</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2006 - May 2020</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Class 12th PCM <br></br> Percentage: 91.4%</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 m-2">
            <div className="flex items-center">
              <div className={styles.butt}>
                <BsCalendar2 />
              </div>
              <div className="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white font-primaryfont">Shri G.S. Institute of Technology and Science, Indore</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2020 - Mar 2024</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">3rd year, Information Technology <br></br> CGPA:8.31/10</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 m-2">
            <div className="flex items-center">
              <div className={styles.butt}>
                <BsCalendar2 />
              </div>
              <div className="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white font-primaryfont">Art For Charity</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2020 - present</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">• Working as a coordinator <br></br>• Spreading smiles through Art</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 m-2">
            <div className="flex items-center">
              <div className={styles.butt}>
                <BsCalendar2 />
              </div>
              <div className="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white font-primaryfont">E-Cell, SGSITS </h3>
              <h6 className="text-lg font-medium text-gray-900 dark:text-white font-primaryfont">• Coordinator </h6>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2020 - Jun 2021</time>
              <h6 className="text-lg font-medium text-gray-900 dark:text-white font-primaryfont">• Head Of Design </h6>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2021 - present</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">• Mentored and led a design team of 10+ members. <br></br>• Member of organizing team for
                Aarambh and E - Summit'23.</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 m-2">
            <div className="flex items-center">
              <div className={styles.butt}>
                <BsCalendar2 />
              </div>
              <div className="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white font-primaryfont">Infigon Futures </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2021 - Sept 2021</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 w-8">• Worked on the UI/UX of the app and website.<br></br>
                Designed multiple components and features of<br></br>
                the app using figma.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TimeLine;
