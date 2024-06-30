import React, { useState } from 'react'

const Footer = () => {
    const [acordianVisibility,setAcordianVisibility] = useState(true)
  return (
    <>
    <div className="parent bg-[#f8f8ff] sm:p-1 md:p-16 text-[#353543]">
        <div className='md:flex sm:block md:justify-between'>
            <div className='md:w-[250rem] md:flex sm:block md:flex-col gap-5'>
                <p className='md:text-3xl sm:text-lg font-medium'>Shop Non-Stop on Meesho</p>
                <p className='md:text-base sm:text-sm'>Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery</p>
                <div className='flex gap-3'>
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt=""  className='md:w-[200px] sm:w-[120px]'/>
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="" className='md:w-[200px] sm:w-[120px]' />
                </div>
            </div>
            <div className='md:grid grid-cols-4 font-medium text-lg text-[#616173] md:ms-16'>
                <div className='flex flex-col sm:gap-1 md:gap-4'>
                    <a href="#">Careers</a>
                    <a href="#">Become a supplier</a>
                    <a href="#">Hall of Fame</a>
                    <a href="#">Sitemap</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <a href="#">Legal and Policies</a>
                    <a href="#">Meesho Tech Blog</a>
                    <a href="#">Notices and Returns</a>
                </div>
                <div>
                    <b className='text-black'>Reach out to us</b>
                    <div className='flex gap-4'>
                        <a href="#"><img src="https://images.meesho.com/images/pow/facebook.webp" alt="" /></a>
                        <a href="#"><img src="https://images.meesho.com/images/pow/instagram.webp" alt="" /></a>
                        <a href="#"><img src="https://images.meesho.com/images/pow/youtube.webp" alt="" /></a>
                        <a href="#"><img src="https://images.meesho.com/images/pow/linkedin.webp" alt="" /></a>
                        <a href="#"><img src="https://images.meesho.com/images/pow/twitter.webp" alt="" /></a>
                    </div>
                </div>
                <div>
                    <h1 className='text-black font-bold mb-3'>Contact Us</h1>
                    <address className='text-sm'>
                        Fashnear Technologies Private Limited.
                        CIN: U74900KA2015PTC082263
                        3rd Floor, Wing-E, Helios Business Park,Kadubeesanahalli Village, Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Bangalore South, Karnataka, India, 560103
                        E-mail address query@meesho.com
                        © 2015-2024 Meesho.com
                    </address>
                </div>
            </div>
            {/* <div></div> */}
        </div>

        <div className="acordiantype">
            <div className="parent  border-1 bg-white p-5 rounded-xl">
                <div className='flex justify-between' onClick={()=> acordianVisibility ? setAcordianVisibility(false): setAcordianVisibility(true)}>
                    <div className='font-bold text-xl'>More About Meesho</div>{acordianVisibility ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                </div>
                
                <div style={{display : acordianVisibility ? 'block':'none'}} className='mt-5 text-justify'>
                    <hr className='h-[2px] bg-black'/>
                    <div className='mt-5 sm:text-xs'>
                        <div>
                            <b className='text-xl font-medium'>Meesho: Affordable Online Shopping at Your Fingertips</b>
                            <p className='mt-1 text-sm font-medium'>There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market. Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet.</p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'>A Huge Selection of Products Across All Categories</b>
                            <p className='mt-1 text-sm font-medium'>We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need.</p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'>Latest Women's Fashion Is Right Here</b>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'>Women’s Ethnic Wear Collection</b>
                            <p className='mt-1 text-sm font-medium'>When it comes to <span className='text-[#9f2089]'>women's ethnic wear</span>, we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual <span className='text-[#9f2089]'>Kurtis</span>, we have it all. And with our stunning collection of accessories, footwear, and <span className='text-[#9f2089]'>jewellery sets</span> , it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today!</p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'>Western Wear for Women</b>
                            <p className='mt-1 text-sm font-medium'>Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love!</p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'>Accessories, Jewellery, and Footwear</b>
                            <p className='mt-1 text-sm font-medium'>You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, <span className='text-[#9f2089]'>handbags</span>, belts, heels, casual footwear, <span className='text-[#9f2089]'>watches</span> , etc. With so many options, you'll be sure to find the perfect accessories for any outfit!</p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'></b>
                            <p className='mt-1 text-sm font-medium'></p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'></b>
                            <p className='mt-1 text-sm font-medium'></p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'></b>
                            <p className='mt-1 text-sm font-medium'></p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'></b>
                            <p className='mt-1 text-sm font-medium'></p>
                        </div>
                        <div className='mt-5'>
                            <b className='text-xl font-medium'></b>
                            <p className='mt-1 text-sm font-medium'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer