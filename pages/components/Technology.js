import React from 'react';

const Technology = () => {
  return (
      <div className='mt-20 mb-32'>
          <h2 className='text-center text-3xl'>Technology</h2>
          <div className='flex justify-evenly'>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200 z-0'>01</h2>
                    <img className='absolute -mt-12 ml-3 z-20' src='/images/download.png' />
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200'>02</h2>
                    <img className='absolute -mt-12 ml-6 z-20' src='/images/search.png' />
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200'>03</h2>
                    <img className='absolute -mt-12 ml-6 z-20' src='/images/pdf.png' />
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200'>04</h2>
                    <img className='absolute -mt-12 ml-9 z-20' src='/images/csv.png' />
              </div>
          </div>
      </div>
  )
};

export default Technology;
