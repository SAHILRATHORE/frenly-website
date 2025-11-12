import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Blob from '../../Images/Blob.png'
import Arrow2 from '../../Images/Arrow2.png'
gsap.registerPlugin(ScrollTrigger)

const WhyContent = () => {
    const DivRef = useRef(null)
    const ImageRef = useRef(null)
    const BlobRef = useRef(null)
    const WhyPageRef = useRef(null)
    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(max-width: 640px)": function () {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: DivRef.current,
                        // markers: true,
                        start: 'top 20%',
                        end: '300% 20%',
                        pin: true,
                        scrub: true
                    },
                })
                tl.to(ImageRef.current, {
                    rotate: '0deg',
                    ease: 'none'
                }, 'd')
                tl.to(BlobRef.current, {
                    scale: 0.5,
                    ease: 'none'
                }, 'd')

            },

            "(min-width: 641px)": function () {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: DivRef.current,
                        // markers: true,
                        end: '160% 14%',
                        pin: true,
                        scrub: true
                    },
                })
                tl.to(ImageRef.current, {
                    rotate: '0deg',
                    ease: 'none'
                }, 'd')
                tl.to(BlobRef.current, {
                    scale: 0.5,
                    ease: 'none'
                }, 'd')
            },

        });
    }, []);
    return (
        <div ref={WhyPageRef} className='h-[200vh] w-full flex relative'>
            <img ref={BlobRef} className='lg:left-0 -left-8 top-[80vh]  -z-10 absolute lg:h-[60vh] h-[30vh] ' src={Blob} alt="Blob" />
            <div ref={DivRef} className='lg:w-[55%] w-[40%]  lg:h-[80vh] h-fit ml-4 lg:ml-0 mt-15 lg:mt-0 lg:p-[10%]'>
                <h1 className='bg-pink-400 shadow-xl/20 w-fit px-3.5 py-1 rounded-full text-white font-medium whitespace-nowrap '>Why FRENLY</h1>
                <h1 className='text-4xl font-medium font-[cursive] my-10 leading-12'>How It Works<br />4 Simple Steps</h1>
                <img ref={ImageRef} className='lg:h-[20vh] h-[8vh] rotate-75' src={Arrow2} alt="Arrow2" />
            </div>
            <div className='lg:w-[45%] w-[60%] mt-15  lg:mt-0 lg:pl-5  lg:py-[10.5%] flex flex-col gap-[20vh] '>
                <div className='lg:w-2/3 px-5 lg:px-0 flex flex-col gap-5 '>
                    <h1 className='bg-[#beb183] uppercase w-fit px-3.5 py-1 rounded-full text-black font-medium '>alocate tokens</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>Projects send tokens directly into frenly-powered wallets for each contributor. </p>
                </div>
                <div className='lg:w-2/3 px-5 lg:px-0 flex flex-col gap-5'>
                    <h1 className='bg-black uppercase w-fit px-3.5 py-1 rounded-full text-white font-medium '>Instant Ownership</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>Contributors - whether team members, influencer or presealers - hold their tokens from day one. no lock-ups no waiting, just full custody. </p>
                </div>
                <div className='lg:w-2/3 px-5 lg:px-0 flex flex-col gap-5'>
                    <h1 className='bg-green-400 uppercase w-fit px-3.5 py-1 rounded-full text-black font-medium '>Built-In Protection</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>On-chain sell limits automatically manage on-market exits, preventing damaging dumps without any manual oversight.</p>
                </div>
                <div className='lg:w-2/3 px-5 lg:px-0 flex flex-col gap-5'>
                    <h1 className='bg-pink-400 uppercase w-fit lg:px-3.5 px-4 lg:py-1 py-2 rounded-full text-white font-medium lg:whitespace-nowrap '>Controlled Freedom - Exit Without Impact</h1>
                    <p className='text-lg font-medium leading-6 capitalize'>When it's time to sell, contributors can bypass sell limits by using poolparty's price-impact-free C1 pool - ensuring maximum returns without harming the project's chart.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyContent