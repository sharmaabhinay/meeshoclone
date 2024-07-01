import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Footer from './Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/manageProduct/showProducts/action';
import axios from 'axios';
import backendUrl from '../backend'
const Navbar = () => {

    let result = useSelector((state)=> state.userAuth)
    let loggedIn = result.isLoggedIn;
    const userPhoneNumber = result.phone;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    // let cartLength = useSelector((state)=> state.cartData)
    const [cart,setCart] = useState(0)
    const [query,setQuery]= useState('')
    const [visibilityWomenEthnic,setvisibilityWomenEthnic] = useState(false);
    const [visibilityWomenWestern,setvisibilityWomenWestern] = useState(false);
    const [visibilityMen,setvisibilityMen] = useState(false);
    const [visibilityKids,setvisibilityKids] = useState(false);
    const [visibilityHomeKitchen,setvisibilityHomeKitchen] = useState(false);
    const [visibilityBeautyHealth,setvisibilityBeautyHealth] = useState(false);
    const [visibilityJewellery,setvisibilityJewellery] = useState(false);
    const [visibilityBagsFootwear,setvisibilityBagsFootwear] = useState(false);
    const [visibilityElectronics,setvisibilityElectronics] = useState(false);
    const [downloadAppVisibility,setDownloadAppVisibility] = useState(false)
    const [profileToggle,setProfileToggle] = useState(false)

    const [webtitle,setWebtitle] = useState('Online Shopping Site for Fashion, Electronics, Home &amp; More | Meesho')
    
    useEffect(()=> {
        window.scroll(0,0)
        const newfun = async ()=> {
            let testingUser = {
              phone:userPhoneNumber
            }
            if(!testingUser.phone){
                // console.log('user not found')
            }else{
                try{
                    let {data} = await axios.post(`${backendUrl}/getuser`,testingUser)
                    // console.log(data)
                      setCart(data.cartItems.length)
                      // console.log(data.cartItems.length)
                  }catch(err){
                    console.log(err)
                  }
            }
      
          }
          newfun()
    },[webtitle])

    const Logoutme = ()=> {

        setTimeout(()=> {
        },1500)
        location.reload()
        
    }
    const handleOnSignup = ()=> {
        navigate('/signup')
    }
    const handleonSearch=(e)=>{
        e.preventDefault();
        dispatch(searchProduct(query))
        if(location.pathname != '/checkout/products'){
            navigate(`/checkout/products`,{state:{query}})
        }

    }
  return (
    <>
    <div className="w-full bg-white text-[#353543] fixed top-0 z-10"> {/* Added fixed and top-0 */}
        <div className="parent bg-white sm:gap-4  flex justify-between items-center w-[92%] m-auto sm:p-1 md:p-3">
            <div className=''>
                <Link to="/"><img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="" className='md:w-[150px] sm:w-[100px]'/></Link>
                
            </div>
            <form action='' onSubmit={handleonSearch} className='w-auto sm:w-68 sm:hidden md:block'>
                 <i className="fa-solid fa-magnifying-glass absolute sm:text-sm md:text-xl text-slate-400 mt-2 ms-3"></i> {/* Changed class to className */}
                <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' value={query ? query :''} onChange={(e)=> setQuery(e.target.value)} className='border-2 rounded sm:text-sm md:text-md outline-none sm:py-1 md:py-2 px-5 sm:ps-8 md:ps-12 sm:w-full md:w-[26rem]'/>
            </form>
            <div className='md:flex'>
                <div className='md:flex sm:hidden items-center justify-between gap-6'>
                    <div className='flex items-center gap-1 hover:text-[#9f2089] hover:font-medium' onMouseEnter={()=> setDownloadAppVisibility(true)} onMouseLeave={()=> setDownloadAppVisibility(false)}>
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
                <div className='flex sm:text-xs md:text-[1rem] ml-5 gap-8'>
                    <div className='flex flex-col items-center  hover:text-pink-400 hover:font-medium' onMouseEnter={()=> setProfileToggle(true)} onMouseLeave={()=> setTimeout(()=>setProfileToggle(false),2000) }>
                        <i className="fa-regular fa-user text-xl"></i><a href="#">Profile</a> {/* Changed class to className */}
                    </div>
                    <Link to="/checkout/cart" className='flex flex-col'>
                        <i className="fa-solid fa-cart-shopping text-xl"></i><a href="#">Cart</a> {/* Changed class to className */}
                    </Link>
                </div>
                <div className='md:block sm:hidden h-auto z-10 w-52 rounded-b-xl -translate-x-8 absolute mt-16 p-4 bg-white border-2 flex flex-col gap-4' style={{display : downloadAppVisibility ? 'block' : 'none'}}>
                    <h1 className='text-lg font-medium'>Download From</h1>
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" className='my-4' />
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" />
                </div>
                {
                    loggedIn ? (
                        <div className='absolute flex z-10 flex-col sm:p-2 md:p-4 border-2 sm:w-36 md:w-60 rounded-b-lg md:right-8 md:top-[4.3rem] bg-white sm:right-3 sm:top-[3.2rem]' style={{display:profileToggle ? 'block':'none'}}>
                            <div className='flex flex-col sm:gap-1 md:gap-3'>
                                <div className='flex items-center gap-3'>
                                    <img src="https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="" className='md:w-[40px] sm:w-[20px]'/>
                                    <div className='leading-5'>
                                        <h2 className=' sm:text-sm md:text-lg font-medium'>Hello User</h2>
                                        <h2 className='font-medium text-sm'>{userPhoneNumber}</h2>
                                    </div>
                                </div>
                                <hr />
                                <Link className='flex items-center gap-3'>
                                    <i className="fa-solid fa-bag-shopping  sm:text-sm md:text-[1rem]"></i><h1 className=' sm:text-sm md:text-lg font-medium'>My Orders</h1>
                                </Link>
                                <hr />
                                <button type='button' onClick={Logoutme} className='flex items-center gap-3'>
                                    <i className="fa-solid fa-arrow-right-from-bracket sm:text-xs md:text-[1rem]"></i><h1 className=' sm:text-sm md:text-lg font-medium'>Logout</h1>
                                </button>
                            </div>
                            
                        </div>
                       
                    ):(
                        <div className='absolute flex z-10 flex-col sm:gap-0 md:gap-5 sm:text-sm sm:p-2 md:p-4 border-2 sm:w-40 md:w-60 rounded-b-lg sm:top-[3.2rem] sm:right-3 md:right-8 md:top-[4.8rem] bg-white' style={{display:profileToggle ? 'block':'none'}}>
                        <h1 className='md:text-xl font-medium'>Hello User</h1>
                        <p className='text-xs sm:mb-2 md:mb-5'>To access your Meesho account</p>
                        <button onClick={handleOnSignup} className='bg-[#9f2089] text-white sm:text-base md:text-xl sm:w-full rounded md:py-2 md:px-[4.1rem] font-medium'>Sign Up </button>
                        <hr className='h-px sm:mt-2 md:mt-5 bg-black'/>
                        <div>
                            <i className="fa-solid fa-bag-shopping sm:text-xs"></i><Link to="/orders" className='ms-3 md:mt-4 md:text-xl font-medium'>My Orders</Link>
                        </div>
                        </div>
                    )
                }
                <div className='absolute bg-[#ffe7fb] sm:px-1 px-2 md:py-px text-xs rounded-full text-[#9f2089] border-[#9f2089] border-px sm:right-2 sm:text-[.5rem] md:text-sm sm:top-0 md:right-[4rem] top-1'>{cart}</div>
                
                <div className='w-32 h-1 bg-[#9f2089] absolute mt-[3.8rem]' style={{display:downloadAppVisibility ? "block" : "none"}}></div>
                <div className='w-20 h-1 bg-[#9f2089] absolute mt-[3.8rem] right-28' style={{display:profileToggle ? "block":'none'}}></div>
            </div>
            
        </div>
        <form action='' onSubmit={handleonSearch} className='w-auto sm:w-68 sm:block md:hidden'>
                 <i className="fa-solid fa-magnifying-glass absolute sm:text-sm md:text-xl text-slate-400 mt-2 ms-3"></i> {/* Changed class to className */}
                <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' onChange={(e)=> setQuery(e.target.value)} className='border-2 rounded sm:text-sm md:text-md outline-none border-b-0 font-medium sm:py-1 md:py-2 px-5 sm:ps-8 md:ps-12 sm:w-full md:w-[26rem]'/>
            </form>
        <div className='w-full h-px bg-slate-400 mb-1'></div>
        <div className="submenuT sm:hidden md:block">
            <div className="subParent py-2 z-10 bg-white flex justify-between w-[92%] m-auto">
                <div className='hover:font-medium hover:text-[#9f2089]' onMouseEnter={()=> setvisibilityWomenWestern(true)} onMouseLeave={()=> setvisibilityWomenWestern(false)}>
                            <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Women Western</span>
                            <div className="sumenuitems mt-2 z-0 testing1a border-2 w-[93%] h-auto bg-black text-white m-auto absolute duration-1000 hover:display-block" style={{display:visibilityWomenWestern ? 'block':'none'}}>{/*   */}
                                <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                                     <div className='leading-7 flex flex-col'>
                                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Topwear</h2>
                                        <a href="#">Tops</a>
                                        <a href="#">Dresses</a>
                                        <a href="#">Sweaters</a>
                                        <a href="#">Jumpsuits</a>
                                    </div>
                                    <div className='leading-7 flex flex-col'>
                                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Bottmwear</h2 >
                                        <a href="#">Jeans</a>
                                        <a href="#">Jeggings</a>
                                        <a href="#">Plazzos</a>
                                        <a href="#">Shorts</a>
                                        <a href="#">Skirts</a>
                                        
                                    </div>
                                    <div className='leading-7 flex flex-col'>
                                        <h2  className='text-[#9f2089] font-medium text-lg mb-3'>Innerwear</h2>
                                        <a href="#">Bra</a>
                                        <a href="#">Briefs</a>
                                        
                                    </div>
                                    <div className='leading-7 flex flex-col'>
                                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Sleepwear</h2>
                                        <a href="#">Nightsuits</a>
                                        <a href="#">Babydolls</a>
                                    </div>
                            
                                </div>
                            </div>
                </div>
                <div className='hover:font-medium hover:text-[#9f2089]' onMouseEnter={()=> setvisibilityWomenEthnic(true)} onMouseLeave={()=> setvisibilityWomenEthnic(false)}>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>women Ethnic</span>
                    <div className="sumenuitems mt-2 border-2 w-[92%] h-auto bg-black text-white left-16 absolute" style={{display:visibilityWomenEthnic ? 'block':'none'}}>
                        <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173] ">
                            <div className=''>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3'>All Women Ethnic</h2>
                                <a href="#">view all</a>
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Sarees</h2 >
                                <a href="#">All Sarees</a>
                                <a href="#">Silk Sarees</a>
                                <a href="#">Cotton Silk Sarees</a>
                                <a href="#">Cotton Sarees</a>
                                <a href="#">Georgette Sarees</a>
                                <a href="#">Chiffon Sarees</a>
                                <a href="#">Satin Sarees</a>
                                <a href="#">Embroidered Sarees</a>
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2  className='text-[#9f2089] font-medium text-lg mb-3'>Kurtis</h2>
                                <a href="#">All Kurtis</a>
                                <a href="#">Anarkali Kurtis</a>
                                <a href="#">Rayon Kurtis</a>
                                <a href="#">Cotton Kurtis</a>
                                <a href="#">Embroidered Kurtis</a>
                                
                            </div>
                            <div className='leading-7'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Kurta Sets</h2>
                                <a href="#">All Kurta Sets</a>
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2  className='text-[#9f2089] font-medium text-lg mb-3'>Suits & Dress Material</h2>
                                <a href="#">All Suits & Dress Material</a>
                                <a href="#">Cotton Suits</a>
                                <a href="#">Embroidered Suits</a>
                                <a href="#">Chanderi Suits</a>
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Other Ethnic</h2>
                                <a href="#">Blouses</a>
                                <a href="#">Dupattas</a>
                                <a href="#">Lehanga</a>
                                <a href="#">Gown</a>
                                <a href="#">Ethnic Bottomwear</a>
                            </div>
                        </div>
                     </div>
                </div>
                <div onMouseEnter={()=> setvisibilityMen(true)} onMouseLeave={()=> setvisibilityMen(false)} className=''>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Men</span>
                    <div className="sumenuitems pt-3 border-2 mt-2 w-[93%]  h-auto  text-white left-12 absolute" style={{display:visibilityMen ? 'block':'none'}}>
                        <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                            <div className='leading-7 flex flex-col'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Top Wear</h2>
                                <a href="#">All Top Wear</a>
                                <a href="#">Tshirts</a>
                                <a href="#">Shirts</a>
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Bottm Wear</h2 >
                                <a href="#">Track Pants</a>
                                <a href="#">Jeans</a>
                                <a href="#">Trousers</a>                        
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2  className='text-[#9f2089] font-medium text-lg mb-3'>Men Accessories</h2>
                                <a href="#">All Men Accessories</a>
                                <a href="#">Watches</a>
                                <a href="#">Belts</a>
                                <a href="#">Wallets</a>
                                <a href="#">Jewellery</a>
                                <a href="#">Sunglasses</a>
                                <a href="#">Bags</a>
                                
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Men Footwear</h2>
                                <a href="#">Casual Shoes</a>
                                <a href="#">Sports Shoes</a>
                                <a href="#">Sandals</a>
                                <a href="#">Formal Shoes</a>
        \                    </div>
                            <div className='leading-7 flex flex-col'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Ethnic Wear</h2>
                                <a href="#">Men Kurtas</a>
                                <a href="#">Ethinic Jackets</a>
                            </div>
                            <div className='leading-7 flex flex-col'>
                                <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Inner & Sleep Wear</h2>
                                <a href="#">All Inner & Sleep Wear</a>
                                <a href="#">Vests</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div onMouseEnter={()=> setvisibilityKids(true)} onMouseLeave={()=> setvisibilityKids(false)}>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Kids</span>
                    <div className="sumenuitems border-2 mt-2 w-[92%] h-auto bg-black text-white left-16 absolute" style={{display:visibilityKids ? 'block':'none'}}>
                <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Boys & Girls 2+ Years</h2>
                        <a href="#">Dresses</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Infant 0-2 Years</h2 >
                        <a href="#">Rompers</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2  className='text-[#9f2089] font-medium text-lg mb-3'>Toys & Accessories</h2>
                        <a href="#">Soft Toys</a>
                        <a href="#">Footwear</a>
                        <a href="#">Stationary</a>
                        <a href="#">Watches</a>
                        <a href="#">Bags & Backpacks</a>                        
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Baby Care</h2>
                        <a href="#">All Baby Care</a>
                    </div>
                    
                </div>
                    </div>
                </div>
                <div onMouseEnter={()=> setvisibilityHomeKitchen(true)} onMouseLeave={()=> setvisibilityHomeKitchen(false)}>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Home & Kitchen</span>
                    <div className="sumenuitems border-2 mt-2 w-[92%] h-auto bg-black text-white left-16 absolute" style={{display:visibilityHomeKitchen ? 'block':'none'}}>
                <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Home Furnishing</h2>
                        <a href="#">Bedsheets</a>
                        <a href="#">Doormats</a>
                        <a href="#">Curtains & Sheers</a>
                        <a href="#">Cushions & Cushion Covers</a>
                        <a href="#">Mattress Protectors</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Home Decor</h2 >
                        <a href="#">All Home Decor</a>
                        <a href="#">Stickers</a>
                        <a href="#">Clocks</a>
                        <a href="#">Showpieces</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2  className='text-[#9f2089] font-medium text-lg mb-3'>Kitchen & Dinning</h2>
                        <a href="#">Kitchen Storage</a>
                        <a href="#">Cookware & Bakeware</a>
                    </div>                    
                </div>
                    </div>
                </div>
                <div onMouseEnter={()=> setvisibilityBeautyHealth(true)} onMouseLeave={()=> setvisibilityBeautyHealth(false)}>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Beauty & Health</span>
                    <div className="sumenuitems border-2 mt-2 w-[92%] h-auto bg-black text-white left-16 absolute" style={{display:visibilityBeautyHealth ? 'block':'none'}}>
                <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Make up</h2>
                        <a href="#">Face</a>
                        <a href="#">Eyes</a>
                        <a href="#">Lips</a>
                        <a href="#">Nails</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Wellness</h2 >
                        <a href="#">Sanitizers</a>
                        <a href="#">Oral Care</a>
                        <a href="#">Feminine Hygiene</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2  className='text-[#9f2089] font-medium text-lg mb-3'>Skincare</h2>
                        <a href="#">Deodrants</a>
                    </div>                    
                </div>
                    </div>
                </div>
                <div onMouseEnter={()=> setvisibilityJewellery(true)} onMouseLeave={()=> setvisibilityJewellery(false)}>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Jewellery & Accessories</span>
                    <div className="sumenuitems border-2 mt-2 w-[92%] h-auto bg-black text-white left-16 absolute" style={{display:visibilityJewellery ? 'block':'none'}}>
                <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Jewellery</h2>
                        <a href="#">Jewellery Set</a>
                        <a href="#">Earrings</a>
                        <a href="#">Mangalsutras</a>
                        <a href="#">Studs</a>
                        <a href="#">Bangles</a>
                        <a href="#">Necklaces</a>
                        <a href="#">Rings</a>
                        <a href="#">Anklets</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Women Accessory</h2 >
                        <a href="#">Bags</a>
                        <a href="#">Watches</a>
                        <a href="#">Hair Accessories</a>
                        <a href="#">Socks</a>
                        <a href="#">Sunglasses</a>
                    </div>
                                       
                </div>
                    </div>
                </div>
                <div onMouseEnter={()=> setvisibilityBagsFootwear(true)} onMouseLeave={()=> setvisibilityBagsFootwear(false)}>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Bags & Footwear</span>
                    <div className="sumenuitems border-2 mt-2 w-[92%] h-auto bg-black text-white left-16 absolute" style={{display:visibilityBagsFootwear ? 'block':'none'}}>
                <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Women Bags</h2>
                        <a href="#">All Women Bags</a>
                        <a href="#">Handbags</a>
                        <a href="#">Clutches</a>
                        <a href="#">Slingbags</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Men Bags</h2 >
                        <a href="#">All Men Bags</a>
                        <a href="#">Men Wallets</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Men Footwear</h2 >
                        <a href="#">Sports Shoes</a>
                        <a href="#">Casual Shoes</a>
                        <a href="#">Formal Shoes</a>
                        <a href="#">Sandals</a>
                    </div>
                    <div className='leading-7 flex flex-col'>
                        <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Women Footwear</h2 >
                        <a href="#">Flats</a>
                        <a href="#">Bellies</a>
                        <a href="#">Juttis</a>
                    </div>
                                       
                </div>
                    </div>
                </div>
                <div onMouseEnter={()=> setvisibilityElectronics(true)} onMouseLeave={()=> setvisibilityElectronics(false)}>
                    <span className='testing cursor-pointer py-[.4rem] hover:border-b-4 border-b-[#9f2089]'>Electronics</span>
                    <div className="sumenuitems border-2 mt-2 w-[92%] h-auto bg-black text-white left-16 absolute" style={{display:visibilityElectronics ? 'block':'none'}}>
                    <div className="parent p-5 grid grid-cols-6 bg-white text-[#616173]">
                        <div className='leading-7 flex flex-col'>
                            <h2 className='text-[#9f2089] font-medium text-lg mb-3'>Mobile & Accessories</h2>
                            <a href="#">All Mobile & Accessories</a>
                            <a href="#">Smartwatches</a>
                            <a href="#">Mobile Holders</a>
                            <a href="#">Mobile cases and covers</a>
                        </div>
                        <div className='leading-7 flex flex-col'>
                            <h2 className='text-[#9f2089] font-medium text-lg mb-3' >Appliances</h2 >
                            <a href="#">All Appliances</a>
                            <a href="#">Grooming</a>
                            <a href="#">Home Appliances</a>
                        </div>
                                        
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='w-full h-px bg-slate-300 relative z-0'></div>
    </div>
    </>
  )
}

export default Navbar;
