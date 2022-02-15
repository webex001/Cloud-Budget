import React from 'react';

const Contact = () => {
  return(
      <div className='flex justify-around'>
          <div className=''>
            <h3 className='text-4xl'>Contact</h3>
            <p className=''>Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
          </div>
          <div>
            <div className='flex'>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='First Name'/>
            </div>
            <div>
                <input type="text" placeholder='Phone Number'/>
            </div>
            <div>
                <select>
                    <option>Select Service</option>
                </select>
            </div>
            <div className=''>
                <a href='' className='uppercase bg-red-500 text-white' type='button'>submit now</a>
            </div>
          </div>
      </div>
  );
};

export default Contact;
