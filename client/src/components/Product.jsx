import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { productList, searchProduct } from '../redux/manageProduct/showProducts/action';


const Product = ({category}) => {
  const [products,setProducts] =useState([])
  let result = useSelector((state)=> state.productsList)
  const [id,setId] = useState('')
  const [propsCategory,setPropsCategory] = useState()
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(productList())
    setProducts(result)
    setTimeout(()=>{
      if(category){
            setPropsCategory(category)
            searchProduct(category)
      }
    },1500)
    // let random = Math.floor(Math.random() * 2)

  },[])
  useEffect(()=> {
    setProducts(result)
  },[result])
  return (
    <>
    {
      products.length == 0 ? (<div className='w-full sm:my-32'>
        <div className='w-20 m-auto text-center'>
          <img src="https://th.bing.com/th/id/OIP.KkX2_mLnZjvUCUkjNQ_96AHaGW?rs=1&pid=ImgDetMain" alt="" className='sm:w-11 rounded-lg brightness-75' style={{opacity:0.4}}/>
          <p className='font-bold text-gray-500 -translate-x-3'>Loading...</p>
        </div>
      </div>):(
        <div className='flex flex-wrap justify-between sm:gap-0 md:gap-6'>
          {
              products.map((item,i)=> (
                <Link to={`/singleproduct/${item._id}`} key={i} className='border-2 text-[#353543] d:rounded-lg md:h-[25rem] flex flex-col md:gap-2 sm:w-[50%] md:w-56 overflow-hidden pt-px p-2' onClick={()=> setId(item._id)}>
                    <img src={item.image1} alt="" className='md:h-60 sm:h-36'/>
                    <p className='font-medium text-[#8b8ba3] overflow-hidden sm:text-xs md:text-base h-[16px]'>{item.name}</p>
                    <div className='flex items-end gap-2'><p className='md:text-2xl font-bold sm:text-sm'>{item.price}</p><small className='font-semibold text-[#8b8ba3] text-xs'>onwards</small></div>
                    <div><span className='md:text-sm sm:text-[0.4rem] font-semibold text-[#8b8ba3] mb-2 bg-slate-100 px-2 rounded-xl md:w-26'>Free Delivery</span></div>
                    
                    <div className='flex mb-2 gap-2 items-center'>
                        <span className='text-white flex items-center gap-1 bg-[#23bb75] rounded-2xl font-medium px-2'><span  className='sm:text-sm md:text-base'>{Math.floor(Math.random() * (5 - 2 + 1)) + 1}.{Math.floor(Math.random() * (9 - 1 + 1)) + 1}</span><i className="fa-solid fa-star text-xs"></i></span><span className='text-[#8b8ba3] text-xs font-semibold'>{Math.floor(1000 + Math.random() * 9000)} Reviews</span>
                    </div>
                    
                </Link>
              ))
        }
        </div>
      )
    }
    
        
    {/* </div> */}
    </>
  )
}

export default Product