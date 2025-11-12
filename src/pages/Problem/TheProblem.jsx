import React from 'react'
import Sliding from './Sliding'
import TheProblemContent from './TheProblemContent'
import Card from './Card'
import ProblemContent2 from './ProblemContent2'
import Arrow1 from '../../Images/Arrow1.png'
import Arrow2 from '../../Images/Arrow2.png'

const TheProblem = () => {
  return (
   <div id="problem" className='min-h-screen lg:w-[98%] w-[96%] lg:mx-[1%] mx-[2%] rounded-4xl  bg-[#efe78c]  relative p-1'>
    <Sliding/>
    <TheProblemContent/>
    <Card/>
    <ProblemContent2/>
    <img className='absolute lg:h-[7vh] h-[2%] lg:bottom-[15%] bottom-[25%] rotate-75 left-[8%]' src={Arrow1} alt="Arrow1" />
    <img className='absolute lg:h-[15vh] h-[3%] lg:bottom-[25%] bottom-[3%] rotate-150 lg:right-[8%] right-[12%]' src={Arrow2} alt="Arrow2" />
   </div>
  )
}

export default TheProblem 