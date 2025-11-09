import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Content from './Content'
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
    const Headingref = useRef(null)
    const ConatinerRef = useRef(null)
    const WhaleRef = useRef(null)
    const bottomtext  = useRef(null)

    useGSAP(() => {
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
        },'a')
        tl.to('.Dot', {
            scale: 0.7,
            x:'-5vw',
            duration: 2,
        },'a')
        tl.to(WhaleRef.current, {
            y: '-76.5%',
            duration: 2
        },'a')
        tl.to('.Cryptoicon', {
            y: '-200%',
            duration: 2
        },'a')
        tl.to(bottomtext.current, {
            y: '20%',
            opacity:0
        },'a')
    })


    return (
        <>
            <div id='home' ref={ConatinerRef} className='min-h-screen w-full relative bg-[#f97af3]'>
                <div className='h-screen w-full relative'>
                    <div>
                        <h1 ref={Headingref} className='font-bold text-[35vw] text-white left-[6.5%] absolute -mt-[8%] tracking-tighter'>frenly</h1>
                        <img className='Cryptoicon absolute h-[22vh] top-[32%] left-[14%] rotate-[-40deg]' src="/Images/Fox.png" alt="Fox" />
                        <img className='Cryptoicon absolute h-[18vh] top-[15%] left-[50%] rotate-15' src="/Images/Pepe.png" alt="Pepe" />
                        <img className='Cryptoicon absolute h-[20vh] top-[32%] right-[14%] rotate-25' src="/Images/Phantom.png" alt="Phantom" />
                        <img className='Dot absolute h-[15vh] top-[52%] right-5 rotate-5' src="/Images/Octagon.png" alt="Phantom" />
                        <div ref={bottomtext} className='absolute bottom-0 py-2 px-3 text-white'>
                            <p className='text-sm font-medium'>Smart limits, fair growth — where founders and holders win together.</p>
                            <div>
                                <h1 className='text-4xl font-extrabold'>No More Insider Dumps.</h1>
                                <h1 className='text-4xl font-extrabold'>No More Quite Rug Pulls.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={WhaleRef} className='w-full h-auto object-cover absolute top-[79%]'>
                    <img className='' src="/Images/Whale.png" alt="" />
                    <div className='absolute top-[90%] left-[40%] flex p-2 drop-shadow-sm bg-white/30 backdrop-blur-md rounded-full gap-8'>
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