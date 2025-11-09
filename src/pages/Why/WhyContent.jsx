import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const WhyContent = () => {
    const DivRef = useRef(null)
    const ImageRef = useRef(null)
    const BlobRef = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: DivRef.current,
                // markers:true,
                end: '160% 14%',
                pin: true,
                scrub: true
            },
        })
        tl.to(ImageRef.current, {
            rotate: '0deg',
            ease: 'none'
        },'d')
        tl.to(BlobRef.current, {
            scale: 0.5,
            ease: 'none'
        },'d')
    })
    return (
        <div className=' h-[200vh] w-full flex relative'>
          <img ref={BlobRef} className='left-0 top-[80vh] absolute h-[60vh] right-50 ' src="/Images/Blob.png" alt="" />
            <div ref={DivRef} className='w-[55%] h-[80vh] p-[10%]'>
                <h1 className='bg-pink-400 shadow-xl/20 w-fit px-3.5 py-1 rounded-full text-white font-medium '>Why FRENLY</h1>
                <h1 className='text-4xl font-medium font-[cursive] my-10 leading-12'>How It Works<br />4 Simple Steps</h1>
                <img ref={ImageRef} className='h-[20vh] rotate-75' src="/Images/Arrow2.png" alt="" />
            </div>
            <div className='w-[45%] pl-5 py-[10.5%] flex flex-col gap-[20vh]'>
                <div className='w-2/3 flex flex-col gap-5'>
                    <h1 className='bg-[#beb183] uppercase w-fit px-3.5 py-1 rounded-full text-black font-medium '>alocate tokens</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>Projects send tokens directly into frenly-powered wallets for each contributor. </p>
                </div>
                <div className='w-2/3 flex flex-col gap-5'>
                    <h1 className='bg-black uppercase w-fit px-3.5 py-1 rounded-full text-white font-medium '>Instant Ownership</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>Contributors - whether team members, influencer or presealers - hold their tokens from day one. no lock-ups no waiting, just full custody </p>
                </div>
                <div className='w-2/3 flex flex-col gap-5'>
                    <h1 className='bg-green-400 uppercase w-fit px-3.5 py-1 rounded-full text-black font-medium '>Built-In Protection</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>On-chain sell limits automatically manage on-market exits, preventing damaging dumps without any manual oversight.</p>
                </div>
                <div className='w-2/3 flex flex-col gap-5'>
                    <h1 className='bg-pink-400 uppercase w-fit px-3.5 py-1 rounded-full text-white font-medium whitespace-nowrap '>Controlled Freedom - Exit Without Impact</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>When it's time to sell, contributors can bypass sell limits by using poolparty's price-impact-free C1 pool - ensuring maximum returns without harming the project's chart.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyContent