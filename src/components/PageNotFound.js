import React from 'react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {

  const navigate = useNavigate();

  const home = () =>{
    navigate('/');
  };

  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className=" mx-auto -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 mx-auto">
      <h2 className="title-font text-7xl font-primaryfont mt-6 mb-3">4
      <span className='text-7xl text-secondary'>0</span>4
      </h2>
        <div className="rounded-lg h-[19rem] overflow-overlay">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"/>
        </div>
        
        <p className="leading-relaxed text-xl font-primary ">The page you are looking for is under <span className='text-secondary'>development</span>!</p>
        <button onClick={() => home()} className="flex mx-auto mt-6 text-white bg-secondary border-0 py-2 px-5 focus:outline-none hover:bg-gradient-to-r from-secondary to-secondarylight rounded font-primaryfont" 
        >Home</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default PageNotFound