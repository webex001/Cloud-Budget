import React from 'react';

const Contact = () => {
  return(
      <div className='flex justify-evenly mt-24 mb-24'>
          <div className=''>
            <h3 className='text-4xl mb-10'>Contact</h3>
            <p className=''>Questions or concerns? Just fill out the form below and our support <br/> team will get back to you within 24 hours</p>
          </div>
          <div>
            <div className='flex'>
                <input className='border-2 border-gray-400 active:border-gray-400 rounded pt-3 pb-3 pl-4 w-60' type="text" placeholder='First Name'/>
                <input className='border-2 border-gray-400 rounded pt-3 pb-3 pl-4 ml-6 w-60' type="text" placeholder='Last Name'/>
            </div>
            <div>
                <input className='border-2 border-gray-400 rounded pt-3 pb-3 pl-4 mt-4 w-full' type="text" placeholder='Phone Number'/>
            </div>
            <div>
                <select className='border-2 border-gray-400 rounded text-gray-400 pt-3 pb-3 pl-4 mt-4 w-full pr-10' >
                    <option>Select Service</option>
                </select>
            </div>
            <div className='mt-5'>
                <a href='' className='uppercase bg-red-500 text-white pt-3 pb-3 pl-6 pr-6 rounded-md hover:bg-red-600' type='button'>submit now</a>
            </div>
          </div>
      </div>
  );
};

export default Contact;
