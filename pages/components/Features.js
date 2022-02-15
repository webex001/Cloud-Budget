import React from 'react';

const Features = () => {
  return(
    <div className='bg-gray-50 pt-20 pb-48'>
    <h2 className='text-center text-3xl mb-10'>Features</h2>
      <div className='container flex justify-evenly'>
          <div className="">
              <div className='-z-10'>
                <img src='/images/hand-money.png' />
              </div>
              <div className='bg-white shadow-lg rounded w-80 ml-4 p-5 z-40 absolute -mt-24'>
                <h5 className='text-center text-xl font-bold'>Supports All Currencies and <br /> Cards</h5>
                <p className='text-center mt-5'>We support all popular currencies and is fully customizable to add <br /> <br />
                <a href='#' className='uppercase text-red-500'>Read More</a>
                </p>
              </div>
          </div>
          <div className="">
              <div className='-z-10'>
                <img src='/images/mobile-phone.png' />
              </div>
              <div className='bg-white shadow-lg rounded w-80 ml-4 p-5 z-20 absolute -mt-24'>
                <h5 className='text-center text-xl font-bold'>Manage your expenses on the go</h5>
                <p className='text-center mt-5'>You can access your account from anywhere in the world on any device <br /> <br />
                <a href='#' className='uppercase text-red-500'>Read More</a>
                </p>
              </div>
          </div>
          <div className="">
              <div className='-z-10'>
                <img src='/images/cloud-storage.png' />
              </div>
              <div className='bg-white shadow-lg rounded absolute -mt-24 w-80 ml-4 p-5 z-20'>
                <h5 className='text-center text-xl font-bold'>Cloud Budget Management Software</h5>
                <p className='text-center mt-5'>Our software is made so you can access and manage your budget <br /> <br />
                <a href='#' className='uppercase text-red-500'>Read More</a>
                </p>
              </div>
          </div>
          
      </div>
    </div>
  )
};

export default Features;
