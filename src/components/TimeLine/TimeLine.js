import React, { useEffect, useRef } from 'react';
import { BsCalendar2 } from 'react-icons/bs';
import styles from './TimeLine.module.css';
import { cardobj } from './Card';

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
        e.preventDefault()
        if (el.scrollLeft === 0 && e.deltaY < 0) {
          // Scroll the page up
          window.scrollTo({
            top: window.scrollY + e.deltaY,
          });
        } else if (el.scrollLeft === el.scrollWidth - el.clientWidth && e.deltaY > 0) {
          // Scroll the page down
          window.scrollTo({
            top: window.scrollY + e.deltaY,
          });
        } else {
          // Scroll horizontally
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
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
        const walk = (x - startX) * 20;
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
        <div className='flex space-x-4 overflow-x'>
            {cardobj.map((detail, index) => (
                detail.Title ? (
                    <li key={index} className="relative mb-6 sm:mb-0 m-2 mx-8">
                        <div className="flex items-center">
                            <div className={styles.butt}>
                                <BsCalendar2 />
                            </div>
                            <div className="sm:flex w-full bg-gray-200 h-0.5 -ml-2 -mr-12"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-medium text-gray-900">
                                {detail.Title}
                            </h3>
                            <time className="block mb-2 text-sm font-normal text-gray-400">
                                {detail.Duration}
                            </time>
                            {detail.Promotion.map((promo, promoIndex) => (
                                <div key={promoIndex}>
                                    <h6 className="text-lg font-medium text-gray-900 font-primaryfont">
                                        • {promo.Title}
                                    </h6>
                                    <time className="block mb-2 text-sm font-normal text-gray-400">
                                        {promo.Duration}
                                    </time>
                                </div>
                            ))}
                            <ul className="max-w-md break-words mr-4">
                                {detail.Description.map((desc, descIndex) => (
                                    <li key={descIndex} className="text-base font-normal text-gray-500">
                                        • {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ) : null
            ))}
        </div>
        </ol>
      </div>
    </div>
  ); 
};

export default TimeLine;
