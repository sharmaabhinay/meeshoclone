import React from 'react';

const Hero = () => {
  return (
    <>
    <div className='relative w-full md:block z-0 sm:pt-20 md:pt-36'> {/* Added pt-24 for padding-top */}
        <div className='sm:hidden md:flex md:w-[82%] m-auto justify-center md:py-10'>
            <div className='bg-slate-100 p-10'>
                <div className=''>
                    <div className='text-5xl font-bold text-slate-950 opacity-80 w-full'>
                        <h1>Lowest Prices</h1>
                        <h1>Best Quality Shopping</h1>
                    </div>
                    <div className='flex gap-3 p-2 bg-white my-6'>
                        <div className='flex items-center text-lg font-bold-300 me-5'>
                            <img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" alt="" /><p className='leading-5'>Free <br /> Delivery</p>
                        </div>
                        <div className='h-12 w-px bg-slate-400'></div>
                        <div className='flex items-center text-lg font-bold-300 me-5'>
                            <img src="https://images.meesho.com/images/pow/cod_jamun.svg" alt="" /><p className='leading-5'>Cash on <br />Delivery</p>
                        </div>
                        <div className='h-12 w-px bg-slate-400'></div>
                        <div className='flex items-center text-lg font-bold-300'>
                            <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" alt="" /><p className='leading-5'>Easy <br />Returns</p>
                        </div>
                    </div>
                    <div className='flex gap-3 bg-[#9f2089] text-white w-[70%] rounded py-4 px-7'>
                        <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" alt="" /><button className='font-bold'>Download the Meesho App</button>
                    </div>
                </div>
            </div>
            <div className=' h-full'>
                <img src="https://images.meesho.com/images/marketing/1701840943943_512.webp" alt="" />
            </div>
        </div>
        <div className="hero2 md:w-[76%] m-auto">
            <div className='sm:hidden md:flex justify-between items-center'>
                <div className='h-px w-[25%] bg-red-200'></div>
                <div className='text-4xl font-semibold'>Top Categories to choose from</div>
                <div className='h-px w-[25%] bg-red-500'></div>
            </div>
            <div className='hero2bg bg-cover h-auto sm:w-full md:w-[68rem] bg-no-repeat md:my-8 p-5 md:pt-20 flex items-end justify-between gap-2'>
                <div><img src="https://images.meesho.com/images/marketing/1701835320853_400.webp" alt="" className='sm:w-[100px] md:w-auto'/></div>
                <div className='flex justify-between gap-5'>
                    <img src="https://images.meesho.com/images/marketing/1692191045019_300.webp" alt="" className='md:h-66 sm:w-[80px] md:w-64'/>
                    <img src="https://images.meesho.com/images/marketing/1692191103963_300.webp" alt="" className='sm:w-[80px] md:h-66 md:w-64'/>
                </div>
            </div>
            <div className='hero3bg h-auto mt-16 p-20 bg-no-repeat bg-cover sm:hidden md:flex justify-around w-[68rem] items-center'>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1704720424993_200.webp" alt="" />
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex flex-col justify-center'>
                        <img src="https://images.meesho.com/images/marketing/1690978007288_200.webp" alt="" />
                        <img src="https://images.meesho.com/images/marketing/1704720614820_150.webp" alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img src="https://images.meesho.com/images/marketing/1690978024110_200.webp" alt="" />
                        <img src="https://images.meesho.com/images/marketing/1704720604451_150.webp" alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img src="https://images.meesho.com/images/marketing/1690977994925_200.webp" alt="" />
                        <img src="https://images.meesho.com/images/marketing/1704720593346_150.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='hero3bg h-auto mt-16 p-20 bg-no-repeat bg-cover sm:hidden md:flex justify-around w-[68rem] items-center'>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1704720424993_200.webp" alt="" />
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex flex-col justify-center'>
                        <img src="https://images.meesho.com/images/marketing/1690977773436_200.webp" alt="" />
                        <img src="https://images.meesho.com/images/marketing/1704720723964_150.webp" alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img src="https://images.meesho.com/images/marketing/1690977909442_200.webp" alt="" />
                        <img src="https://images.meesho.com/images/marketing/1704720738844_150.webp" alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img src="https://images.meesho.com/images/marketing/1690977645848_200.webp" alt="" />
                        <img src="https://images.meesho.com/images/marketing/1704720750771_150.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='hero4bg sm:hidden md:block w-[68rem] mt-16 p-12 h-[35rem] text-end'>
              <div className='text-end'>
                <h1 className='text-[2rem] text-blue-400'>Become a Reseller and</h1>
                <p className='text-[3rem] font-medium text-[#9f2089] leading-1'>Start your Online Business</p>
                <p className='text-[3rem] font-medium text-[#9f2089] -mt-6'>with Zero Investment</p>
                <div className='text-end flex justify-end gap-7 mt-6'>
                    <img src="https://images.meesho.com/images/pow/playstoreIcon_500.webp" alt="" width={200}/>
                    <img src="https://images.meesho.com/images/pow/appstoreIcon_500.webp" alt="" width={200}/>
                </div>
              </div>
                
            </div>
            <div className='meeshosupplier sm:hidden md:block p-16 h-[18rem] w-[68rem] mt-16'>
                <div className='text-white'>
                    <h1 className='text-4xl font-medium'>Register as a Meesho Supplier</h1>
                    <p className='my-2'>Sell your products to crores of customers at 0% commission</p>
                    <div className='flex gap-3 my-3'>
                        <div><i className="fa-solid fa-circle-check text-green-600"></i><span className='font-bold ms-3'>Grow your business 10x</span></div>|
                        <div><i className="fa-solid fa-circle-check text-green-600"></i><span className='font-bold ms-3'>Enjoy 100% Profit</span></div>|
                        <div><i className="fa-solid fa-circle-check text-green-600"></i><span className='font-bold ms-3'>Sell all over india</span></div>
                    </div>
                    <div className='text-[#9f2089] p-3 bg-white w-32 font-bold rounded'>Sign up now</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero;
