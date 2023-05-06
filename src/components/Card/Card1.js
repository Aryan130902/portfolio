import React from 'react'
import { Tilt } from "react-tilt";


const Card1 = () => {
  return (
    <section className="text-gray-600 body-font mx-24 ">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:p-16 xl:p-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center -mr-4 rounded-md shadow-lg relative hover:z-10 hover:scale-105">
            <div className="transform hover:-rotate-30">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-10 border-r-10 border-secondary bg-secondary"></div>
            </div>
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900">
                Socerers
            </h1>
            <p className="font-primaryfont font-light pt-5 mb-8 ">
                A Web app helpful for individuals who are searching for nearby hospitals and want to compare different options based on their needs and preferences.
            </p>
            <div className="flex flex-wrap">
                <li className="font-primaryfont font-light text-secondary mr-8">React.js</li>
                <li className="font-primaryfont font-light text-secondary mr-8">Material UI</li>
                <li className="font-primaryfont font-light text-secondary mr-8">FourSquare API</li>
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