import React from 'react'
import Headerswitch from '../Headerswitch/Headerswitch'
import styles from './header.module.css';


const Header = () => {
  return (
    <div>
        <section className= {styles.section}>
          <div className= {styles.inner_section}>
            <div className={styles.hero_body}>
              <span className="font-primaryfont lg:text-xl sm:text-xl font-light">Hi there! <br></br>I'm glad to see you land here.
              </span>
              <h1 className=" title-font  sm:text-4xl font-primaryfont  lg:text-5xl font-bold text-gray-900 " >I'm a Aryan 
                <span className={styles.noobda}> Tiwari </span>
              </h1>
              <p className="font-primaryfont font-light py-5 mb-8 leading-relaxed">
              I am a budding software developer and a true tech enthusiast! With a passion for all things tech, I am currently based in Madhya Pradesh and looking for intern opportunities.</p>
            <Headerswitch/>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className={styles.hero_image} alt="hero" src="./Group 9.png"/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Header