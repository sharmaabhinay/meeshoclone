import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../components/Product';
import Footer from '../components/Footer';
import { set } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../redux/manageProduct/cart/action';
import { productList } from '../redux/manageProduct/showProducts/action';
import { PRODUCT_LIST } from '../redux/manageProduct/constant';
import { add_item_to_cart } from '../redux/auth/userAction';
import backendUrl from '../backend'


const Singleproduct = () => {
  const result = useSelector((state)=> state.userAuth)
  const isLoggedIn = result.isLoggedIn
  const dispatch = useDispatch()
  const location = useLocation()
  const {id} = useParams();
  const [product,setProduct] = useState(id)
  const [webtitle,setWebtitle] = useState();
  const [mainimage,setMainimage] = useState(product.image1)
  const [activeImage,setActiveimage] = useState(1)
  const [addToCartButton,setAddToCartButton] = useState(true)

  const navigate = useNavigate()
  useEffect(()=>{
    window.scroll(0,0)
    document.title = webtitle;
    const getproductData = async ()=> {
      try{
        const res = await axios.post(`${backendUrl}/product/${id}`)
        setProduct(res.data[0])
        setMainimage(res.data[0].image1)
        setWebtitle(res.data[0].name)
      }catch(err){
        console.log(err)
      }
    }
    getproductData()
    
  },[webtitle,id]);

  const activebuttonclick=(e)=> {
    setActiveimage(e)
  }
  const handleAddToCart = (e)=> {    
    let userNcart = {
      phone:result.phone,
      newCartItem:e
    }
    if(isLoggedIn == false){
      navigate('/signup')
    }else{
      dispatch(addToCart(e))
      dispatch(add_item_to_cart(userNcart))
      setAddToCartButton(false)
    }
    
    
  }
  const handleonBuynow = () => {
    navigate('/checkout/bynow',{state:{product}})
  }

  return (
    <>
    <Navbar />
    <div className="parent sm:mt-[5.5rem] md:mt-40">
      <div className='flex sm:flex-col md:flex-row md:gap-8 md:px-20 sm:w-[100%] md:w-[89%] m-auto'>
        <div className='leftSide sm:w-full md:w-[50%] flex gap-3'>
          <div className='md:flex gap-2 sm:hidden w-[21%]  flex-col px-5'>
            <div className={`px-2 rounded-lg border-red-400`} onClick={()=> activebuttonclick(1)} style={{border: activeImage == 1 ? '2px solid red':'none'}}>
              
              <img src={product.image1} alt="" className='md:w-12 md:h-12' onClick={()=>setMainimage(product.image1)}/>
            </div>
            <div className={`px-2 rounded-lg border-red-400 ${product.image2 ? 'block' :"hidden"}`} onClick={()=> activebuttonclick(2)} style={{border: activeImage == 2 ? '2px solid red':'none'}}>
              <img src={product.image2} alt="" className='border-2 rounded-lg' onClick={()=>setMainimage(product.image2)}/>
              
            </div>
            <div className={`px-2 rounded-lg border-red-400 ${product.image3 ? 'block' :"hidden"}`} onClick={()=> activebuttonclick(3)} style={{border: activeImage == 3 ? '2px solid red':'none'}}>
              
              <img src={product.image3} alt="" className='border-2 rounded-lg' onClick={()=>setMainimage(product.image3)}/>
            </div>
            <div className={`px-2 rounded-lg border-red-400 ${product.image4 ? 'block' :"hidden"}`} onClick={()=> activebuttonclick(4)} style={{border: activeImage == 4 ? '2px solid red':'none'}}>
              
              <img src={product.image4} alt="" className='border-2 rounded-lg' onClick={()=>setMainimage(product.image4)}/>
            </div>
          </div>
          <div className='sm:w-full'>
            <div className='sm:w-full md:left-5 md:relative md:w-[90%] md:px-5 sm:flex sm:justify-center border-2 rounded'>

              <img src={mainimage} alt="" className='md:w-60 sm:h-[21rem]'/>
            </div>
            <div className='flex justify-between sm:w-full sm:bottom-0 sm:px-2 sm:bg-white sm:py-2 md:p-5 md:my-3 sm:fixed md:relative'>
              {
                addToCartButton ? <button onClick={()=> handleAddToCart(product)} className='border-2 bg-white rounded border-[#9f2089] md:py-2 w-[45%] font-medium md:text-lg sm:text-sm text-[#9f2089] flex sm:gap-2 md:gap-5 items-center justify-center'><i className="fa-solid fa-cart-shopping"></i><span>Add to Cart</span></button> : <button className='border-2 bg-[#9f2089] rounded border-[#9f2089] md:py-2 w-[45%] font-medium md:text-lg sm:text-sm text-[#fff] flex sm:gap-2 md:gap-5 items-center justify-center' onClick={()=> navigate("/checkout/cart")}><i className="fa-solid fa-angles-right"></i><span>Go to Cart</span></button>
              }
              <button className=' flex sm:gap-2 md:gap-5 items-center justify-center w-[45%] rounded bg-[#9f2089] text-white md:py-3 sm:py-2 md:px-5 font-medium sm:text-sm md:text-lg' onClick={handleonBuynow}><i className="fa-solid fa-angles-right"></i><span>By Now</span></button>
            </div>
            <hr />
            <h2 className='md:block sm:hidden font-medium md:text-xl sm:ps-3 mt-5'>8 similar products</h2>
            <div className='similarImages w-[] sm:hidden md:flex gap-1 overflow-x-scroll sm:my-2 md:my-8'>
              <img src="https://images.meesho.com/images/products/57409918/iucvm_128.webp" alt="" width={100} className='md:h-28 sm:h-12'/>
              <img src="https://images.meesho.com/images/products/57409919/pndvz_128.webp" alt=""  width={100} className='md:h-28 sm:h-12'/>
              <img src="https://images.meesho.com/images/products/57409913/sirsz_128.webp" alt=""  width={100} className='md:h-28 sm:h-12'/>
              <img src="https://images.meesho.com/images/products/57409912/fhdcs_128.webp" alt=""  width={100} className='md:h-28 sm:h-12'/>
              <img src="https://images.meesho.com/images/products/57409915/cumnt_128.webp" alt=""  width={100} className='md:h-28 sm:h-12'/>
            </div>

            {/* testing the new feature start*/}
             <div className='sm:flex md:hidden justify-start gap-2 items-center p-2'>
              <div onClick={()=> activebuttonclick(1)} className={`${activeImage == 1 ? 'border-2 border-red-500': 'border-white border-2'} rounded-lg overflow-hidden p-1`}>
                <img src={product.image1} alt="" className='w-14 h-14' onClick={()=>setMainimage(product.image1)}/>
              </div>
              <div onClick={()=> activebuttonclick(2)} className={`${activeImage == 2 ? 'border-2 border-red-500': 'border-white border-2'} ${product.image2 ? 'block' :"hidden"} rounded-lg overflow-hidden p-1`}>
                <img src={product.image2} alt="" className='w-14 h-14' onClick={()=>setMainimage(product.image2)}/>
              </div>
              <div onClick={()=> activebuttonclick(3)} className={`${activeImage == 3 ? 'border-2 border-red-500': 'border-white border-2'} ${product.image3 ? 'block' :"hidden"} rounded-lg overflow-hidden p-1`}>
                <img src={product.image3} alt="" className='w-14 h-14' onClick={()=>setMainimage(product.image3)}/>
              </div>
              <div onClick={()=> activebuttonclick(4)} className={`${activeImage == 4 ? 'border-2 border-red-500': 'border-white border-2'} ${product.image4 ? 'block' :"hidden"} rounded-lg overflow-hidden p-1`}>
                <img src={product.image4} alt="" className='w-14 h-14' onClick={()=>setMainimage(product.image4)}/>
              </div>
             </div>
            {/* testing new feature end */}
          </div>
        </div>
        <div className='RightSide md:flex flex-col sm:w-full md:w-[50%] gap-4 text-[#8b8ba3] '>
          <div className="parent font-semibold rounded-md border p-4 flex flex-col sm:gap-1 md:gap-3">
            <h1 className='md:text-xl'>{product.name}</h1>
            <div className='flex gap-3 items-center text-black'><h1 className='font-medium sm:text-lg md:text-2xl'>{product.price}</h1> <i className="fa-solid fa-circle-exclamation bg-white" title="product details"></i></div>
            <div className='flex gap-2 items-center'>
              <span className='bg-[#23bb75] text-white md:py-px md:px-2 sm:text-xs sm:px-2 rounded-3xl'>{3.4}<i className="fa-solid fa-star"></i></span><small className='sm:text-xs md:text-md'>{541} Ratings, {154} Reviews</small>
            </div>
            <div className='sm:text-xs md:text-sm font-semibold'>Free Delivery</div>
          </div>
          <div className="parent2 rounded-md sm:p-2 md:p-4 flex flex-col gap-3 border">
            <h1 className='text-[#353543] font-medium md:text-xl'>Select Size</h1>
            <button className='bg-[#ffe7fb] sm:text-xs sm:w-20 md:w-28 text-[#9f2089] border border-[#9f2089] py-1 md:px-2 rounded-2xl font-medium'>Free Size</button>
          </div>
          <div className="parent3 rounded-md p-4 border flex flex-col">
            <h1 className='text-[#353543] md:text-xl font-medium'>Product Details</h1>
            <div className='text-[#616173] sm:text-xs md:text-sm'>
              <p>{product.detail}</p>
              <button className='font-underline border-b-2'>More Information</button>
            </div>
          </div>
          <div className="parent4 border rounded-md p-4">
            <h1 className='font-medium sm:text-lg md:text-xl text-[#353543]'>Sold By</h1>
            <div className=''>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'><img src="https://images.meesho.com/images/pow/shop_profile_100.webp" alt="" className='md:h-16 sm:h-10'/> <p className='text-[#353543] sm:text-sm md:text-xl font-semibold'>RRHR</p></div> <Link to="/shop" className='border-[#9f2089] text-center font-medium text-[#9f2089] sm:text-sm md:text-lg sm:py-1 md:py-2 px-6 border rounded'>View Shop</Link>
              </div>
              <div className='flex md:w-[70%] m-auto justify-between'>
                <div className='flex sm:text-sm flex-col justify-center'>
                  <button className='text-[#5585f8] bg-white border sm:text-xs w-16 rounded-xl'>{Math.floor(Math.random() * (5 - 2 + 1)) + 1}.{Math.floor(Math.random() * (9 - 1 + 1)) + 1} <i className="fa-solid fa-star"></i></button>
                  <button className='sm:text-sm'>80,726 Ratings</button>
                </div>
                <div className='flex flex-col justify-center'>
                  <span className='text-[#353543] font-semibold sm:text-sm md:text-lg'>948</span>
                  <span className='sm:text-sm md:text-lg'>Followers</span>
                  
                </div>
                <div className='flex flex-col justify-center'>
                  <span className='text-[#353543] font-semibold sm:text-sm md:text-lg'>121</span>
                  <span className='sm:text-sm md:text-lg'>Products</span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="parent6 border sm:hidden md:block rounded-md p-4">
            <h1 className='text-[#353543] text-xl font-medium'>Product Ratings & Reviews</h1>
            <div className='flex justify-between items-center my-5'>
              <div>              
                <div>
                    <div className='flex items-center text-[#038d63] font-medium'><span className='text-5xl'>3.7 </span><i className="fa-solid fa-star text-xl -mt-2 ms-2"></i></div>
                  <div className='text-sm leading-4'>
                    43829  Ratings,<br />7476  Reviews 
                  </div>

                </div>
              
            </div>
            <div className='flex gap-3'>
              <div className='text-black text-right'>
                <div className='flex items-center justify-between'><p>Excelent</p><meter value="70" max="100" className='w-[12rem]'></meter><span className='ms-10'>44496</span></div>
                <div className='flex items-center justify-between'><p>Very Good</p><meter value="30" max="100"></meter><span className='ms-10'>44496</span></div>
                <div className='flex items-center justify-between'><p>Good</p><meter value=""></meter><span className='ms-10'>44496</span></div>
                <div className='flex items-center justify-between'><p>Average</p><meter value=""></meter><span className='ms-10'>44496</span></div>
                <div className='flex items-center justify-between'><p>poor</p><meter value=""></meter><span className='ms-10'>44496</span></div>
                
              </div>
              
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className='sm:w-full md:w-[90%] m-auto'>
      <h1 className='text-medium text-xl'>People also viewed</h1>
      <div className='flex flex-wrap py-2 md:px-2 gap-5'>

        <Product category={product.category}/>
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export default Singleproduct