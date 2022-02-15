import React from 'react';

const Technology = () => {
  return (
      <div className='mt-20'>
          <h2 className='text-center text-3xl'>Technology</h2>
          <div className='flex justify-around'>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200'>01</h2>
                    <img className='' src='/images/download.png' />
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200'>02</h2>
                    <img className='' src='/images/search.png' />
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200'>03</h2>
                    <img className='' src='/images/pdf.png' />
              </div>
              <div className='mt-20'>
                    <h2 className='text-8xl text-gray-200'>04</h2>
                    <img className='' src='/images/csv.png' />
              </div>
          </div>
      </div>
  )
};

export default Technology;
