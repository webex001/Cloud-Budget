import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
      <div className=" bg-[url('/images/showcase-bg.png')] bg-cover pb-36 sm:bg-cover ">
          <Navbar />
          <div className='flex flex-col justify-center'>
              <h2 className=' text-white text-center mt-40 text-5xl lg:text-7xl sm:text-5xl md:text-7xl leading-10 uppercase font-bold non-italic '>CloudBudget</h2>
              <p className='text-white text-center text-sm leading-8 mt-6'>Cloud budget management for everyone. Only <br /> €69.95 a Month After a 7 Day Trial of <br /> Up to €4.99. <br /><br/>
              <a href='#' className='bg-white w-48 justify-center  text-red-500 hover:bg-red-100 hover:text-red-400 pt-4 pb-4 pl-10 pr-10 text-sm uppercase rounded-md'>Sign Up</a>
              </p>
          </div>

          

      </div>
  )
};

export default Header;
