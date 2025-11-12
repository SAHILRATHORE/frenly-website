import React from 'react'
import Arrow3 from '../../Images/Arrow3.png'
const Pool = () => {
    return (
        <div id='pool' className='min-h-screen items-center w-full p-1 flex flex-col gap-4'>
            <h1 className='lg:text-5xl text-6xl mx-4 lg:mx-0 my-[10vh] font-[cursive] font-bold'>What are C1 Pools?</h1>
            <div className='Wrapper h-[80vh] lg:w-[80%] w-[98%] flex lg:gap-3 gap-1 '>
                <div className='w-[20%] lg:h-full h-[70vh] bg-[#e8e8e8] rounded-4xl shadow-md flex flex-col justify-between items-center pt-[14.5vh] pb-[5vh] p-4'>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black lg:my-10 my-5 rounded-4xl w-fit lg:text-sm text-[10px] font-bold px-3 py-1'>Funding</h1>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black lg:my-10 my-5 rounded-4xl w-fit lg:text-sm text-[10px] font-bold px-3 py-1'>Pricing</h1>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black lg:my-10 my-5 rounded-4xl w-fit lg:text-sm text-[10px] font-bold px-3 py-1'>routing</h1>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black lg:my-10 my-5 rounded-4xl w-fit lg:text-sm text-[10px] font-bold px-3 py-1'>benefit</h1>
                    </div>
                </div>
                <div className='lg:w-[40%] w-[35%] lg:h-full h-[70vh] bg-[#e7e7e7] shadow-md rounded-2xl flex flex-col p-4'>
                    <div className='flex items-start w-full lg:text-5xl text-2xl font-bold  h-[16%]'>
                        <h1>Traditional LPs</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%]'>
                        <h1 className=' text-[#443f3f]   w-fit lg:text-sm text-[10px]  py-1'>Liquidly providers deposit equal value of Token + pair (e.g., $TOKEN + USDC) into AMM pool. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%]'>
                        <h1 className=' text-[#443f3f]   w-fit lg:text-sm text-[10px]  py-1'>Uses constant products formula (x'h=k), causing price impact for large traders.</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%]'>
                        <h1 className=' text-[#443f3f]   w-fit lg:text-sm text-[10px]  py-1'>DEX Aggregators route here when no better price source is found.</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%] '>
                        <h1 className=' text-[#443f3f]   w-fit lg:text-sm text-[10px]  py-1'>Large traders = worse price, chart damage.</h1>
                    </div>
                </div>
                <div className='lg:w-[40%] w-[43%] lg:h-full h-[70vh] bg-[#5fe028] shadow-md rounded-2xl flex flex-col p-4'>
                    <div className='flex items-start w-full lg:text-5xl text-2xl font-bold  h-[16%]'>
                        <h1>C1 Pools</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white lg:text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 lg:text-sm text-[10px] '>Single-sided deposits from OTC sellers (e.g., Wales, team wallets,presalers) at market price. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white lg:text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 lg:text-sm text-[10px]'>Price-impact-free-orders filled exactly at market price. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white lg:text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 lg:text-sm text-[10px] '>Always best price, so DEX Aggregators always route here first when liquidity exits. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white lg:text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 lg:text-sm text-[10px] '>No chart damage, no price movement from the sale. </h1>
                    </div>
                </div>
            </div>
            <div className='Wrapper2 h-full lg:w-[80%] w-[90%] bg-pink-300 rounded-4xl shadow-md p-4 relative flex flex-col items-center lg:gap-6 gap-3'>
                <h1 className='uppercase bg-white text-black rounded-4xl py-2 px-4 m-4 w-fit font-bold text-sm absolute top-0 left-0'>how trades are routed</h1>
                <div className='lg:h-[20vh] lg:w-[15vw] mt-[20%] lg:mt-0 bg-pink-400  rounded-4xl flex flex-col items-center justify-between p-5 '>
                    <h1 className='text-white text-3xl whitespace-nowrap tracking-tight font-normal mb-3 lg:mb-0 '>Trade request</h1>
                    <h1 className='text-black bg-white rounded-4xl text-sm lg:tracking-tight font-bold px-3 py-1'>USER</h1>
                </div>
                <img className='lg:h-[5vh] h-[3vh] rotate-[-130deg] m-4' src={Arrow3} alt="Arrow" />
                <div className='w-full h-full border-2 border-dashed border-pink-600 rounded-[4em] p-4 flex flex-col items-center'>
                    <h1 className='lg:text-3xl text-2xl text-white font-medium tracking-tight whitespace-nowrap'>C1 Pool liquidity available?</h1>
                    <h1 className='text-black bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-2 m-5'>DEX AGGREGATOR</h1>
                    <div className='w-full flex lg:h-[30vh] gap-3'>
                        <div className='bg-pink-400 w-1/2 rounded-full flex flex-col justify-between items-center'>
                            <h1 className='text-black w-fit bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-1 flex items-center  gap-2 m-5'>
                                <i className="ri-checkbox-circle-fill text-[#2AC220] lg:text-2xl"></i>
                                Yes</h1>
                            <h1 className='lg:text-2xl text-[10px]  text-white font-normal'>Executed at market price</h1>
                            <h1 className='text-black w-fit bg-white rounded-4xl lg:text-sm text-[10px] tracking-tight font-bold px-3 py-2 m-5'>C1 POOL</h1>
                        </div>
                        <div className='bg-pink-400 w-1/2 rounded-full flex flex-col justify-between items-center'>
                            <h1 className='text-black w-fit bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-1 flex items-center gap-2 m-5'>
                                <i className="ri-close-circle-fill text-[#ed2a2a] lg:text-2xl"></i>
                                No</h1>
                            <h1 className='lg:text-2xl text-[10px]  text-white font-normal'>Executed with market price</h1>
                            <h1 className='text-black w-fit bg-white rounded-4xl lg:text-sm text-[10px] tracking-tight font-bold px-3 py-2 m-5 whitespace-nowrap'>TRADITIONAL UPS</h1>
                        </div>
                    </div>
                </div>
                <h1 className='text-white font-bold lg:text-sm text-[10px] tracking-tight mt-3'>Where buyers get the best price — and sellers never hurt the chart.</h1>
            </div>
        </div>
    )
}

export default Pool