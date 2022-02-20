import React from 'react';

const ManagementVideo = () => {
  return(
      <div className='lg:grid lg:grid-cols-2  md:mt-24 md:mb-20 mb-14 p-10'>
          <div className=''>
            <h2 className='text-center font-bold mt-14 text-3xl'>Easy to Use Cloud Budget <br /> Management Software</h2>
            <p className='lg:text-left mt-8 lg:pl-28 lg:pr-24 mb-5 font-meduim sm:pl-14 sm:pr-14 text-center'>
            Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.
            </p>
            <a href='#' className='uppercase lg:pl-28 mt-10 text-red-500 text-sm ml-32 sm:ml-72 font-semibold'>Learn More</a>
          </div>
          <div className=' m-4 sm:ml-20 lg:ml-24 mt-10 '>
              <div className='flex'>
                <span className='z-10 cursor-pointer '><img className='mt-24 ' src='../images/play button.png'/></span>
                <img className='-ml-7 z-0' src='../images/video_bg.png' />
              </div>
          </div>
      </div>
  )
};

export default ManagementVideo;
