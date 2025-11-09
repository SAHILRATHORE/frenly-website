import React from 'react'
import Sliding from './Sliding'
import TheProblemContent from './TheProblemContent'
import Card from './Card'
import ProblemContent2 from './ProblemContent2'

const TheProblem = () => {
  return (
   <div id="problem" className='min-h-screen w-[98%] mx-[1%] rounded-4xl  bg-[#efe78c] relative p-1'>
    <Sliding/>
    <TheProblemContent/>
    <Card/>
    <ProblemContent2/>
    <img className='absolute h-[7vh] bottom-[15%] rotate-75 left-[8%]' src="/Images/Arrow1.png" alt="" />
    <img className='absolute h-[15vh] bottom-[25%] rotate-150 right-[8%]' src="/Images/Arrow2.png" alt="" />
   </div>
  )
}

export default TheProblem 