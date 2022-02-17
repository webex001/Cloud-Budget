import React from 'react';

const Technology = () => {
  return (
      <div className='mt-20 mb-32'>
          <h2 className='text-center text-4xl font-semibold'>Technology</h2>
          <div className='flex-col justify-evenly'>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200 text-center z-0'>01</h2>
                    <img className='absolute -mt-12 ml-32 z-20' src='/images/download.png' />
                    <h5 className='text-center text-sm font-semibold mt-10  mb-3'>Cloud Storage</h5>
                    <p className='text-center  '>Access your account from anywhere <br /> in the world on any device</p>
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-center text-gray-200'>02</h2>
                    <img className='absolute -mt-12 ml-32 z-20' src='/images/search.png' />
                    <h5 className='text-center text-sm font-semibold mt-10 mb-3'>Secure</h5>
                    <p className='text-center'>All your information is stored on <br /> secure cloud servers</p>
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-center text-gray-200'>03</h2>
                    <img className='absolute -mt-12 ml-32 z-20' src='/images/pdf.png' />
                    <h5 className='text-center text-sm font-semibold mt-10  mb-3'>PDF Download</h5>
                    <p className='text-center '>Download any of your reports in <br/> PDF format</p>
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-center text-gray-200'>04</h2>
                    <img className='absolute -mt-12 ml-32 z-20' src='/images/csv.png' />
                    <h5 className='text-center text-sm font-semibold mt-10  mb-3'>CSV Download</h5>
                    <p className='text-center  '>All your information is stored on <br/> secure cloud servers</p>
              </div>
          </div>
      </div>
  )
};

export default Technology;
