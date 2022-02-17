import React from 'react';

const Contact = () => {
  return(
      <div className='flex-col justify-evenly mt-24 mb-24 sm:flex-wrap'>
          <div className=''>
            <h3 className='text-4xl font-semibold mb-5 text-center'>Contact</h3>
            <p className='font-normal text-sm leading-5 text-left m-3'>Questions or concerns? Just fill out the form below and our support <br/> team will get back to you within 24 hours</p>
          </div>
          <div>
            <div className='flex-col sm:mt-10'>
                <input className='border-2 border-gray-400 active:border-gray-400 rounded pt-3 pb-3 pl-4 w-72 mb-4 ml-3 mt-5' type="text" placeholder='First Name'/>
                <input className='border-2 border-gray-400 rounded pt-3 pb-3 pl-4 ml-3 w-72 ' type="text" placeholder='Last Name'/>
            </div>
            <div>
                <input className='border-2 border-gray-400 rounded pt-3 pb-3 pl-4 mt-4 w-72 ml-3' type="text" placeholder='Phone Number'/>
            </div>
            <div>
                <select className='border-2 border-gray-400 rounded text-gray-400 pt-3 pb-3 pl-4 mt-4 w-72 ml-3 pr-10' >
                    <option>Select Service</option>
                </select>
            </div>
            <div className='mt-5 sm:mt-10'>
                <a href='' className='uppercase bg-red-500 text-white pt-3 pb-3 pl-6 pr-6 rounded-md hover:bg-red-600 ml-3' type='button'>submit now</a>
            </div>
          </div>
      </div>
  );
};

export default Contact;
