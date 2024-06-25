import React from 'react'
import { Tilt } from "react-tilt";
import { RxOpenInNewWindow } from 'react-icons/rx';
import {SiGithub} from 'react-icons/si'

const Card4 = () => {
  return (
    <section className="text-gray-600 body-font lg:mx-24 md:mx-10">
        <div className="container mx-auto flex px-5 py-2 md:py-12 md:flex-row flex-col items-center">
            <Tilt>
            <a href='https://rocket-type-client.vercel.app/' className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:block hidden">
                <img className="object-cover object-center rounded h-96 w-auto" alt="project" src="./Rocket_type.png" />
            </a>
            </Tilt>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:p-16 xl:p-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:-ml-4 rounded-md shadow-lg relative lg:-z-10 hover:z-10 hover:scale-105 bg-white">
            <div className='p-4 md:p-0 '>
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-heading">
                RocketType
            </h1>
            <p className="font-primaryfont font-light pt-5 mb-8 ">
            Typing Test Application with both solo and multiplayer capabilities, allowing users to play alongside others based on the difficulty level.
            </p>
            <div className="flex flex-wrap">
                <li className="font-primaryfont font-light text-secondary mr-8">React.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Tailwind</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Mongo DB</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Node.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">JWT Auth</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Socket.io</li>
            </div>
            <div className='pt-2 flex flex-r'>
              <a href='https://rocket-type-client.vercel.app/' className='bg-gray-800 inline-flex p-2 rounded-lg text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <RxOpenInNewWindow/>
              </a>
              <a href='https://github.com/Aryan130902/Rocket_Type' className='bg-gray-800 inline-flex p-2 rounded-lg text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-4'>
                    <SiGithub/>
              </a>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Card4