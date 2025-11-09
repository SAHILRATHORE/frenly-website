import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const WhyCard = () => {
    const WhyRef = useRef(null)
    const Headingref = useRef(null)


    useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: WhyRef.current,
      start: 'top top',
      end: '+=150%',
      scrub: 1.1,
    //   markers: true,
      pin: true,
    },
  })

  tl.to(Headingref.current, {
    scale: 0.7,
    duration:0.1,
  },'c')
  tl.to('.Image', {
    scale: 0.7,
    duration:0.1,
  },'c')
  .from('.DivCard1', {
    y: '120vh',
    rotate:'45deg',
    opacity: 0,
    ease: 'power4.out',
    // stagger: 0.3, 
  },'c')
  .from('.DivCard2', {
    y: '120vh',
    rotate:'-45deg',
    opacity: 0,
    ease: 'power4.out',
    // stagger: 0.3, 
  })
  .from('.DivCard3', {
    y: '120vh',
    rotate:'45deg',
    opacity: 0,
    ease: 'power4.out',
    // stagger: 0.3, 
  })
  .from('.DivCard4', {
    y: '120vh',
    rotate:'-45deg',
    opacity: 0,
    ease: 'power4.out',
    // stagger: 0.3,
  })
})



    return (
        <div ref={WhyRef} className='h-screen w-full relative flex flex-col justify-center items-center'>
          <img className='Image absolute h-[60vh] top-40 right-50 ' src="/Images/Blob.png" alt="" />
            <div ref={Headingref} className='flex flex-col gap-8 items-center'>
              
                <h1 className='bg-pink-400 shadow-xl/30 w-fit px-3.5 py-1 rounded-full text-white font-medium z-10'>Why FRENLY</h1>
                <div className='text-7xl font-medium tracking-tighter capitalize'>the <span className='text-pink-500'>frenly.</span> solution</div>
            </div>
            <div className='DivCard1 absolute top-25'>
                <img className='absolute -top-10 -left-10 h-[15vh] z-10' src="/Images/Phantom.png" alt="" />
                <div className='h-[50vh] w-[17vw] bg-[#efe78c] rounded-3xl p-5 flex flex-col justify-center items-center relative'>
                    <h1 className='text-3xl capitalize font-bold leading-7'>immediate</h1>
                    <h1 className='text-3xl capitalize font-bold leading-7'>custody</h1>
                    <p className='capitalize absolute bottom-5 text-[12px] font-medium text-center'>Tokens are in contributor wallets from day one.</p>
                </div>
            </div>
            <div className='DivCard2 absolute right-115'>
                <img className='absolute -top-10 -right-10 h-[15vh] z-10' src="/Images/Pepe.png" alt="" />
                <div className='h-[50vh] w-[17vw] bg-pink-400 rounded-3xl p-5 flex flex-col justify-center items-center relative'>
                    <h1 className='text-3xl capitalize font-bold leading-7'>on-chain</h1>
                    <h1 className='text-3xl capitalize font-bold leading-7'>sell limits</h1>
                    <p className='capitalize absolute bottom-5 text-[12px] font-medium text-center'>Code-enforced limits processed damaging dumps.</p>
                </div>
            </div>
            <div className='DivCard3 absolute left-115 top-50'>
                <img className='absolute -top-14 -left-25 h-[20vh] -rotate-45 z-10' src="/Images/Fox.png" alt="" />
                <div className='h-[50vh] w-[17vw] bg-green-400 rounded-3xl p-5 flex flex-col justify-center items-center relative'>
                    <h1 className='text-3xl capitalize font-bold leading-7'>immutable</h1>
                    <h1 className='text-3xl capitalize font-bold leading-7'>rules</h1>
                    <p className='capitalize absolute bottom-5 text-[12px] font-medium text-center'>Once set, no one can override them - not frenly, not the project.</p>
                </div>
            </div>
            <div className='DivCard4 absolute bottom-25  top-60'>
                <div className='h-[50vh] w-[17vw] bg-[#beb183] rounded-3xl p-5 flex relative'>
                    <h1 className='text-2xl text-white capitalize font-medium leading-6.5'>The result? your chart stays healthy, your community stays confident, and your project stays on track.</h1>
                     <button className='bg-black w-[80%] py-2 bottom-5 rounded-full text-white text-sm absolute'>Get Started</button>
                </div>
            </div>
            <div className='flex flex-col items-center absolute top-[86vh] gap-5'>
                <h1 className='text-3xl font-extrabold'>* * *</h1>
                <p className='text-sm capitalize text-center font-bold'>Frenly is the firdt protocol to combine full contributor control with immutable on-chain safeguards.</p>
            </div>
        </div>
    )
}

export default WhyCard