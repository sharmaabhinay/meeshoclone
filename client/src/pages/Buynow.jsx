import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import backendUrl from '../backend'
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51POmUyP9bDkiuBZVGaIooLfiPYApvnjdFmVjcS0Jcqw66NkbgRlni1tTH3hTqsh0WFPL4sg7oFcbmJ0jH1JT7JN500pu9i01xs');


const Buynow = () => {
  const location = useLocation()
  const [payment,setPayment] = useState('cod')
  let productData = location.state?.product
  let userDetails = useSelector((state)=> state.userAuth)
  const initialValue = userDetails.address || {};
  const [address,setAddress] = useState({
    name:initialValue.name ? initialValue.name : "",
    city:initialValue.city ? initialValue.city : "",
    state:initialValue.state ? initialValue.state : "",
    PIN:initialValue.PIN ? initialValue.PIN : "",
    house:initialValue.house ? initialValue.house : "",
    area:initialValue.area ? initialValue.area : "",
    phone:userDetails ? userDetails.phone : ''
    

  })

  useEffect(() => {
    window.scroll(0,0)
    document.title = "Cart-checkout";
    console.log(userDetails)

  }, []);
  const setFun = (e)=> {
    setAddress({...address,[e.target.name]:e.target.value})
  }

  const handleOnBuy = async()=> {
    console.log(address)
      // try {
      //   const res = await axios.post(`${backendUrl}/checkout-payment`,productData);
      //   const { sessionId } = res.data;

      //   const stripe = await stripePromise;
      //   const { error } = await stripe.redirectToCheckout({ sessionId });

      //   if (error) {
      //       console.error('Error redirecting to checkout:', error);
      //   }
      //  } catch (error) {
      //     console.error('Error during payment process:', err);
      // }
  }

  return (
    <>
    {/* <Signupnav /> */}
    <div className='fixed bg-white z-10 text-[#353543] font-semibold w-full border-2 flex sm:py-2 md:py-5'>
      <div className='md:w-[60%] m-auto sm:justify-around md:justify-normal sm:w-full flex md:gap-40'>
       <Link to="/"><img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"  alt="" className='sm:w-[100px] md:w-[150px]'/></Link> 
              <div className=''>
                <div className='flex items-center w-[94%]'>
                  <span className='border-2 sm:text-xs sd:text-sm px-[.4rem] border-[blue] rounded-full'>1</span>
                  <div className='h-px bg-[#cecede] sm:w-20 md:w-48'></div>
                  <span className='border-2 sm:text-xs md:text-sm px-[.3rem] border-[#cecede] text-[#cecede] rounded-full'>2</span>
                  {/* <div className='h-px bg-[#353543]'></div> */}
                </div>
                <div className='flex justify-between sm:text-xs  md:text-sm font-semibold'>
                  <div>Cart</div>
                  <div className='text-[#cecede]'>Payment</div>
                </div>
                
                
              </div>
      </div>
      
    </div>
    <div className='md:w-[72%] sm:pt-20 md:pt-28 sm:px-4 md:px-0 m-auto'>
      {/* <hr /> */}
      <div className='flex sm:flex-col md:flew-row md:justify-between relative gap-10'>
        <div className='md:w-[60%] flex flex-col gap-4'>
          <div>
            <h1 className='md:text-lg font-medium'>Product Details</h1>
          <div className='p-2 border-2 text-[#353543] rounded-md flex gap-8'>
                  <Link to={`/singleproduct/${productData._id}`} className='w-16 h-16'><img src={productData.image1} alt="" className=''/></Link>
                  <div className='sm:leading-2 md:leading-5 w-full'>
                    <div className='w-[90%] sm:text-sm md:text-base overflow-hidden h-6 font-semibold'><h1>{productData.name}</h1></div>
                    <div className='sm:text-sm md:text-base'>{productData.price}</div>
                    <p className='text-sm'>All issue easy returns</p>
                    <p className='text-sm'>size:M . Qty:1</p>
                    <p className='font-semibold text-[#616173] sm:text-xs md:text-sm items-center flex justify-between'>
                      <div>Sold by: SABRR</div>
                      <div className='font-semibold'>Free Delivery</div>
                    </p>
                  </div>
              </div>
          </div>
          <div className='md:w-[60%] flex flex-col gap-4'>
          <h1 className='text-lg font-medium'>Add Delivery Address</h1>
          <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-5 md:text-lg'>
                <h1 className='font-semibold md:text-2xl text-[#353543]'>Contact Details</h1>
                <input type="text" onChange={setFun} name="name" value={address.name} id="" placeholder='Name' className='outline-none border-b-2 w-full text-[#353543] font-semibold'/>
                <input type="text" name='phone' onChange={setFun} value={address.phone}  placeholder='Contact Number'  className='outline-none border-b-2 w-full text-[#353543] font-semibold'/>
            </div>
            <div className='flex flex-col gap-5 md:text-lg'>
                <h1 className='font-semibold sm:text-base md:text-2xl text-[#353543]'>Address</h1>
                <input type="text" onChange={setFun} placeholder='House no.' value={address.house} name='houseno'  className='outline-none border-b-2 w-full text-[#353543] font-semibold'/>
                <input type="text" onChange={setFun} placeholder='Area/building/Colony' value={address.area} name='houseno'  className='outline-none border-b-2 w-full text-[#353543] font-semibold'/>
                <input type="text" onChange={setFun} placeholder='PIN CODE' name='PIN' value={address.PIN}  className='outline-none border-b-2 w-full text-[#353543] font-semibold'/>
                <div className='flex flex-col gap-5'>
                    <input type="text" onChange={setFun} placeholder='city' value={address.city} className='outline-none border-b-2 w-full text-[#353543] font-semibold'/>
                    <input type="text" onChange={setFun} placeholder='state' value={address.state} className='outline-none border-b-2 w-full text-[#353543] font-semibold'/>
                </div>
            </div>
          </div>
         
        </div>
         
        </div>
        <div className='border-s-2 text-[#353543] md:p-5 md:px-12 md:fixed md:right-48  flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center bg-gray-100 font-medium p-3 cursor-pointer'onClick={()=> setPayment('cod')} ><div>COD  </div> <div className='border-2 border-gray-400 p-[1px] rounded-full'> <div className={`h-3 w-3 border-2 p-1 rounded-full ${payment == 'cod' ? 'bg-blue-700' : 'bg-none'}`}></div></div></div>
          <div className='flex justify-between items-center bg-gray-100 font-medium p-3 cursor-pointer'onClick={()=> setPayment('online')} ><div>Online Payment</div> <div className='border-2 border-gray-400 p-[1px] rounded-full'> <div className={`h-3 w-3 border-2 p-1 rounded-full ${payment == 'online' ? 'bg-blue-700' : 'bg-none'}`}></div></div></div>
        </div>
          <h1 className='text-lg'>Price Details 1 items</h1>
          <div className='text-[#616163] flex justify-between'><p className='dashed'>Total Product Price</p><span>+₹{productData.price}</span></div>
          <hr />
          <h1 className='flex justify-between font-semibold sm:text-sm md:text-lg'><p>Order Total</p><span>₹{productData.price}</span></h1>
          <p className='px-2 text-xs bg-[#f8f8ff]'>Clicking on 'cotinue' will not deducted any money</p>
          <button  onClick={handleOnBuy} className={`py-2 text-lg sm:text-sm md:text-lg text-center rounded-md text-white font-bold w-full ${payment == 'cod' ? 'bg-green-600':'bg-[#b1389d]'}`}>{payment != 'cod' ? 'Continue' :'Place Order'}</button>
          <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="" width={300}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Buynow