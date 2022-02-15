import React from 'react';
import tw from 'tailwind-styled-components'

const Navbar = () => {
  return (
      <div className='container flex justify-around pt-8 text-white'>
          <div className='flex cursor-pointer'>
            <span className='mt-1'><img src='./images/logo.svg' /></span><h5 className='text-lg uppercase font-bold ml-2'>CloudBudget</h5>
          </div>

          <div className=''>
              <ul className='flex justify-evenly mt-1.5'>
                  <li className='text-sm uppercase font-normal leading-5 ml-8 cursor-pointer font-bold'>Overview</li>
                  <li className='text-sm uppercase font-normal leading-5 ml-8 cursor-pointer'>Features</li>
                  <li className='text-sm uppercase font-normal leading-5 ml-8 cursor-pointer'>Technology</li>
                  <li className='text-sm uppercase font-normal leading-5 ml-8 cursor-pointer'>Contact</li>
                  <li className='text-sm uppercase font-normal leading-5 ml-8 cursor-pointer'>Sign up</li>
              </ul>
          </div>
            <a href='' className='outline outline-2  outline-offset-2 pt-2 pb-2 pl-10 pr-10 uppercase rounded-sm hover:bg-white hover:text-black hover:border-0 hover:border-white transition-all duration-100'>Login</a>
          <div>

          </div>
      </div>
  )
};

export default Navbar;

