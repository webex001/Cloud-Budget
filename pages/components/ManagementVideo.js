import React from 'react';

const ManagementVideo = () => {
  return(
      <div className='flex mt-24 mb-20'>
          <div className='flex-1'>
            <h2 className='text-center font-normal mt-4 text-4xl'>Easy to Use Cloud Budget <br /> Management Software</h2>
            <p className='text-left mt-10 pl-28 pr-24 mb-5 font-meduim'>
            Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.
            </p>
            <a href='#' className='uppercase pl-28 mt-10 text-red-500 text-sm font-semibold'>Learn More</a>
          </div>
          <div className='flex-1'>
              <div className='flex'>
                <span className='z-10 cursor-pointer'><img className='mt-28 ' src='../images/play button.png'/></span>
                <img className='-ml-10 z-0' src='../images/video_bg.png' />
              </div>
          </div>
      </div>
  )
};

export default ManagementVideo;
