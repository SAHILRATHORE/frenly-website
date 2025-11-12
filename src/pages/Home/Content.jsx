import React from 'react'
import Fox from '../../Images/Fox.png'
import Notebook from '../../Images/Notebook.png'
import Monitor from '../../Images/Monitor.png'

const Content = () => {
  return (
    <div className='lg:h-[110vh] lg:mt-0 my-[10%] w-full flex lg:justify-center lg:items-center relative'>
        <div className='lg:h-[80vh] lg:w-[60vw] flex flex-col justify-center px-5'>
            <h1 className='bg-[#f97af3] w-fit px-3 py-1 rounded-full text-white font-medium'>About FRENLY</h1>
            <p className='my-8 font-medium text-3xl font-[cursive] leading-12'>Uncontrolled Selling Destroys Trust. <span className='text-[#bf37b8]'>Frenly Fixes </span>it <br/> With Daily On-Market Limits, Unlimited<br/>Off-Market Exits Via <span className='text-[#bf37b8]'>PoolParty, </span>Instant Custody,<br/>And Zero Middlemen For Token Contribution.</p>
            <button className='bg-black w-fit px-3 py-2 rounded-full text-white font-medium'>Get Started</button>
        </div>
        <img className='absolute lg:h-[9vw] h-[10%] lg:bottom-[30%] bottom-[50%] lg:right-[15%] right-[5%] lg:rotate-15 rotate-30' src={Fox} alt="" />
        <img className='absolute h-[10%] lg:h-[9vw] bottom-[18%] left-[10%] -rotate-15' src={Notebook} alt="" />
        <img className='absolute h-[10%] lg:h-[9vw] lg:top-[15%] top-[5%] right-[25%] ' src={Monitor} alt="" />
    </div>
  )
}

export default Content