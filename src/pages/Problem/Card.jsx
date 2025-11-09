import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)
const Card = () => {
  const CardDivRef = useRef(null)
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:CardDivRef.current,
        start:'10% 95%',
        end:'30% 50%',
        scrub:1.2,
        // markers:true,
      },
    })
    tl.from('.Card',{
      y:'20%',
      // opacity:0,
      rotate:'-30deg'
    },'b')
    tl.from('.Card2',{
      y:'20%',
      // opacity:0,
      rotate:'30deg'
    },'b')
  })
  return (
    <div ref={CardDivRef} className='Card-Wrapper h-[65vh] w-[60vw] mt-10 mx-[20%] p-1 flex items-center gap-4 justify-center '>
      <div className='Card h-[75%] w-[30%] bg-black rounded-3xl p-5 flex flex-col'>
        <h1 className='text-white font-medium text-2xl'>The Chart Tanks</h1>
        <img className='w-[84%] mx-[8%] rounded-4xl mt-6 object-cover' src="/Images/Card1.jpg" alt="" />
      </div>
      <div className='Card2 h-[75%] w-[30%] bg-gray-500 rounded-3xl p-5 flex flex-col'>
        <h1 className='text-black font-medium text-2xl'>Trust Disappears</h1>
        <img className='h-[40vh] mx-[8%] rounded-4xl object-cover' src="/Images/Card2.png" alt="" />
      </div>
      <div className='Card h-[75%] w-[30%] bg-pink-400 rounded-3xl p-5 flex flex-col'>
        <h1 className='text-white font-medium text-2xl'>Momentum Stalls</h1>
        <img className='h-[25vh] w-[30vw] mx-[8%] rounded-4xl mt-6' src="/Images/Card3.png" alt="" />
      </div>
    </div>
  )
}

export default Card