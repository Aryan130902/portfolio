import React from 'react'
import Login from './Login';
const Signin = ({issigninVisible,onSigninClose}) => {
  if(!issigninVisible) return null;
     const SigninClose=(e)=>{
          if(e.target.id==="signinwrapper") onSigninClose();
        }
  
  return (
     <>
     <div className='' id='Signin_page' >
    <div className='overflow-y-scroll fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex-justify-center items-center'>
    <div class="container py-12 px-6 h-full scroll-smooth">
      <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800" id='signinwrapper'>
        <div class="xl:w-10/12">
          <div class="block bg-transparent bg-opacity-25 backdrop-blur-sm shadow-lg rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0 ">
              <div class="lg:w-6/12 px-4 md:px-0 bg-white justify-center rounded-tl-lg rounded-bl-lg"  >
              <button type="button" class="bg-white position-relative rounded-md p-2 m-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
              >
  
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
              onClick={
                () => {
                  onSigninClose();
                  onclose();
                  Login();
                }
              }>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
                <div class="md:p-12 md:mx-6 lg:py-6">
                <div class="text-white px-4 py-6 md:p-12 md:mx-6 ">
                <div class="rounded-lg h-64 overflow-hidden mb-5">
               
          <img alt="content" class=" object-center h-60 w-60 " src="./Loginphoto.png"/>
        </div>
        <div class="flex-col position-relative">
        <span class="grid text-xs text-gray-700 font-semibold justify-center">Already have an account?</span>
        <button class="font-bold  font-primaryfont flex mx-auto mt-4 text-white bg-secondary border-0 py-2 px-10 focus:outline-none hover:bg-gradient-to-r from-secondary to-secondarylight rounded rounded-3xl " 
        onClick={() => {
            let switchLogin = document.getElementById('login_page');
                 switchLogin.classList.remove('hidden');

                 let switchSignin = document.getElementById('Signin_page');
                 switchSignin.classList.add('hidden');
                 
        }}>LOG IN</button>
        </div>
        </div>
              
                </div>
              </div>
              <div class="lg:w-6/12 px-4 md:px-0">
                <div class="md:p-12 md:mx-6">
                  <div class="text-center">
                    
                    <h4 class="text-xl font-semibold mt-1 mb-12 pb-1 font-black text-white">SIGN IN</h4>
                  </div>
                  <form>
                    <p class="mb-4  text-white">Please Sign in to your account</p>
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Create Username"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        type="password"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Create Password"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        type="password"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div class="text-center pt-1 mb-12 py-2">
                      <button
                        class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-secondary hover:bg-gradient-to-r from-secondary to-secondarylight hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 "
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  {/* <Login isloginVisible={showmodal} onClose ={ () => setShowModal(false) 
   }/> */}
  </>
  )
}

export default Signin