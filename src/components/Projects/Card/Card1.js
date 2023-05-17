import React from 'react'
import { Tilt } from "react-tilt";
import {RxOpenInNewWindow} from "react-icons/rx"

const Card1 = () => {
  return (
    <section className="text-gray-600 body-font lg:mx-24 md:mx-10">
    <div className="container mx-auto flex px-5 py-2 pt-16 md:py-8 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:p-16 xl:p-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:-mr-4 rounded-md shadow-lg relative hover:z-10 hover:scale-105 bg-white">
           <div className='p-4 md:p-0'>
           <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-heading">
                Socerers
            </h1>
            <p className="font-primaryfont font-light pt-2 mb-8 ">
                A Web app helpful for individuals who are searching for nearby hospitals and want to compare different options based on their needs and preferences.
            </p>
            <div className="flex flex-wrap">
                <li className="font-primaryfont font-light text-secondary mr-8">React.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Material UI</li>
                <li className="font-primaryfont font-light text-secondary mr-8">FourSquare API</li>
            </div>
            <div className='pt-2 flex flex-r'>
            <a href='https://find-hospitals-hackitout.netlify.app/' className='bg-gray-800 inline-flex p-2 rounded-lg text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                  <RxOpenInNewWindow/>
            </a>
            </div>
        </div>
      </div>
      <Tilt>
      <a href='https://find-hospitals-hackitout.netlify.app/' className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:block hidden">
        <img className="object-cover object-center rounded" alt="hero" src="./Socerers.png"/>
      </a>
      </Tilt>
    </div>
  </section>
  )
}

export default Card1