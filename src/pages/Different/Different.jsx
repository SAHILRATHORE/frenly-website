import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Different = () => {
    const PageRef = useRef(null)
    const CardRef = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: PageRef.current,
                start: 'top top',
                end: '90% 30%',
                scrub: true,
                // markers:true,
                pin: true
            }
        })
        tl.from(CardRef.current, {
            y: '100vh'
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
            <div className='flex flex-col items-center absolute lg:bottom-8 bottom-2 lg:w-1/3'>
                <h1 className='text-3xl font-extrabold'>* * *</h1>
                <p className='text-sm capitalize text-center font-bold'>Traditional vesting forces contributors to trust a central authority, frenly builds trust directly into the blockchain.</p>
            </div>
            <div ref={CardRef} className='absolute lg:h-[65%] h-fit lg:w-[55%] w-[70%] bg-[#cdc7c7] rounded-4xl lg:p-4 p-2 lg:pr-15 inset-shadow-xs flex flex-col justify-around '>
                <div className='flex justify-between border-b border-[#c6c1c1] py-3'>
                    <h1 className='text-black bg-white rounded-4xl lg:px-3 px-2 lg:py-1 h-fit lg:font-medium lg:text-sm text-[10px]'>FEATURE</h1>
                    <div className='flex lg:gap-20  gap-8'>
                        <h1 className='text-black bg-white rounded-4xl lg:px-3 px-2 lg:py-1 h-fit whitespace-nowrap font-medium lg:text-sm text-[10px]'>TRADITIONAL VESTING</h1>
                        <h1 className='text-black bg-white rounded-4xl lg:px-3 px-2 lg:py-1 h-fit font-medium lg:text-sm text-[10px]'>FRENLY</h1>
                    </div>
                </div>
                <div className='flex justify-between border-b border-[#c6c1c1] lg:py-3 py-1'>
                    <h1 className='text-black lg:text-[15px] text-[10px] font-medium mt-1 '>Immediate Custody</h1>
                    <div className='flex gap-20'>
                        <i className="ri-close-circle-fill text-[#E83ECD] lg:text-3xl lg:pr-23"></i>
                        <i className="ri-checkbox-circle-fill text-[#2AC220] lg:text-3xl lg:pr-5 pr-4"></i>
                    </div>
                </div>
                <div className='flex justify-between border-b lg:py-3 py-1 border-[#c6c1c1]'>
                    <h1 className='text-black font-medium lg:text-[15px] text-[10px] mt-1 '>Immediate Sell Limits</h1>
                    <div className='flex gap-20'>
                        <i className="ri-close-circle-fill text-[#E83ECD] lg:text-3xl lg:pr-23"></i>
                        <i className="ri-checkbox-circle-fill text-[#2AC220] lg:text-3xl lg:pr-5 pr-4"></i>
                    </div>
                </div>
                <div className='flex justify-between border-b lg:py-3 py-1 border-[#c6c1c1]'>
                    <h1 className='text-black font-medium lg:text-[15px] text-[10px] mt-1 '>On-Chain Enforcement</h1>
                    <div className='flex gap-20'>
                        <i className="ri-close-circle-fill text-[#E83ECD] lg:text-3xl lg:pr-23"></i>
                        <i className="ri-checkbox-circle-fill text-[#2AC220] lg:text-3xl lg:pr-5 pr-4"></i>
                    </div>
                </div>
                <div className='flex justify-between border-b lg:py-3 py-1 border-[#c6c1c1]'>
                    <h1 className='text-black font-medium lg:text-[15px] text-[10px] mt-1'>Contribute Empowerment</h1>
                    <div className='flex gap-20'>
                        <i className="ri-close-circle-fill text-[#E83ECD] lg:text-3xl lg:pr-23"></i>
                        <i className="ri-checkbox-circle-fill text-[#2AC220] lg:text-3xl lg:pr-5 pr-4"></i>
                    </div>
                </div>
                <div className='flex justify-between border-b lg:py-3 py-1 border-[#c6c1c1]'>
                    <h1 className='text-black font-medium lg:text-[15px] text-[10px] mt-1'>Community Trust</h1>
                    <div className='flex gap-20'>
                        <i className="ri-close-circle-fill text-[#E83ECD] lg:text-3xl lg:pr-23"></i>
                        <i className="ri-checkbox-circle-fill text-[#2AC220] lg:text-3xl lg:pr-5 pr-4"></i>
                    </div>
                </div>
                <div className='flex justify-between lg:py-3 py-1 border-[#c6c1c1]'>
                    <h1 className='text-black font-medium lg:text-[15px] text-[10px] mt-1'>OTC Exits</h1>
                    <div className='flex gap-20'>
                        <i className="ri-close-circle-fill text-[#E83ECD] lg:text-3xl lg:pr-23"></i>
                        <i className="ri-checkbox-circle-fill text-[#2AC220] lg:text-3xl lg:pr-5 pr-4"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Different