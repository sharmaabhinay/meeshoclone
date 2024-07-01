import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = ({data}) => {
  const navigate = useNavigate()
  const [isLoading,setisLoading] = useState(false)
  const [order,setOrder] = useState(null)
  const handleonclick = ()=> {
    setisLoading(true)
    setTimeout(()=> {
      navigate('/')
    },1500)
    
  }
  useEffect(()=> {
    const check = Math.floor(Math.random() * 1000)
    setOrder(check)
    console.log(data)
  },[document.title])

  return (
    <div className=''>
      <div className='text-center'>
        <div className='flex justify-center'>
          <img src="https://i.etsystatic.com/29643476/r/il/c6612d/3500289802/il_fullxfull.3500289802_pc31.jpg" alt="" className='w-[200px]'/>
        </div>
        <div>
          <p className='text-green-400 font-medium text-lg'>Order placed</p>
          <div className='font-medium'>order no. #{order}</div>
          <button onClick={handleonclick} className={` text-white font-bold  text-xl py-1 px-5 rounded-lg outline-none border-0 ${isLoading ? 'bg-green-400' : 'bg-green-700'}`}>Contiunue Shopping </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess