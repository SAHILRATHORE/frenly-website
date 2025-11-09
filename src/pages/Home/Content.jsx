import React from 'react'

const Content = () => {
  return (
    <div className='h-[110vh] w-full flex justify-center items-center relative'>
        <div className='h-[80vh] w-[60vw] flex flex-col justify-center px-5'>
            <h1 className='bg-[#f97af3] w-fit px-3 py-1 rounded-full text-white font-medium'>About FRENLY</h1>
            <p className='my-8 font-medium text-3xl font-[cursive] leading-12'>Uncontrolled Selling Destroys Trust. <span className='text-[#bf37b8]'>Frenly Fixes </span>it <br/> With Daily On-Market Limits, Unlimited<br/>Off-Market Exits Via <span className='text-[#bf37b8]'>PoolParty, </span>Instant Custody,<br/>And Zero Middlemen For Token Contribution.</p>
            <button className='bg-black w-fit px-3 py-2 rounded-full text-white font-medium'>Get Started</button>
        </div>
        <img className='absolute h-[9vw] bottom-[30%] right-[15%] rotate-15' src="/Images/Fox.png" alt="" />
        <img className='absolute h-[9vw] bottom-[18%] left-[10%] -rotate-15' src="/Images/Notebook.png" alt="" />
        <img className='absolute h-[9vw] top-[15%] right-[25%] ' src="/Images/Monitor.png" alt="" />
    </div>
  )
}

export default Content