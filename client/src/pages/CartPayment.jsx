import React, { useEffect, useState } from 'react'
import Signupnav from '../components/Signupnav';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51POmUyP9bDkiuBZVGaIooLfiPYApvnjdFmVjcS0Jcqw66NkbgRlni1tTH3hTqsh0WFPL4sg7oFcbmJ0jH1JT7JN500pu9i01xs');
import backendUrl from '../backend'
const CartPayment = () => {
  const cartData = useSelector((state)=> state.cartData)
  const amount = cartData.length && cartData.map((item)=>item.price).reduce((prev,next)=> prev+next);
  const [myCartItems, setMycartItems] = useState([]);

  useEffect(() => {
    document.title = "Cart";

  }, []);
  useEffect(()=>{
    if(cartData.length == 0){
    }else{
      setMycartItems(cartData)
    }
  },[])

  const handleonPayment = async()=>{
    try {
        const res = await axios.post(`${backendUrl}/checkout-payment`);
        const { sessionId } = res.data;

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.error('Error redirecting to checkout:', error);
        }
    } catch (err) {
        console.error('Error during payment process:', err);
    }
  }

  return (
    <>
    {/* <Signupnav /> */}
    <div className='fixed bg-white z-10 text-[#353543] font-semibold w-full border-2 flex bg-white py-5'>
      <div className='w-[60%] m-auto justify- flex gap-16'>
       <Link to="/"><img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" width={150} alt="" /></Link> 
              <div className=''>
                <div className='flex items-center w-[94%]'>
                  <span className='border-2 text-sm px-[.3rem] border-[#5585f8] rounded-full bg-[#5585f8]'><i className='fa-solid fa-check text-xs bg-[#5585f8] text-white'></i></span>
                  <div className='h-px bg-[#5585f8] w-48'></div>
                  <span className='border-2 text-sm px-[.3rem] border-[#5585f8] rounded-full bg-[#5585f8]'><i className='fa-solid fa-check text-xs bg-[#5585f8] text-white'></i></span>
                  <div className='h-px bg-[#cecede] w-48'></div>
                  <span className='border-2 text-sm px-[.4rem] border-[#cecede] text-[#cecede] rounded-full'>3</span>
                  {/* <div className='h-px bg-[#353543]'></div> */}
                </div>
                <div className='flex justify-between text-xs font-semibold'>
                  <div>Cart</div>
                  <div className='text-[#353543]'>Address</div>
                  <div className='text-[#cecede]'>Payment</div>
                </div>
                
                
              </div>
      </div>
      
    </div>
    <div className='w-[72%] pt-28 m-auto'>
      {/* <hr /> */}
      <div className='flex justify-between relative gap-10'>
        <div className='w-[60%] flex flex-col gap-4'>
          <h1 className='text-lg font-medium'>Add Delivery Address</h1>
          
         
        </div>
        <div className='border-s-2 text-[#353543] p-5 px-12 fixed right-48  flex flex-col gap-5'>
          <h1 className='text-lg'>Price Details {myCartItems.length} items</h1>
          <div className='text-[#616163] flex justify-between'><p className='dashed'>Total Product Price</p><span>+₹{amount}</span></div>
          <hr />
          <h1 className='flex justify-between font-semibold text-lg'><p>Order Total</p><span>₹{amount}</span></h1>
          <p className='px-2 text-xs bg-[#f8f8ff]'>Clicking on 'cotinue' will not deducted any money</p>
          <button onClick={handleonPayment}  className='py-2 text-lg bg-[#9f2089] text-center rounded-md text-white font-bold w-full'>Continue</button >
          {/* <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="" width={300}/> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default CartPayment;