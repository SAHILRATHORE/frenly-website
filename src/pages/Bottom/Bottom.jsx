import React from 'react'

const Bottom = () => {
    return (
        <div className='h-fit lg:w-[98%] w-[96%] lg:mx-[1%] mx-[2%] rounded-t-4xl text-white lg:py-20 py-10 lg:px-60 px-4 bg-black relative'>
            <h1 className='text-black bg-white px-3 py-1 rounded-3xl w-fit font-bold tracking-tighter mb-7'>WHO ITS FOR</h1>
            <p className='text-white capitalize lg:text-4xl text-3xl font-medium leading-11 mb-10'>Whether you're launching a token or managing an existing Treasury. frenly fits any scenario where chart stability and contributor freedom both matter. </p>
            <div className='flex flex-col gap-4'>
                <div className='flex  items-center bg-[#171616] w-fit px-1 py-1 rounded-3xl gap-2 '>
                    <h1 className='text-black bg-white lg:text-[15px] text-[10px] px-3 py-1 rounded-3xl w-fit font-bold tracking-tighter '>WHO ITS FOR</h1>
                    <h1 className='mr-2 lg:text-[15px] text-[10px]'>Keep your chart strong from day one.</h1>
                </div>
                <div className='flex  items-center bg-[#122f10] w-fit px-1 py-1 rounded-3xl gap-2 lg:ml-15'>
                    <h1 className='text-black bg-[#2AC220] whitespace-nowrap px-3 lg:text-[15px] text-[10px] py-1 rounded-3xl w-fit font-bold tracking-tighter '>DAOS & TREASURIES</h1>
                    <h1 className='lg:text-[15px] text-[10px] mr-2'>Protect treasury value while distributing fairly.</h1>
                </div>
                <div className='flex  items-center bg-[#290c2b] w-fit px-1 py-1 rounded-3xl gap-2 lg:ml-30'>
                    <h1 className='text-black bg-[#DD6BE3] lg:text-[15px] whitespace-nowrap text-[10px] px-3 py-1 rounded-3xl w-fit font-bold tracking-tighter '>AIRDROPS & CAMPAIGNS</h1>
                    <h1 className='lg:text-[15px] text-[10px] mr-2'>Ensure recipients can’t immediately dump.</h1>
                </div>
                <div className='flex  items-center bg-[#242323] w-fit px-1 py-1 rounded-3xl gap-2 lg:ml-45'>
                    <h1 className='text-black bg-white px-3 lg:text-[15px] text-[10px] py-1 whitespace-nowrap rounded-3xl w-fit font-bold tracking-tighter '>INCENTIVE PLANS</h1>
                    <h1 className='lg:text-[15px] text-[10px] mr-2'>Align contributor actions with long-term goals.</h1>
                </div>
            </div>
        </div>
    )
}

export default Bottom