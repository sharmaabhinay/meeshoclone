import React, { useEffect, useState } from 'react'
import Signupnav from '../components/Signupnav';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import backendUrl from '../backend'

const Cartaddress = () => {
  const userPhone = useSelector((state)=> state.userAuth)
  const location = useLocation();
  let cartData = location.state?.myCartItems
  let result = userPhone;
  const amount = cartData.length && cartData.map((item)=>item.price).reduce((prev,next)=> prev+next);
  const [myCartItems, setMycartItems] = useState([]);
  const [payment,setPayment] = useState('cod')
  const userAdress = userPhone.address || {}
  const [address,setAddress] = useState({
      PIN:userAdress.PIN ? userAdress.PIN : "",
      name:userAdress.name ? userAdress.name : "",
      house:userAdress.house ? userAdress.house : "",
      area:userAdress.area ? userAdress.area : "",
      city: userAdress.city ? userAdress.city : "",
      landmark:userAdress.landmark ? userAdress.landmark : "",
      state:userAdress.state ? userAdress.state : ""
    
  })

  useEffect(() => {
    window.scroll(0,0)
    document.title = "Cart";
    

  }, []);
  useEffect(()=>{
    if(cartData.length == 0){
    }else{
      setMycartItems(cartData)
    }
    console.log(myCartItems)
  },[])

  const handleOnContinue = async()=>{
    if(payment == 'cod'){
      alert('order placed by cod')
    }else{
      alert('order placed online')
      // let userDetails = {
      //   phone: userPhone.phone,
      //  newaddress : address,
      //  orders:myCartItems
      // }
      // try{
      //   let res = await axios.post(`${backendUrl}/setUser-address`,userDetails)
      // }catch(err){
      //   console.log(err)
      // }
    }
  }
  
  const setFun = (e)=>{
    setAddress({...address,[e.target.name]:e.target.value})

  }
  let dataa="hello world"
  console.log(dataa)


  return (
    <>
    {/* <Signupnav /> */}
    <div className='fixed z-10 text-[#353543] font-semibold w-full border-2 flex bg-white sm:py-2 md:py-5'>
      <div className='sm:w-full md:w-[60%] m-auto sm:justify-around flex sm:px-3 sm:gap-4 md:gap-16'>
       <Link to="/"><img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"  alt="" className='md:w-[150px] sm:w-[100px]'/></Link> 
              <div className=''>
                <div className='flex items-center md:w-[94%]'>
                  <span className='border-2 sm:text-xs md:text-sm sm:px-[3px] md:px-[.3rem] border-blue-600 bg-blue-600 rounded-full'><i className='fa-solid fa-check sm:text-xs text-white bg-blue-600'></i></span>
                  <div className='h-px bg-[#cecede] sm:w-10 md:w-48'></div>
                  <span className='border-2  sm:text-xs md:text-sm sm:px-[.3rem] border-[#cecede] text-[#cecede] rounded-full'>2</span>
                  <div className='h-px bg-[#cecede] sm:w-10 md:w-48'></div>
                  <span className='border-2  sm:text-xs md:text-sm sm:px-[.3rem] border-[#cecede] text-[#cecede] rounded-full'>3</span>
                  {/* <div className='h-px bg-[#353543]'></div> */}
                </div>
                <div className='flex sm:text-xs md:text-base justify-between text-sm font-semibold'>
                  <div>Cart</div>
                  <div className='text-[#cecede]'>Address</div>
                  <div className='text-[#cecede]'>Payment</div>
                </div>
                
                
              </div>
      </div>
      
    </div>
    <div className='md:w-[72%] sm:pt-20 md:pt-28 m-auto'>
      {/* <hr /> */}
      <div className='flex sm:p-3 justify-between relative sm:flex-col md:flex-row gap-10'>
        {/* <div className='md:w-[60%] flex flex-col gap-4'>
          <h1 className='text-lg font-medium'>Add Delivery Address</h1>
          <div className='flex flex-col sm:gap-4 sm:text-sm md:text-lg md:gap-7'>
            <div className='flex flex-col gap-5 text-lg'>
                <h1 className='font-semibold md:text-2xl text-[#353543]'>Contact Details</h1>
                <input type="text" name="name" id="" placeholder='Name' onChange={setFun} value={address.name} className='outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg'/>
                <input type="text" name='phone' disabled value={userPhone ? userPhone.phone : ''} placeholder='Contact Number'  className='cursor-not-allowed outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg'/>
            </div>
            <div className='flex flex-col gap-5 text-lg'>
                <h1 className='font-semibold md:text-2xl text-[#353543]'>Address</h1>
                <input type="text" placeholder='House no.' value={address.house} name='house'  className='outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg'  onChange={setFun}/>
                <input type="text" placeholder='Area/building/Colony' value={address.area} name='area'  className='outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg' onChange={setFun}/>
                <input type="number" placeholder='PIN CODE' name='PIN' value={address.PIN} className='outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg' onChange={setFun}/>
                <input type="text" placeholder='landmark' name='landmark' value={address.landmark}  className='outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg' onChange={setFun}/>
                <div className='flex flex-col gap-5'>
                    <input type="text" placeholder='city' name='city' value={address.city} className='outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg' onChange={setFun}/>
                    <input type="text" placeholder='state' name='state' value={address.state} className='outline-none border-b-2 w-full text-[#353543] font-semibold sm:text-sm md:text-lg' onChange={setFun}/>
                </div>
            </div>
          </div>
         
        </div> */}
        
        <div className='border-s-2 text-[#353543] p-5 md:px-12 md:fixed right-48  flex flex-col sm:gap-3 md:gap-5'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between bg-gray-100 font-medium p-3' ><label htmlFor="cod" onClick={()=> setPayment('cod')}>COD Cash on Delivery</label><input type="radio" name='payment-mode' id='cod' className='' checked/></div>
          <div className='flex justify-between bg-gray-100 font-medium p-3' ><label htmlFor="online" onClick={()=> setPayment('onlnie')}>pay online</label><input type="radio" name='payment-mode' id='online' /></div>
          <div></div>
        </div>
          <h1 className='text-lg'>Price Details {myCartItems.length} items</h1>
          <div className='text-[#616163] flex justify-between'><p className='dashed'>Total Product Price</p><span>+₹{amount}</span></div>
          <hr />
          <h1 className='flex justify-between font-semibold md:text-lg'><p>Order Total</p><span>₹{amount}</span></h1>
          <p className='px-2 text-xs bg-[#f8f8ff]'>Clicking on 'cotinue' will not deducted any money</p>
          <Link  data={dataa} to='/payment-success' className={`py-2 text-lg sm:text-sm md:text-lg text-center rounded-md text-white font-bold w-full ${payment == 'cod' ? 'bg-green-600':'bg-[#b1389d]'}`}>{payment != 'cod' ? 'Continue' :'Place Order'}</Link>
          <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="" width={300}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cartaddress