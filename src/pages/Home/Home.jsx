import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Content from './Content'
import Fox from '../../Images/Fox.png'
import Pepe from '../../Images/Pepe.png'
import Phantom from '../../Images/Phantom.png'
import Octagon from '../../Images/Octagon.png'
import Whale from '../../Images/Whale.png'
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
    const Headingref = useRef(null)
    const ConatinerRef = useRef(null)
    const WhaleRef = useRef(null)
    const bottomtext = useRef(null)

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(max-width: 640px)": function () {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ConatinerRef.current,
                        start: 'top top',
                        end: '50% 30%',
                        scrub: 1,
                        // markers: true,
                        pin: true,
                    },
                })
                tl.to(Headingref.current, {
                    scale: 1.3,
                    x:'10%',
                    y:'20%',
                    rotate:'90deg',
                    duration: 2,
                }, 'a')
                tl.to('.Dot', {
                    rotate:'90deg',
                    scale: 0.7,
                    x: '-5vw',
                    duration: 2,
                }, 'a')
                tl.to(WhaleRef.current, {
                    y: '-76.5%',
                    duration: 2
                }, 'a')
                tl.to('.Cryptoicon', {
                    scale: 1.1,
                    y: '-200%',
                    duration: 2
                }, 'a')
                tl.to(bottomtext.current, {
                    // y: '20%',
                    opacity: 0
                }, 'a')
            },
            "(min-width: 641px)": function () {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ConatinerRef.current,
                        start: 'top top',
                        end: '50% 30%',
                        scrub: 1,
                        // markers: true,
                        pin: true,
                    },
                })

                tl.to(Headingref.current, {
                    scale: 0.9,
                    duration: 2,
                }, 'a')
                tl.to('.Dot', {
                    scale: 0.7,
                    x: '-5vw',
                    duration: 2,
                }, 'a')
                tl.to(WhaleRef.current, {
                    y: '-76.5%',
                    duration: 2
                }, 'a')
                tl.to('.Cryptoicon', {
                    y: '-200%',
                    duration: 2
                }, 'a')
                tl.to(bottomtext.current, {
                    y: '20%',
                    opacity: 0
                }, 'a')
            },
        })

    }, [])


    return (
        <>
            <div id='home' ref={ConatinerRef} className='lg:min-h-screen w-full relative bg-[#f97af3]'>
                <div className='h-screen w-full relative'>
                    <div>
                        <h1 ref={Headingref} className='font-bold lg:text-[35vw] text-[9rem] text-white lg:left-[6.5%] left-[1%] absolute lg:-mt-[8%] mt-[25%] lg:tracking-tighter'>frenly</h1>
                        <img className='Cryptoicon absolute lg:h-[22vh] h-[10%] lg:top-[32%] top-[35%] lg:left-[14%] left-[0%] rotate-[-40deg]' src={Fox} alt="Fox" />
                        <img className='Cryptoicon absolute lg:h-[18vh] h-[8%] top-[15%] left-[50%] rotate-15' src={Pepe} alt="Pepe" />
                        <img className='Cryptoicon absolute lg:h-[20vh] h-[7%] lg:top-[32%] top-[33%] lg:right-[14%] right-[18%] rotate-25' src={Phantom} alt="Phantom" />
                        <img className='Dot absolute lg:h-[15vh] h-[6%] lg:top-[52%] top-[33%] lg:right-5 right-0 rotate-5' src={Octagon} alt="Phantom" />
                        <div ref={bottomtext} className='absolute lg:bottom-0 bottom-35 py-2 px-3 text-white'>
                            <p className='lg:text-sm text-md font-medium'>Smart limits, fair growth — where founders and holders win together.</p>
                            <div>
                                <h1 className='lg:text-4xl text-5xl font-extrabold'>No More Insider Dumps.</h1>
                                <h1 className='lg:text-4xl text-5xl font-extrabold'>No More Quite Rug Pulls.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={WhaleRef} className='w-full lg:h-auto object-cover absolute lg:top-[79%] top-[75%]'>
                    <img className='' src={Whale} alt="" />
                    <div className='lg:absolute lg:top-[90%] mt-10 lg:mt-0 w-fit lg:left-[40%] ml-[15%] lg:ml-0 flex p-2 drop-shadow-sm bg-white/30 backdrop-blur-md rounded-full gap-8'>
                        <button className='bg-white p-3 rounded-full font-medium'>Without FRENLY</button>
                        <button className='p-3 rounded-full font-medium'>With FRENLY</button>
                    </div>
                </div>
            </div>
            <Content />
        </>
    )
}

export default Home