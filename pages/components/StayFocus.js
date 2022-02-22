import React from 'react';

const StayFocus = () => {
  return(
        <div className='lg:grid lg:grid-cols-2 lg:gap-1 md:flex-nowrap justify-evenly bg-red-500 pt-20 pb-20 sm:flex-wrap'>
            <div className='text-white'>
                <h4 className='lg:text-4xl text-4xl text-center font-bold mt-10 md:text-5xl'>Stay focused on saving <br />money</h4>
                <p className='lg:text-sm ml-3 lg:text-center sm:text-center text-sm md:text-base font-normal mt-10'>
                    It is important to stay focused on saving money in any way you can. We <br /> help you monitor your spending habits so you can easily spot and cut <br /> any unnecessary expenses. Simply join today to get started!
                </p>
                <div className='flex mt-8 mb-10 ml-4 lg:-ml-16 justify-center'>
                    <img className='cursor-pointer' src='/images/playstore.png'/>
                    <img className='ml-6 cursor-pointer' src='/images/apple-store.png'/>
                    <img className='ml-6 cursor-pointer' src='/images/windows.png'/>
                </div>
            </div>
            <div className='m-3 sm:ml-24 md:ml-44  lg:ml-0 sm:mt-10'>
                <img src='/images/focused-video.png' />
            </div>
        </div>
  )
};

export default StayFocus;
