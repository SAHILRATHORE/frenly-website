import React from 'react'
import NavbarSlider from './NavbarSlider'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between py-1 px-2 items-center fixed w-full z-20'>
            <h1 className='text-white font-extrabold text-3xl'>frenly</h1>
            <NavbarSlider/>
            <button className='bg-black text-white py-2 px-4 rounded-full text-sm font-bold'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar