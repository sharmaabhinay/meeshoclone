import React, { useState } from 'react'

const Orders = () => {
    const [downloadAppVisibility,setDownloadAppVisibility] = useState(false)
  return (
    <>
    <div className='loginPageBackground'>
    <div className="parent flex justify-between items-center w-full m-auto p-3 fixed bg-white">
            <div className=''>
                <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="" width={150}/>
            </div>
            <div className='w-auto'>
                 <i className="fa-solid fa-magnifying-glass absolute text-xl text-slate-400 mt-2 ms-3"></i> {/* Changed class to className */}
                <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' className='border-2 rounded outline-none py-2 px-5 ps-12 w-[26rem]'/>
            </div>
            <div className='flex'>
                <div className='flex items-center justify-between gap-6'>
                    <div className='flex flex items-center gap-1 hover:text-[#9f2089] hover:font-medium' onMouseEnter={()=> setDownloadAppVisibility(true)} onMouseLeave={()=> setDownloadAppVisibility(false)}>
                      <i className="fa-solid fa-mobile-screen-button hover:text-pink-400"></i><p>Download App</p> 
                       {/* Changed class to className */}
                    </div>
                    <div className='h-[70%] w-px bg-slate-400'></div>
                    <div>
                        <a href="#" className=''>Become a Supplier</a>
                    </div>
                    <div className='h-[70%] w-px bg-slate-400'></div>
                    <div>
                        <a href="#">Newsroom</a>
                    </div>
                    <div className='h-[70%] w-px bg-slate-400'></div>
                </div>
                
                <div className='h-auto w-52 rounded-b-xl -translate-x-8 absolute mt-12 p-4 bg-white border-2 flex flex-col gap-4' style={{display : downloadAppVisibility ? 'block' : 'none'}}>
                    <h1 className='text-lg font-medium'>Download From</h1>
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" className='my-4' />
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" />
                </div>
                
            </div>
            
            
        </div>
        <hr />
        <div className='signupbg w-auto pb-20'>
            <div className='w-[433px] m-auto border-2 mt-32 bg-white signupbg'>
                <div className=''>
                    <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" className='rounded-t-lg'/>
                </div>
                <div className='p-10 flex gap-3 flex-col'>
                    <h1 className='text-xl font-medium'>Sign Up</h1>
                    <span className='text-sm text-[#8b8ba3]'>Country</span>
                    <div className='flex gap-3 -mt-2'>
                        <span className='border-b-2'> 🇮🇳 +91 </span><input type="number" placeholder='Phone Number' className='border-b-2 outline-none'/>
                    </div>
                    <button className='text-2xl font-medium p-2 mt-2 rounded-lg text-white bg-[#9f2089] rounded-2 w-full'>Continue</button>
                </div>
                <div className='flex flex-col pb-7 items-center h-60 justify-end'>
                    <small>By cotinuing, you agree to Meesho's</small>
                    <small><a href="#" className='text-[#9f2089] font-medium'>Terms & Conditions </a>and  <a href="#" className='text-[#9f2089] font-medium'>Privacy Policy</a></small>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Orders;