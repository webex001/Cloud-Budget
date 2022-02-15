import React from 'react';

const Features = () => {
  return(
      <div className='flex justify-around'>
          <div className="bg-[url('/images/hand-money.png')]">
              <div className='bg-white shadow-md'>
                <h5>Supports All Currencies and Cards</h5>
                <p>We support all popular currencies and is fully customizable to add</p>
                <a href='#' className='uppercase text-red-500 text-center'>Read More</a>
              </div>
          </div>
          <div className="bg-[url('/images/mobile-phone.png')]">
              <div className='bg-white shadow-md'>
                <h5 className='text-center'>Supports All Currencies and Cards</h5>
                <p className='text-center'>We support all popular currencies and is fully customizable to add</p>
                <a href='#' className='uppercase text-red-500 text-center'>Read More</a>
              </div>
          </div>
          <div className="bg-[url('/images/cloud-storage.png')]">
              <div className='bg-white shadow-md'>
                <h5 className='text-center'>Supports All Currencies and Cards</h5>
                <p className='text-center'>We support all popular currencies and is fully customizable to add</p>
                <a href='#' className='uppercase text-red-500 text-center'>Read More</a>
              </div>
          </div>
      </div>
  )
};

export default Features;
