import React, { Fragment, useState } from 'react'
import Login from './Login'
const Navbar = () => {
 const [showmodal,setShowModal] = useState(false);
 
   return (
    <>
    <header class="text-gray-600 body-font mx-0">
  <div class=" mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center bg-primary">
    <a class="flex title-font font-logofont font-bold lg:text-2xl p-4 sm:text-xl  items-center text-gray-900 mb-4 md:mb-0 pr:10" >
     Aryan Tiwari
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-medium">
      <a class="mr-5 font-primaryfont hover:scale-110 hover:underline decoration-secondary decoration-2 underline-offset-4  duration-300 px-2 py-1  hover:text-white hover:font-semibold ">Home</a>
      <a class="mr-5 font-primaryfont hover:scale-110 hover:underline decoration-secondary decoration-2 underline-offset-4  duration-300 px-2 py-1  hover:text-white hover:font-semibold">Blogs</a>
      <a class="mr-5 font-primaryfont hover:scale-110 hover:underline decoration-secondary decoration-2 underline-offset-4  duration-300 px-2 py-1  hover:text-white hover:font-semibold">Projects</a>
      <a class="mr-5 font-primaryfont hover:scale-110 hover:underline decoration-secondary decoration-2 underline-offset-4  duration-300 px-2 py-1  hover:text-white hover:font-semibold">Contact</a>
    </nav>  
    <button class=" font-primaryfont inline-flex items-center bg-gray-100 border-0 py-1 px-5 focus:outline-none  hover:bg-gradient-to-r from-secondary to-secondarylight hover:text-white hover:font-semibold hover:border-2 hover:outline-transparent rounded-3xl text-base mt-4 md:mt-0" 
    onClick={ 
      () => {setShowModal(true)
      let switchLogin = document.getElementById('login_page');
                 switchLogin.classList.remove('hidden');

                 let switchSignin = document.getElementById('Signin_page');
                 switchSignin.classList.add('hidden');
                 }}
      >
    Login 
    </button>
  </div>
</header>

<Login isloginVisible={showmodal} onClose ={ () => setShowModal(false) 
   }/>
</>
  )
}

export default Navbar