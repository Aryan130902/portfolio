import React from 'react'
import Headerswitch from '../Headerswitch/Headerswitch'
import {HiMail} from 'react-icons/hi'



const Contact = () => {
  return (
    <div>
        <section className="text-gray-600 body-font relative">
            <div className="container py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="lg:text-5xl text-4xl font-medium title-font mb-4 text-gray-900 font-primaryfont">Get In <span className='text-secondary'>Touch</span> </h1>
                <p className="lg:w-1/3 mx-auto leading-relaxed text-base font-primaryfont">I am always looking for collaboration and new potential opportunities yoy can contact me via mail or linkedIn.</p>
                </div>
                <div className="lg:w-5/12 w-full mx-auto">
                    <Headerswitch/>
                </div>
                <div className="flex items-center justify-center mx-auto pt-12">
                <div className='px-2'>
                    <HiMail size={32}/>
                </div>
                <div>
                    aryan.tiwari13092002@gmail.com
                </div>
                </div>

            </div>
            </section>
    </div>
  )
}

export default Contact