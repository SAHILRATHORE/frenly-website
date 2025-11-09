import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Different = () => {
  const PageRef = useRef(null)
  const CardRef = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:PageRef.current,
                start:'top top',
                end:'90% 30%',
                scrub:true,
                // markers:true,
                pin:true
            }
        })
        tl.from(CardRef.current,{
            y:'100vh'
        })
    })
  return (
    <div ref={PageRef} className='h-screen w-full p-4 flex flex-col justify-center items-center relative'>
      <div className=' h-[15vh] w-full flex items-center overflow-hidden gap-15 mask-x-from-90%'>

        <div className='DifferentMoving flex gap-15 whitespace-nowrap h-full items-center'>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
        </div>
        <div className='DifferentMoving flex gap-15 whitespace-nowrap h-full items-center'>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
          <h1 className='text-3xl'>Why Frenly is Different</h1>
        </div>
      </div>
      <div className='flex flex-col items-center absolute bottom-8 w-1/3'>
        <h1 className='text-3xl font-extrabold'>* * *</h1>
        <p className='text-sm capitalize text-center font-bold'>Traditional vesting forces contributors to trust a central authority, frenly builds trust directly into the blockchain.</p>
      </div>
      <div ref={CardRef} className='absolute h-[65%] w-[55%] bg-[#cdc7c7] rounded-4xl p-4 pr-15 inset-shadow-xs flex flex-col justify-around'>
            <div className='flex justify-between border-b border-[#c6c1c1] py-3'>
                <h1 className='text-black bg-white rounded-4xl px-3 py-1 font-medium '>FEATURE</h1>
                <div className='flex gap-20'>
                    <h1 className='text-black bg-white rounded-4xl px-3 py-1 font-medium text-sm'>TRADITIONAL VESTING</h1>
                    <h1 className='text-black bg-white rounded-4xl px-3 py-1 font-medium text-sm'>FRENLY</h1>
                </div>
            </div>
            <div className='flex justify-between border-b border-[#c6c1c1] py-3'>
                <h1 className='text-black font-medium '>Immediate Custody</h1>
                <div className='flex gap-20'>
                    <i className="ri-close-circle-fill text-[#E83ECD] text-3xl pr-23"></i>
                    <i className="ri-checkbox-circle-fill text-[#2AC220] text-3xl pr-5"></i>
                </div>
            </div>
            <div className='flex justify-between border-b py-3 border-[#c6c1c1]'>
                <h1 className='text-black font-medium '>Immediate Sell Limits</h1>
                <div className='flex gap-20'>
                    <i className="ri-close-circle-fill text-[#E83ECD] text-3xl pr-23"></i>
                    <i className="ri-checkbox-circle-fill text-[#2AC220] text-3xl pr-5"></i>
                </div>
            </div>
            <div className='flex justify-between border-b py-3 border-[#c6c1c1]'>
                <h1 className='text-black font-medium '>On-Chain Enforcement</h1>
                <div className='flex gap-20'>
                    <i className="ri-close-circle-fill text-[#E83ECD] text-3xl pr-23"></i>
                    <i className="ri-checkbox-circle-fill text-[#2AC220] text-3xl pr-5"></i>
                </div>
            </div>
            <div className='flex justify-between border-b py-3 border-[#c6c1c1]'>
                <h1 className='text-black font-medium'>Contribute Empowerment</h1>
                <div className='flex gap-20'>
                    <i className="ri-close-circle-fill text-[#E83ECD] text-3xl pr-23"></i>
                    <i className="ri-checkbox-circle-fill text-[#2AC220] text-3xl pr-5"></i>
                </div>
            </div>
            <div className='flex justify-between border-b py-3 border-[#c6c1c1]'>
                <h1 className='text-black font-medium '>Community Trust</h1>
                <div className='flex gap-20'>
                   <i className="ri-close-circle-fill text-[#E83ECD] text-3xl pr-23"></i>
                    <i className="ri-checkbox-circle-fill text-[#2AC220] text-3xl pr-5"></i>
                </div>
            </div>
            <div className='flex justify-between py-3 border-[#c6c1c1]'>
                <h1 className='text-black font-medium '>OTC Exits</h1>
                <div className='flex gap-20'>
                    <i className="ri-close-circle-fill text-[#E83ECD] text-3xl pr-23"></i>
                    <i className="ri-checkbox-circle-fill text-[#2AC220] text-3xl pr-5"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Different