import React from 'react'
import { Tilt } from "react-tilt";
import { RxOpenInNewWindow } from 'react-icons/rx';
import {SiGithub} from 'react-icons/si'

const Card3 = () => {
  return (
    <section className="text-gray-600 body-font lg:mx-24 md:mx-10 p-2">
    <div className="container mx-auto flex px-5 py-2 md:py-8 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:p-16 xl:p-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:-mr-4 rounded-md shadow-lg relative hover:z-10 hover:scale-105 bg-white">
           <div className='p-4 md:p-0 '>
           <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-heading">
                MessMedia
            </h1>
            <p className="font-primaryfont font-light pt-5 mb-8 ">
            Stay up-to-date with the latest information on food availability, exhaustion, and holiday closures. With Mess Media, you never have to worry about missing out on your favorite meals.
            </p>
            <div className="flex flex-wrap">
                <li className="font-primaryfont font-light text-secondary mr-8">React.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Tailwind</li>
                <li className="font-primaryfont font-light text-secondary mr-8">My SQL</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Sequelize</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Node.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">JWT Auth</li>
            </div>
            <div className='pt-2 flex flex-r'>
              <a href='https://comfy-creponne-90c4cd.netlify.app/' className='bg-gray-800 inline-flex p-2 rounded-lg text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <RxOpenInNewWindow/>
              </a>
              <a href='https://github.com/Aryan130902/mess-media' className='bg-gray-800 inline-flex p-2 rounded-lg text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-4'>
                    <SiGithub/>
              </a>
            </div>
            </div> 
        </div>
      <Tilt>
      <a href='https://comfy-creponne-90c4cd.netlify.app/' className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:block hidden">
        <img className="object-cover object-center rounded" alt="hero" src="./Mess_Media.png"/>
      </a>
      </Tilt>
    </div>
  </section>
  )
}

export default Card3