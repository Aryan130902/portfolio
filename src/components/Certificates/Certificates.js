import React from 'react';

const Certificates = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center">
            <h1 className="lg:ml-8 mb-12 font-primaryfont lg:text-5xl font-medium text-gray-900 text-center md:text-left  text-4xl mx-auto">
              <span className="mr-2">Certificates And</span>
              <br className="lg:hidden" />
              <span className="text-secondary font-primary"> Achievements!</span>
            </h1>
            <div className="sm:flex w-full bg-secondary h-0.5 -ml-12 dark:bg-gray-700 flex-grow ml-4 hidden md:block"></div>
          </div>
          <div className='container'>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative pb-2">
                <img
                  alt="gallery"
                  className=" inset-0 w-full object-cover object-center"
                  src="./infigon.jpeg"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative pb-2">
                <img
                  alt="gallery"
                  className=" inset-0 w-full object-cover object-center"
                  src="./E-summit 21.png"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
