import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import TheProblem from './pages/Problem/TheProblem'
import Why from './pages/Why/Why'
import Pool from './pages/C1/Pool'
import Different from './pages/Different/Different'
import Bottom from './pages/Bottom/Bottom'

const App = () => {
  return (
    <div className=''>
     <Navbar/> 
     <Home/>
     <TheProblem/>
     <Why/>
     <Pool/>
     <Different/>
     <Bottom/>
    </div>
  )
}

export default App