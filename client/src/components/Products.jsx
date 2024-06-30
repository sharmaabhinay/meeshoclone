import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { searchProduct } from '../redux/manageProduct/showProducts/action'

const Products = () => {
  // const {query} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [subcategory,setSubCategory] = useState(false)
  const [subgender,setSubgender] = useState(false)
  const [subcolor,setSubcolor] = useState()
  const [subprice,setSubprice] = useState()
  const [subsize,setSubsize] = useState()
  const [subrating,setSubrating] = useState()
  const searchQuery = location.state?.query;
  useEffect(()=> {
    // dispatch(searchProduct(searchQuery))
    window.scroll(0,0)
    document.title = "Meesho"
  })
  const genderFilter = (e)=> {
    dispatch(searchProduct(e))
  }
  const handleCategory = ()=> {
    subcategory ? setSubCategory(false):setSubCategory(true)
    setSubcolor(false)
    setSubgender(false)
  }
  const handleGender = ()=> {
    subgender ? setSubgender(false):setSubgender(true)
    setSubcolor(false)
    setSubCategory(false)
  }
  const handleColor = ()=> {
    subcolor ? setSubcolor(false):setSubcolor(true)
    setSubCategory(false)
    setSubgender(false)
  }
  return (
    <>
    <Navbar />
    <div className="parent sm:w-full sm:mt-24 md:mt-36 md:w-[92%] m-auto">
        <h1 className='font-semibold md:text-3xl text-[#353543] sm:px-2 md:p-0 my-6'>Products for you</h1>
      <div className='md:flex justify-between'>
        <div className='md:w-[23%] md:h-[50rem] sm:hiddenn flex md:gap-4 md:flex-col'>
            <div className="bock1 border rounded-lg sm:hidden md:flex py-1 px-4">
              <div>Sort by : </div>
              <select className='w-[12rem] h-[2rem] text-semibold rounded-lg ml-2 ps-2 outline-none appearance-none'>
                <option value="">Relevance</option>
                <option value="">hello</option>
                <option value="">hello</option>
                <option value="">hello</option>
                </select>
            </div>
            
            <div className=' flex md:flex-col md:gap-2 sm:w-full rounded-lg md:py-2 md:px-3'>
              <div className="parentFilters sm:hidden md:flex flex-col gap-1">
                <div className='font-medium text-[#353543]'>FILTERS</div>
                <p className='text-xs font-semibold text-[#8b8ba3]'>10000+ Products</p>
              </div>
              <hr  className='my-3'/>
              <div className='border sm:rounded-none md:rounded-lg sm:block md:hidden py-1 px-3'>
              Sort : 
              </div>
              <div className="Category sm:border md:border-none sm:p-1 sm:px-[11px] md:p-0">
                <div className='md:text-lg gap-1 sm:text-sm flex items-center sm:py-1 md:p-0 justify-between font-medium text-[#353543] md:mb-2'  onClick={handleCategory}><p>Category</p>{subcategory ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
                <div className='sm:absolute md:relative sm:left-0 sm:p-2 sm:translate-y-3 sm:bg-white sm:w-full' style={{display:subcategory ? "block":'none'}}>
                  {/* <hr /> */}
                  <div className='flex flex-col gap-3'>
                    <div className='flex items-center'><i className="fa-solid fa-magnifying-glass absolute sm:text-sm md:text-xl text-[#353543] ms-2"></i><input type="text" placeholder='Search' className='border rounded-md w-full outline-none ps-8 sm:py-1 md:py-2'/></div>
                    <div className='flex sm:text-sm md:text-base flex-col gap-3'>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='womenTshirts'/><label htmlFor="womenTshirts" className='text-[#353543] font-semibold opacity-'>Women T-Shirts</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='womenTop'/><label htmlFor="womenTop" className='text-[#353543] font-semibold opacity-'>Women Tops And Tunics</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='bedsheets'/><label htmlFor="bedsheets" className='text-[#353543] font-semibold opacity-'>Bedsheets</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='blouses'/><label htmlFor="blouses" className='text-[#353543] font-semibold opacity-'>Blouses</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='cups&mugs'/><label htmlFor="cups&mugs" className='text-[#353543] font-semibold opacity-'>Cups & Mugs</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='Earings&studs'/><label htmlFor="Earings&studs" className='text-[#353543] font-semibold opacity-'>Earings & Studs</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='hairaccessories'/><label htmlFor="hairaccessories" className='text-[#353543] font-semibold opacity-'>hair Accessories</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='hairoil'/><label htmlFor="hairoil" className='text-[#353543] font-semibold opacity-'>Hair Oils</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='idols'/><label htmlFor="idols" className='text-[#353543] font-semibold opacity-'>Idols & Figurines</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='jewellery'/><label htmlFor="jewellery" className='text-[#353543] font-semibold opacity-'>Jewellery Set</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='kids'/><label htmlFor="kids" className='text-[#353543] font-semibold opacity-'>Kids - Boys Tshirts & Polos</label>
                        </div>
                        
                    </div>
                    
                  </div>
                </div>
              </div>
              <hr />
              <div className='Gender sm:border md:border-none sm:p-1 sm:px-[11px] md:p-0'>
                <div className='md:text-lg sm:text-sm gap-1 sm:py-1 flex items-center justify-between font-medium text-[#353543] mb-2'  onClick={handleGender}><p>Gender</p>{subgender ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
                <div  style={{display:subgender ? "block":"none"}} className='sm:absolute md:relative bg-white left-0 sm:p-5 md:p-0'>
                  <div className='text-[#8b8ba3] flex gap-3 flex-wrap'>
                  <button className='text-bold border py-2 px-4 rounded-2xl' onClick={()=>genderFilter('boy')}>Boys</button>
                  <button className='text-bold border py-2 px-4 rounded-2xl' onClick={()=>genderFilter('girl')}>Girls</button>
                  <button className='text-bold border py-2 px-4 rounded-2xl' onClick={()=>genderFilter('men')}>Men</button>
                  <button className='text-bold border py-2 px-4 rounded-2xl' onClick={()=>genderFilter('women')}>Women</button>
                </div>
                </div>
                
              </div>
              <hr />
              <div className='Color sm:border md:border-none sm:p-1 sm:px-[11px] md:p-0'>
                <div className='md:text-lg sm:text-sm gap-1 sm:py-1 flex items-center justify-between font-medium text-[#353543] mb-2'  onClick={handleColor}><p>Color</p>{subcolor ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
                <div  style={{display:subcolor ? "block":"none"}} className='sm:absolute md:relative bg-white left-0 sm:p-5 md:p-0'>
                    <div className='text-[#8b8ba3] flex gap-3 flex-wrap'>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>blue</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Black</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>green</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Brown</button>
                      {/* <button className='text-bold border py-2 px-4 rounded-2xl'>Combo Of Different Color</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Combo Of Maroon Shade</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Combo Of Red Shade</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Gold</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Grey</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Khaki</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Light Pink</button> */}
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Maroon</button>
                  </div>
                </div>
                
              </div>
              <hr />
              <div className="Size sm:hidden md:block">
                <div className='text-lg flex items-center justify-between font-medium text-[#353543] mb-2'  onClick={()=> subsize ? setSubsize(false):setSubsize(true)}><p>Size</p>{subsize ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
                <div className='' style={{display:subsize ? "block":'none'}}>
                  {/* <hr /> */}
                  <div className='flex flex-col gap-3'>
                    <div className='flex items-center'><i className="fa-solid fa-magnifying-glass absolute text-xl text-[#353543] ms-2"></i><input type="text" placeholder='Search' className='border rounded-md w-full outline-none ps-8 py-2'/></div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='0-2'/><label htmlFor="0-2" className='text-[#353543] font-semibold opacity-'>0-2 Years</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='1.5'/><label htmlFor="1.5" className='text-[#353543] font-semibold opacity-'>1.5 meters</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='1.75'/><label htmlFor="1.75" className='text-[#353543] font-semibold opacity-'>1.75 meters</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='10'/><label htmlFor="10" className='text-[#353543] font-semibold opacity-'>10</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='10-16'/><label htmlFor="10-16" className='text-[#353543] font-semibold opacity-'>10-16 Years</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='2meters'/><label htmlFor="2meters" className='text-[#353543] font-semibold opacity-'>2 meters</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='2.5years'/><label htmlFor="2.5years" className='text-[#353543] font-semibold opacity-'>2.5 Years</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='2.2meters'/><label htmlFor="2.2meters" className='text-[#353543] font-semibold opacity-'>2.2 meters</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='2.4'/><label htmlFor="2.4" className='text-[#353543] font-semibold opacity-'>2.4 </label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='2.5meters'/><label htmlFor="2.5meters" className='text-[#353543] font-semibold opacity-'>2.5 meters</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='2.6'/><label htmlFor="2.6" className='text-[#353543] font-semibold opacity-'>2.6</label>
                        </div>
                        
                    </div>
                    
                  </div>
                </div>
              </div>
              <hr />
              <div className='Price sm:hidden md:block'>
                <div className='text-lg flex items-center justify-between font-medium text-[#353543] mb-2'  onClick={()=> subprice ? setSubprice(false):setSubprice(true)}><p>Price</p>{subprice ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
                <div  style={{display:subprice ? "block":"none"}}>
                    <div className='text-[#8b8ba3] flex gap-3 flex-wrap'>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 149</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 199</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 249</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 299</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 349</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 449</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 199</button>
                      <button className='text-bold border py-2 px-4 rounded-2xl'>Under ₹ 99</button>
                      
                  </div>
                </div>
                
              </div>
              <hr />
              <div className="Size sm:hidden md:block">
                <div className='text-lg flex items-center justify-between font-medium text-[#353543] mb-2'  onClick={()=> subrating ? setSubrating(false):setSubrating(true)}><p>Rating</p>{subrating ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
                <div className='' style={{display:subrating ? "block":'none'}}>
                  {/* <hr /> */}
                  <div className='flex flex-col gap-3'>
                    <div className='flex items-center'><i className="fa-solid fa-magnifying-glass absolute text-xl text-[#353543] ms-2"></i><input type="text" placeholder='Search' className='border rounded-md w-full outline-none ps-8 py-2'/></div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='2.0r'/><label htmlFor="2.0r" className='text-[#353543] font-semibold opacity-'>2.0 and above</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='3.0r'/><label htmlFor="3.0r" className='text-[#353543] font-semibold opacity-'>3.0 and above</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='3.5r'/><label htmlFor="3.5r" className='text-[#353543] font-semibold opacity-'>3.5 and above</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='4.0r'/><label htmlFor="4.0r" className='text-[#353543] font-semibold opacity-'>4.0 and above</label>
                        </div>
                        <div className='flex gap-3'>
                          <input type="checkbox" className=''  id='mtrusted'/><label htmlFor="mtrusted" className='text-[#353543] font-semibold opacity-'>M-Trusted</label>
                        </div>                        
                    </div>
                    
                  </div>
                </div>
              </div>

              
            </div>
        </div>
        <div className='sm:w-full md:w-[75%] flex flex-wrap md:gap-4 overflow-hidden'>
          <Product/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products