import React from 'react';

const Footer = () => {
  return(
    <div className='bg-gray-50 pt-20 pb-20'>
      <div className='flex-col md:justify-evenly'>
          <div className=''>
            <h2 className='font-bold text-lg mb-2 text-center'>Address</h2>
            <p className='text-center'>Pipang Ltd, Griva Digeni, <br />
                81-83 Jacovides Tower, 1st Floor <br />
                1090 Picosia USA.
            </p>
          </div>
          <div className=''>
            <h2 className='font-bold text-lg mb-2 mt-10 text-center'>Services</h2>
            <ul>
                <li className='mb-1 cursor-pointer text-center'>Overview</li>
                <li className='mb-1 cursor-pointer text-center'>Features</li>
                <li className='mb-1 cursor-pointer text-center'>Technology</li>
                <li className='mb-1 cursor-pointer text-center'>Terms & Condition</li>
                <li className='mb-1 cursor-pointer text-center'>Privacy</li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-bold text-lg mb-2 mt-10 text-center'>Get in Touch</h2>
            <p className='cursor-pointer mb-1 text-center'>davidbobboi@gmail.com</p>
            <p className='cursor-pointer text-center'>+1 844-721-7120</p>
            <div className='flex mt-5 justify-center '>
              <img className='w-5 cursor-pointer' src='/images/feather-facebook.png' />
              <img className='ml-4 w-5 cursor-pointer' src='/images/feather-linkedin.png' />
              <img className='ml-4 w-5 cursor-pointer' src='/images/feather-twitter.png' />
            </div>
          </div>
          <div className=''>
            <h2 className='font-bold text-lg mb-2 text-center mt-10'>We Support</h2>
            <img className='cursor-pointer ml-12 sm:ml-52' src='/images/support.png'/>
          </div>
      </div>
      <p className='text-center mt-24'>Copyright 2022 CloudBudget</p>
    </div>
  )
};

export default Footer;
