import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageNotFound from './PageNotFound'

const Headerswitch = () => {
  const navigate = useNavigate();

  const notexist = () =>{
    navigate('/notexist');
  };

  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container sm:p-0 flex flex-wrap flex-col   ">
    <div class="flex flex-wrap p-2 lg:flex-wrap md:flex-wrap sm:mr-0 sm:flex-row items-center bg-white shadow-lg rounded-3xl ">
    <button type="button"
    class="lg:mr-5 lg:ml-5 md:mr-0 md:ml-0 font-primaryfont hover:scale-110 hover:shadow rounded-3xl decoration-2 underline-offset-4  duration-300 p-2 hover:shadow-secondary hover:font-semibold "> Github </button>
    
      <button onClick={() => notexist()} class="lg:mr-5 lg:ml-5 md:mr-0 md:ml-0 font-primaryfont hover:scale-110 hover:shadow rounded-3xl decoration-2 underline-offset-4  duration-300 p-2 hover:shadow-secondary hover:font-semibold ">Experience  </button>
      <button onClick={() => notexist()} class="lg:mr-5 lg:ml-5 md:mr-0 md:ml-0 font-primaryfont hover:scale-110 hover:shadow rounded-3xl decoration-2 underline-offset-4  duration-300 p-2 hover:shadow-secondary hover:font-semibold ">LinkedIn  </button>
      <button onClick={() => notexist()} class="lg:mr-5 lg:ml-5 md:mr-0 md:ml-0 font-primaryfont hover:scale-110 hover:shadow rounded-3xl decoration-2 underline-offset-4  duration-300 p-2 hover:shadow-secondary hover:font-semibold ">Leetcode</button>
    </div>
    </div>
</section>
    </div>
  )
}

export default Headerswitch