import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './headerswitch.module.css';
import {SiGithub, SiLeetcode} from 'react-icons/si'
import {TfiLinkedin} from 'react-icons/tfi'


const Headerswitch = () => {
  const navigate = useNavigate();

  const notexist = () =>{
    navigate('/notexist');
  };

  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container sm:p-0 flex flex-wrap flex-col   ">
    <div className="flex flex-wrap p-2 lg:flex-wrap md:flex-wrap sm:mr-0 sm:flex-row items-center bg-white shadow-lg rounded-3xl ">
    <a 
        href="https://github.com/Aryan130902" 
        target="_blank"
        rel="noopener noreferrer"
        className="lg:mr-32 lg:ml-5 mr-16 md:ml-0 font-primaryfont hover:scale-110 hover:shadow rounded-3xl decoration-2 underline-offset-4 duration-300 p-2 px-8 hover:shadow-secondary hover:font-semibold border-2 border-secondary ">
        Resume
    </a>
    <a 
        href="https://github.com/Aryan130902" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.butt}>
        <SiGithub size={24} /> 
    </a>
    <a 
        href="https://www.linkedin.com/in/aryan-tiwari-368050200/" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.butt}>
        <TfiLinkedin size ={24} /> 
    </a>
    <a 
        href="https://www.linkedin.com/in/aryan-tiwari-368050200/" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.butt}>
        <SiLeetcode size={24} /> 
    </a>
    </div>
    </div>
</section>
    </div>
  )
}

export default Headerswitch