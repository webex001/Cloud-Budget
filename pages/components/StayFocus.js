import React from 'react';

const StayFocus = () => {
  return(
        <div className='flex-col justify-evenly bg-red-500 pt-20 pb-20 sm:flex-wrap'>
            <div className='text-white'>
                <h4 className='text-3xl text-center font-semibold mt-10'>Stay focused on saving <br />money</h4>
                <p className='text-sm ml-3 font-normal mt-10'>
                    It is important to stay focused on saving money in any way you can. We <br /> help you monitor your spending habits so you can easily spot and cut <br /> any unnecessary expenses. Simply join today to get started!
                </p>
                <div className='flex mt-8 mb-10 ml-4'>
                    <img className='' src='/images/playstore.png'/>
                    <img className='ml-6' src='/images/apple-store.png'/>
                    <img className='ml-6' src='/images/windows.png'/>
                </div>
            </div>
            <div className='m-3 sm:-ml-20 sm:mt-10'>
                <img src='/images/focused-video.png' />
            </div>
        </div>
  )
};

export default StayFocus;
