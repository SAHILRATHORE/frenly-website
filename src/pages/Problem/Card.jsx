import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import Card1 from '../../Images/Card1.jpg'
import Card2 from '../../Images/Card2.png'
import Card3 from '../../Images/Card3.png'

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
    <div ref={CardDivRef} className='Card-Wrapper lg:h-[65vh] lg:w-[60vw] mt-10 lg:mx-[20%] p-1 lg:flex flex lg:flex-row flex-col items-center gap-4 justify-center'>
      <div className='Card lg:h-[75%] h-[30vh] lg:w-[30%] w-1/2 bg-black rounded-3xl p-5 flex flex-col'>
        <h1 className='text-white font-medium lg:text-2xl'>The Chart Tanks</h1>
        <img className='w-[84%] mx-[8%] rounded-4xl mt-6 object-cover' src={Card1} alt="Card1" />
      </div>
      <div className='Card2 lg:h-[75%] h-[30vh] lg:w-[30%] w-1/2 bg-gray-500 rounded-3xl p-5 flex flex-col'>
        <h1 className='text-black font-medium lg:text-2xl'>Trust Disappears</h1>
        <img className='lg:h-[40vh] h-full lg:mx-[8%] rounded-4xl object-cover' src={Card2} alt="Card2" />
      </div>
      <div className='Card lg:h-[75%] h-[30vh] lg:w-[30%] w-1/2 bg-pink-400 rounded-3xl p-5 flex flex-col'>
        <h1 className='text-white font-medium lg:text-2xl'>Momentum Stalls</h1>
        <img className='h-[25vh] lg:w-[30vw] w-full lg:mx-[8%] rounded-4xl mt-6' src={Card3} alt="Card3" />
      </div>
    </div>
  )
}

export default Card