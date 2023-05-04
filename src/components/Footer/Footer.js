import React from 'react' 



const Footer = () => {
  return (
    <div>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto flex items-center sm:items-inline sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="./Mainlogo.png" alt="#" height={40} width={40}/>
      <span className="flex title-font font-logofont font-bold lg:text-2xl p-4 sm:text-xl  items-center text-gray-900 pr:10">Aryan Tiwari</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © Made by — Aryan Tiwari
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">   
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer