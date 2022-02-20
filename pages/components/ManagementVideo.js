import React from 'react';

const ManagementVideo = () => {
  return(
      <div className='lg:grid lg:grid-cols-2  md:mt-24 md:mb-20 mb-14 p-10'>
          <div className=''>
            <h2 className='text-center font-bold mt-14 text-3xl lg:text-4xl md:text-4xl md:mt-0'>Easy to Use Cloud Budget <br /> Management Software</h2>
            <p className='lg:text-left mt-8 md:text-base lg:pl-10 lg:pr-10  mb-5 font-meduim sm:pl-14 sm:pr-14 text-center sm:text-base'>
            Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.
            </p>
            <a href='#' className='uppercase lg:ml-10 lg:pl-28 mt-10 text-red-500 text-sm ml-32 sm:ml-60 font-bold'>Learn More</a>
          </div>
          <div className=' m-4 md:m-0 sm:ml-8 md:ml-24 lg:ml-0 lg:mt-0 mt-10 md:mt-16 '>
              <div className='flex md:mr-48 lg:mr-0'>
                <span className='z-10 cursor-pointer '><img className='mt-24 ' src='../images/play button.png'/></span>
                <img className='-ml-7 z-0' src='../images/video_bg.png' />
              </div>
          </div>
      </div>
  )
};

export default ManagementVideo;
