import React from 'react'

const Pool = () => {
    return (
        <div id='pool' className='min-h-screen items-center w-full p-1 flex flex-col gap-4'>
            <h1 className='text-5xl my-[10vh] font-[cursive] font-bold'>What are C1 Pools?</h1>
            <div className='Wrapper h-[80vh] w-[80%] flex gap-3'>
                <div className='w-[20%] h-full bg-[#e8e8e8] rounded-4xl shadow-md flex flex-col justify-between items-center pt-[14.5vh] pb-[5vh] p-4'>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black my-10 rounded-4xl w-fit text-sm font-bold px-3 py-1'>Funding</h1>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black my-10 rounded-4xl w-fit text-sm font-bold px-3 py-1'>Pricing</h1>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black my-10 rounded-4xl w-fit text-sm font-bold px-3 py-1'>routing</h1>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <h1 className='uppercase text-white bg-black my-10 rounded-4xl w-fit text-sm font-bold px-3 py-1'>benefit</h1>
                    </div>
                </div>
                <div className='w-[40%] h-full bg-[#e7e7e7] shadow-md rounded-2xl flex flex-col p-4'>
                    <div className='flex items-start w-full text-5xl font-bold  h-[16%]'>
                        <h1>Traditional LPs</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%]'>
                        <h1 className=' text-[#443f3f]   w-fit text-sm  py-1'>Liquidly providers deposit equal value of Token + pair (e.g., $TOKEN + USDC) into AMM pool. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%]'>
                        <h1 className=' text-[#443f3f]   w-fit text-sm  py-1'>Uses constant products formula (x'h=k), causing price impact for large traders.</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%]'>
                        <h1 className=' text-[#443f3f]   w-fit text-sm  py-1'>DEX Aggregators route here when no better price source is found.</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#c6c1c1] w-full flex h-[21%] '>
                        <h1 className=' text-[#443f3f]   w-fit text-sm  py-1'>Large traders = worse price, chart damage.</h1>
                    </div>
                </div>
                <div className='w-[40%] h-full bg-[#5fe028] shadow-md rounded-2xl flex flex-col p-4'>
                    <div className='flex items-start w-full text-5xl font-bold  h-[16%]'>
                        <h1>C1 Pools</h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 text-sm '>Single-sided deposits from OTC sellers (e.g., Wales, team wallets,presalers) at market price. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 text-sm'>Price-impact-free-orders filled exactly at market price. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 text-sm '>Always best price, so DEX Aggregators always route here first when liquidity exits. </h1>
                    </div>
                    <div className='items-center border-t-2 border-[#676464] w-full flex  h-[21%]'>
                        <i className="ri-checkbox-circle-fill text-white text-3xl pr-5"></i>

                        <h1 className=' text-black my-10 text-sm '>No chart damage, no price movement from the sale. </h1>
                    </div>
                </div>
            </div>
            <div className='Wrapper2 h-full w-[80%] bg-pink-300 rounded-4xl shadow-md p-4 relative flex flex-col items-center gap-6'>
                <h1 className='uppercase bg-white text-black rounded-4xl py-2 px-4 m-4 w-fit font-bold text-sm absolute top-0 left-0'>how trades are routed</h1>
                <div className='h-[20vh] w-[15vw] bg-pink-400  rounded-4xl flex flex-col items-center justify-between p-5 '>
                    <h1 className='text-white text-3xl whitespace-nowrap tracking-tight font-normal'>Trade request</h1>
                    <h1 className='text-black bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-1'>USER</h1>
                </div>
                <img className='h-[5vh] rotate-[-130deg] m-4' src="/Images/Arrow3.png" alt="Arrow" />
                <div className='w-full h-full border-2 border-dashed border-pink-600 rounded-[4em] p-4 flex flex-col items-center'>
                    <h1 className='text-3xl text-white font-medium tracking-tight'>C1 Pool liquidity available?</h1>
                    <h1 className='text-black bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-2 m-5'>DEX AGGREGATOR</h1>
                    <div className='w-full flex h-[30vh] gap-3'>
                        <div className='bg-pink-400 w-1/2 rounded-full flex flex-col justify-between items-center'>
                            <h1 className='text-black w-fit bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-1 flex items-center gap-2 m-5'>
                                <i className="ri-checkbox-circle-fill text-[#2AC220] text-2xl"></i>
                                Yes</h1>
                            <h1 className='text-2xl text-white font-normal'>Executed at market price</h1>
                            <h1 className='text-black w-fit bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-2 m-5'>C1 POOL</h1>
                        </div>
                        <div className='bg-pink-400 w-1/2 rounded-full flex flex-col justify-between items-center'>
                            <h1 className='text-black w-fit bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-1 flex items-center gap-2 m-5'>
                                <i className="ri-close-circle-fill text-[#ed2a2a] text-2xl"></i>
                                No</h1>
                            <h1 className='text-2xl text-white font-normal'>Executed with market price</h1>
                            <h1 className='text-black w-fit bg-white rounded-4xl text-sm tracking-tight font-bold px-3 py-2 m-5'>TRADITIONAL UPS</h1>
                        </div>
                    </div>
                </div>
                <h1 className='text-white font-bold text-sm tracking-tight mt-3'>Where buyers get the best price — and sellers never hurt the chart.</h1>
            </div>
        </div>
    )
}

export default Pool