import React from 'react'
import NavbarSlider from './NavbarSlider'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between py-1 px-2 items-center fixed w-full z-20'>
            <h1 className='text-white font-extrabold lg:text-3xl text-2xl'>frenly</h1>
            <NavbarSlider/>
            <button className='bg-black text-white lg:py-2 py-1 lg:px-4 px-2 rounded-full lg:text-sm text-[10px] font-bold'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar