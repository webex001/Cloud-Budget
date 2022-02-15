import React from 'react';

const Footer = () => {
  return(
    <div className='bg-gray-50 pt-20 pb-20'>
      <div className='flex justify-evenly'>
          <div className=''>
            <h2 className='font-bold text-lg mb-6'>Address</h2>
            <p className=''>Pipang Ltd, Griva Digeni, <br />
                81-83 Jacovides Tower, 1st Floor <br />
                1090 Picosia USA.
            </p>
          </div>
          <div className=''>
            <h2 className='font-bold text-lg mb-6'>Services</h2>
            <ul>
                <li className='mb-1 cursor-pointer'>Overview</li>
                <li className='mb-1 cursor-pointer'>Features</li>
                <li className='mb-1 cursor-pointer'>Technology</li>
                <li className='mb-1 cursor-pointer'>Terms & Condition</li>
                <li className='mb-1 cursor-pointer'>Privacy</li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-bold text-lg mb-6'>Get in Touch</h2>
            <p className='cursor-pointer mb-1'>davidbobboi@gmail.com</p>
            <p className='cursor-pointer'>+1 844-721-7120</p>
            <div className='flex mt-5'>
              <img className='w-5 cursor-pointer' src='/images/feather-facebook.png' />
              <img className='ml-2 w-5 cursor-pointer' src='/images/feather-linkedin.png' />
              <img className='ml-2 w-5 cursor-pointer' src='/images/feather-twitter.png' />
            </div>
          </div>
          <div className=''>
            <h2 className='font-bold text-lg mb-6'>We Support</h2>
            <img className='cursor-pointer' src='/images/support.png'/>
          </div>
      </div>
      <p className='text-center mt-24'>Copyright 2018 CloudBudget</p>
    </div>
  )
};

export default Footer;
