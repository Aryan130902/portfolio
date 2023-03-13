import React from 'react'
import Headerswitch from './Headerswitch'
import Typical from 'react'
const Header = () => {
  return (
    <div>
        <section class="text-gray-600 body-font  ">
  <div class="container max-w-full mx-auto flex px-5 pt-24 pb-8 md:flex-row flex-col items-center md:pt-0">
    <div class="lg:flex-grow lg:pl-24 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
    <div class="font-primaryfont lg:text-2xl sm:text-xl font-normal">Hola! Mate
      </div>
      <h1 class=" title-font  sm:text-4xl font-primaryfont  lg:text-5xl font-bold text-gray-900 " >I'm a Mukesh 
     <span class='text-secondary font-primaryfont'> Noobda </span>
      </h1>
      <button> About Me! </button>
      <p class="font-primaryfont font-light py-5 mb-8 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt culpa, nihil aperiam impedit, eum laudantium quae quaerat nostrum quam quisquam soluta dicta expedita repellendus. Nemo totam commodi similique officiis harum?</p>
     <Headerswitch/>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="./Group 9.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Header