import React, { useState } from 'react';
import Signupnav from '../components/Signupnav';
import axios from 'axios';
import backendUrl from '../backend'

const Admin = () => {
    // let testing = [
    //     {name:"name"},
    //     {age:34},
    //     address=[]
    // ]
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        detail: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        category: '',
    });

    const handleonchange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    const handleonsubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${backendUrl}/post`, productData);
            alert('Data submitted successfully');
        } catch (err) {
            console.error(err);
            alert('Error submitting data');
        }
    };

    return (
        <>
            <Signupnav />
            <div className="parent flex py-16">
                <div className='w-60 m-start h-[100vh] bg-[#353543] p-5'>
                    <section className='flex gap-5 font-bold text-red-400 flex-col'>
                        <button className='bg-white rounded-md py-1 px-3'>Upload Product</button>
                        <button className='bg-white rounded-md py-1 px-3'>View Products</button>
                    </section>
                </div>

                <div className='rightSection w-full bg-[#9f2089] text-white'>
                    <div className="parent p-10">
                        <div className='font-medium text-center text-2xl'>
                            <h1>Upload your new arrivals here</h1>
                        </div>
                        <div>
                            <form onSubmit={handleonsubmit}>
                                <div className='text-black flex flex-wrap justify-between'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="name" className='font-semibold'>Product Name :- </label>
                                        <input type="text" name='name' onChange={handleonchange} placeholder='Product Name' className='w-[20rem] outline-none border-none py-1 px-3 rounded-md text-lg'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="price" className='font-semibold'>Price :- </label>
                                        <input type="number" name='price' onChange={handleonchange} placeholder='Product Price' className='w-[20rem] outline-none border-none py-1 px-3 rounded-md text-lg'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="category" className='font-semibold'>Category :- </label>
                                        <select name="category" onChange={handleonchange} className='w-[20rem] py-1 px-3 outline-none rounded-md text-lg'>
                                            <option value="men">Men</option>
                                            <option value="women">Women</option>
                                            <option value="kids">Kids</option>
                                            <option value="electronics">Electronics</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="detail" className='font-semibold'>Product Details :- </label>
                                        <textarea name="detail" onChange={handleonchange} className='w-[20rem]'></textarea>
                                    </div>
                                </div>
                                <div className='text-black'>
                                    {/* <div className='flex flex-col'>
                                        <label htmlFor="coverimage" className='font-semibold'>Product Cover Image :- </label>
                                        <input type="text" name='coverimage' onChange={handleonchange} placeholder='Cover Image URL' className='w-[20rem] outline-none border-none py-1 px-3 rounded-md text-lg'/>
                                    </div> */}
                                    <fieldset>
                                        <div className='flex flex-col gap-3'>
                                            <label htmlFor="subimage1" className='font-semibold'>Product Sub Images :- </label>
                                            <input type="text" name='image1' onInput={handleonchange} placeholder=' Image 1' className='w-[15rem] outline-none border-none py-1 px-3 rounded-md text-lg'/>
                                            <input type="text" name='image2' onInput={handleonchange} placeholder=' Image 2' className='w-[15rem] outline-none border-none py-1 px-3 rounded-md text-lg'/>
                                            <input type="text" name='image3' onInput={handleonchange} placeholder=' Image 3' className='w-[15rem] outline-none border-none py-1 px-3 rounded-md text-lg'/>
                                            <input type="text" name='image4' onInput={handleonchange} placeholder=' Image 4' className='w-[15rem] outline-none border-none py-1 px-3 rounded-md text-lg'/>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className='text-black'>
                                    <button type='reset' className='rounded-md bg-red-400 bg-white py-1 px-3'>Reset</button>
                                    <button type='submit' className='rounded-md bg-green-400 bg-white py-1 px-3'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
