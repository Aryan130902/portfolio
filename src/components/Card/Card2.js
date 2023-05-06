import React from 'react'
import { Tilt } from "react-tilt";


const Card2 = () => {
  return (
    <section className="text-gray-600 body-font mx-24">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Tilt>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:block hidden">
            <img className="object-cover object-center rounded" alt="hero" src="./Code_Free.png"/>
            </div>
            </Tilt>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:p-16 xl:p-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center -ml-4 rounded-md shadow-lg relative hover:z-10 hover:scale-105">
            <div className="transform hover:-rotate-30">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-10 border-r-10 border-secondary bg-secondary"></div>
            </div>
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900">
                CodeFREE
            </h1>
            <p className="font-primaryfont font-light pt-5 mb-8 ">
            "Code Free" is a web application for uploading
            notes in image and PDF formats and writing
            articles with commenting and voting features.
            </p>
            <div className="flex flex-wrap">
                <li className="font-primaryfont font-light text-secondary mr-8">React.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Node.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Tailwind</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Express.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Mongo DB</li>
                <li className="font-primaryfont font-light text-secondary mr-8">JWT Auth</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Multer</li>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Card2