import React, { useState } from 'react';

const Navbar = () => {
  let Links = [
    {name:"OVERVIEW", link:"/", id: 1},
    {name:"FEATURES", link:"/", id: 2},
    {name:"TECHNOLOGY", link:"/", id: 3},
    {name:"CONTACT", link:"/", id: 4},
    {name:"SIGN UP", link:"/", id: 5}
  ]

  let [open, setOpen] = useState(false);

  // console.log(Links);

  return (
      <div className='container bg-white md:bg-transparent shadow-md md:shadow-none lg:flex lg:justify-around pt-8 text-black md:text-white text-left pb-12 md:pb-6'>
          <div className='flex cursor-pointer ml-5'>
            <span className='mt-1'><img src='./images/logo.svg' /></span><h5 className='text-lg uppercase font-bold ml-2'>CloudBudget</h5>
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <div className=' '>
              <ul className={`lg:flex lg:justify-evenly mt-1 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1]  left-0 w-full md:w-full lg:w-full transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                {
                  Links.map((links) => (
                    <li className='text-sm uppercase leading-5 ml-8 cursor-pointer font-normal md:my-0 md:ml-8 my-7' key={links.name}>
                      <a href= {links.id}>{links .name}</a>
                    </li>
                  ))
  
                }
              </ul>
          </div>
            {/* <a href='' className='outline outline-2  outline-offset-2 pt-2 pb-2 pl-10 pr-10 uppercase rounded-sm md:hover:bg-white md:hover:text-black hover:border-0 hover:border-white transition-all duration-100 ml-8 hover:bg-black hover:text-white absolute md:static'>Login</a> */}
          <div>
          </div>
      </div>
  )
};

export default Navbar;

