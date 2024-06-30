import React, { useEffect, useState } from 'react'
import Signupnav from '../components/Signupnav';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import backendUrl from '../backend';

const Cart = () => {
  const cartData = useSelector((state)=> state.cartData)
  const user = useSelector((state)=> state.userAuth)
  const navigate = useNavigate();
  const [myCartItems, setMycartItems] = useState([]);
  const [amount,setAmount] = useState(0)
  const location = useLocation()
  
  useEffect(() => {
    document.title = "Cart";
    window.scroll(0,0)
    const newfun = async ()=> {
      let testingUser = {
        phone:user.phone
      }
      if(user.phone){
          try{
              let {data} = await axios.post(`${backendUrl}/getuser`,testingUser)
              setMycartItems(data.cartItems)
                const amountt = data.cartItems.length && data.cartItems.map((item)=>item.price).reduce((prev,next)=> prev+next);
                setAmount(amountt)
            }catch(err){
              console.log(err)
            }
      }
      

    }
    newfun()
    
  }, []);
  useEffect(()=>{
    if(cartData.length == 0){

    }else{
      setMycartItems(myCartItems)
      const amountt = myCartItems.length && myCartItems.map((item)=>item.price).reduce((prev,next)=> prev+next);
      setAmount(amountt)
    }
  },[])


  const handleOnRemoveItem =async (e)=> {
    let userDetails = {
      phone:user.phone,
      cartItem:e
    }
    try{
      let {data} = await axios.post(`${backendUrl}/remove-cart-item`,userDetails)
      setMycartItems(data.cartItems)
      const amountt = data.cartItems.length && data.cartItems.map((item)=>item.price).reduce((prev,next)=> prev+next);
      setAmount(amountt)
    }catch(err){
      console.log(err)
    }
  }

  const handleOnContinue = ()=> {
    if(myCartItems.length == 0){

    }else{
          navigate('/checkout/cart-address',{state:{myCartItems}})
    }

  }

  return (
    <>
    {/* <Signupnav /> */}
    <div className='fixed bg-white z-10 text-[#353543] font-semibold w-full border-2 flex sm:py-2 md:py-5'>
      <div className='sm:w-full md:w-[60%] m-auto sm:justify-around flex sm:px-3 sm:gap-4 md:gap-16'>
       <Link to="/"><img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"  alt="" className='md:w-[150px] sm:w-[100px]'/></Link> 
              <div className=''>
                <div className='flex items-center md:w-[94%]'>
                  <span className='border-2 sm:text-xs md:text-sm sm:px-[.35rem] md:px-[.4rem] border-blue-600 rounded-full'>1</span>
                  <div className='h-px bg-[#cecede] sm:w-10 md:w-48'></div>
                  <span className='border-2  sm:text-xs md:text-sm sm:px-[0.35rem] md:px-[.4rem] border-[#cecede] text-[#cecede] rounded-full'>2</span>
                  <div className='h-px bg-[#cecede] sm:w-10 md:w-48'></div>
                  <span className='border-2  sm:text-xs md:text-sm sm:px-[0.35rem] md:px-[.4rem] border-[#cecede] text-[#cecede] rounded-full'>3</span>
                  {/* <div className='h-px bg-[#353543]'></div> */}
                </div>
                <div className='flex sm:text-xs md:text-sm justify-between text-sm font-semibold'>
                  <div>Cart</div>
                  <div className='text-[#cecede]'>Address</div>
                  <div className='text-[#cecede]'>Payment</div>
                </div>
                
                
              </div>
      </div>
      
    </div>
    <div className='md:w-[72%] sm:pt-20 md:pt-28 m-auto'>
      {/* <hr /> */}
      <div className='flex justify-between relative sm:flex-col md:flex-row gap-10'>
        <div className='md:w-[60%] flex flex-col sm:gap-2 md:gap-4 sm:p-4'>
          <h1 className={`text-lg font-medium`}>Product Details</h1>
          {
            myCartItems.map((item)=> (
                <div className='p-2 border-2 text-[#353543] rounded-md flex gap-8' key={item._id}>
                  <Link to={`/singleproduct/${item._id}`} className='w-16 h-16'><img src={item.image1} alt="" className=''/></Link>  
                  <div className='sm:leading-4 md:leading-8 w-full'>
                    <div className='md:w-[90%] overflow-hidden h-6 font-semibold sm:text-sm md:text-base'><h1>{item.name}</h1></div>
                    <div className='sm:text-xs md:text-sm'>{item.price}</div>
                    <p className='md:text-sm'>All issue easy returns</p>
                    <p className='text-sm'>size:M . Qty:1</p>
                    <button className='sm:text-xs md:text-sm font-semibold text-[#616173]' onClick={()=>handleOnRemoveItem(item._id)}>X REMOVE</button>
                    {/* <div className='h-px absolute w-[16rem] left-0 bg-black'></div> */}
                    <p className='font-semibold text-[#616173] sm:text-xs md:text-sm items-center flex justify-between'>
                      <div>Sold by: SABRR</div>
                      <div className='font-semibold'>Free Delivery</div>
                    </p>
                  </div>
              </div>
            ))
          }
         
        </div>
        <div className='border-s-2 text-[#353543] p-5 md:px-12 md:fixed right-48  flex flex-col sm:gap-2 md:gap-5'>
          <h1 className='text-lg'>Price Details {myCartItems.length} items</h1>
          <div className='text-[#616163] flex justify-between'><p className='dashed'>Total Product Price</p><span>+₹{amount}</span></div>
          <hr />
          <h1 className='flex justify-between font-semibold md:text-lg'><p>Order Total</p><span>₹{amount}</span></h1>
          <p className='px-2 text-xs bg-[#f8f8ff]'>Clicking on 'cotinue' will not deducted any money</p>
          <button onClick={handleOnContinue} className={`py-2 md:text-lg ${myCartItems.length == 0 ? 'bg-[#be3ea987] cursor-not-allowed': 'bg-[#9f2089]'} text-center rounded-md text-white font-bold w-full`}>Continue</button>
          <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="" width={300}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart