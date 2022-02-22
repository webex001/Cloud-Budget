import React from 'react';

const Features = () => {
  return(
    <div className='bg-gray-50 pt-20 pb-20'>
    <h2 className='text-center text-4xl font-semibold mb-10'>Features</h2>
      <div className='container lg:grid lg:grid-cols-3 xl:grid-cols-3 ml-10  lg:gap-1'>
          <div className="mb-44 sm:ml-36 sm:mt-14 lg:mt-0 lg:ml-1">
              <div className='m-3 sm:m-0 -z-10'>
                <img src='/images/hand-money.png' />
              </div>
              <div className='bg-white shadow-lg rounded p-5 z-40 absolute -mt-24 lg:w-72 w-80 lg:ml-3 ml-7 sm:ml-4'>
                <h5 className='text-center text-lg font-bold'>Supports All Currencies and <br /> Cards</h5>
                <p className='text-center text-sm mt-5'>We support all popular currencies and is fully customizable to add <br /> <br />
                <a href='#' className='uppercase text-red-500 text-sm font-semibold'>Read More</a>
                </p>
              </div>
          </div>
          <div className="mb-44 sm:ml-36 lg:ml-0">
              <div className='m-3 sm:m-0 -z-10'>
                <img src='/images/mobile-phone.png' />
              </div>
              <div className='bg-white shadow-lg rounded lg:w-72 w-80 lg:ml-3 ml-7 p-5 z-20 absolute -mt-24 sm:ml-4'>
                <h5 className='text-center text-lg font-bold'>Manage your expenses on the go</h5>
                <p className='text-center text-sm mt-5'>You can access your account from anywhere in the world on any device <br /> <br />
                <a href='#' className='uppercase text-red-500 text-sm font-semibold'>Read More</a>
                </p>
              </div>
          </div>
          <div className="mb-44 sm:ml-36 lg:ml-0">
              <div className='m-3 sm:m-0 -z-10'>
                <img src='/images/cloud-storage.png' />
              </div>
              <div className='bg-white shadow-lg rounded absolute -mt-24 lg:w-72 w-80 lg:ml-4 ml-7 p-5 z-20 sm:ml-4'>
                <h5 className='text-center text-lg font-bold'>Cloud Budget Management Software</h5>
                <p className='text-center text-sm mt-5'>Our software is made so you can access and manage your budget <br /> <br />
                <a href='#' className='uppercase text-red-500 text-sm font-semibold'>Read More</a>
                </p>
              </div>
          </div>
          
      </div>
    </div>
  )
};

export default Features;
