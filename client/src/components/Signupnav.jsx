import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserPhone } from '../redux/auth/userAction';

const Signupnav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.userAuth)    
    const handleonclick = ()=> {
        dispatch(setUserPhone(150000))
    }

    const [downloadAppVisibility,setDownloadAppVisibility] = useState(false)
  return (
    <>
    <div className="parent flex justify-between items-center sm:gap-2 w-full m-auto p-3 fixed bg-white">
            <div className=''>
                <Link to="/"><img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="" className='sm:w-[5rem] md:w-[150px]'/></Link>
                
            </div>
            <form className='w-auto' onSubmit={()=> navigate('/checkout/products')}>
                 <i className="fa-solid fa-magnifying-glass absolute  sm:text-xs md:text-lg text-slate-400 md:mt-2 md:ms-3 sm:mt-2 sm:ms-2"></i> {/* Changed class to className */}
                <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' className='border-2 rounded outline-none sm:py-1 md:py-2 sm:ps-6 md:px-5 md:ps-12 sm:text-sm md:w-[26rem]'/>
            </form>
            <div className='sm:hidden md:flex'>
                <div className='flex items-center justify-between gap-6'>
                    <div className='flex items-center gap-1 hover:text-[#9f2089] hover:font-medium' onMouseEnter={()=> setDownloadAppVisibility(true)} onMouseLeave={()=> setDownloadAppVisibility(false)}>
                      <i className="fa-solid fa-mobile-screen-button hover:text-pink-400"></i><p onClick={handleonclick}>Download App</p> 
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
    </>
  )
}

export default Signupnav