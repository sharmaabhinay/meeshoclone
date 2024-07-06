import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import backendUrl from '../backend'
import { useSelector } from 'react-redux'

const Orders = () => {
    const [downloadAppVisibility,setDownloadAppVisibility] = useState(false)
    let userData = useSelector((state)=> state.userAuth)
    let item={
        _id:'itemId',
        name:'mens tshirt',
        price:465,
        image1:'url'
    }
    let user = {
        user_id:userData.userId
    }
    const getOrders = async ()=> {
        try{
            let res= await axios.post(`${backendUrl}/get-user-orders`,user )
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=> {
        getOrders()
    },[])
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
        <div className='p-2 mt-36 border-2 text-[#353543] rounded-md flex gap-8' key={item._id}>
                <div>delivery date 18,8,24</div>
                <div>delivered</div>
                  <Link to={`/singleproduct/${item._id}`} className='w-16 h-16'><img src={item.image1} alt="" className=''/></Link>  
                  <div className='sm:leading-4 md:leading-8 w-full'>
                    <div className='md:w-[90%] overflow-hidden h-6 font-semibold sm:text-sm md:text-base'><h1>{item.name}</h1></div>
                    <div className='sm:text-xs md:text-sm'>{item.price}</div>
                    <p className='md:text-sm'>All issue easy returns</p>
                    <p className='text-sm'>size:M . Qty:1</p>
                    {/* <div className='h-px absolute w-[16rem] left-0 bg-black'></div> */}
                    <p className='font-semibold text-[#616173] sm:text-xs md:text-sm items-center flex justify-between'>
                      <div>Sold by: SABRR</div>
                      <div className='font-semibold'>Free Delivery</div>
                    </p>
                  </div>
              </div>
        
        </div>
    </>
  )
}

export default Orders;