import React, { useEffect, useState } from 'react';
import Signupnav from '../components/Signupnav';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserPhone } from '../redux/auth/userAction';
import backendUrl from '../backend'

const Otpvarification = () => {

    const [otp, setOtp] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const phoneForVerification = location.state?.phonenumber;
    const confirmation = location.state?.userconfirmation;
    const [otpError,setOtpError] = useState(false)
    const [result,setResult] = useState([])
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    const handleonverify = async (e) => {
        e.preventDefault();
        // console.log(phoneForVerification);
        // try {
        //     let res = await axios.post(`${backendUrl}/getuser`, phoneForVerification);
        //     console.log(result.cartItems);
        //     setResult(res.data[0])
        //     if (res.data[0]) {
        //         dispatch(setPhone(res.data[0].phone));
        //         dispatch(setCartItems(res.data[0].cartItems));
        //         dispatch(userOrders(res.data[0].orders));
        //         dispatch(setAddress({
        //             // city: res.data[0].address.city,
        //             area: res.data[0].address.area,
        //             PIN: res.data[0].address.PIN,
        //             landmark: res.data[0].address.landmark
        //         }));
        //     } else {
        //         console.log('invalid user');
        //     }
        // } catch (err) {
        //     console.log(err);
        // }
        dispatch(setUserPhone(phoneForVerification.phone))
        if(otp != '111111'){
            setOtpError(true)
        }else{
            setTimeout(() => {
            navigate('/');

        }, 2000);
        }
        
    };

    return (
        <>
            <div className='loginPageBackground'>
                <Signupnav />
                <hr />
                <div className='signupbg w-auto pb-20'>
                    <div className='md:w-[433px] sm:w-[85%] m-auto border-2 sm:mt-24 md:mt-32 bg-white signupbg'>
                        <div className=''>
                            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" className='rounded-t-lg' />
                        </div>
                        <form className='sm:p-5 md:p-10 flex gap-3 flex-col'>
                            <h1 className='md:text-xl font-medium'>Enter OTP send to {phoneForVerification.phone}</h1>
                            <Link to="/signup" className='font-medium md:text-lg text-[#9f2089] md:mb-2'>CHANGE NUMBER</Link>
                            <div className={`text-red-400 ${otpError ? 'block':'hidden'}`}>OTP is invalid</div>
                            <div className='flex gap-3  md:my-4'>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span className='sm:mx-3 md:mx-6'></span>}
                                    renderInput={(props) => <input {...props} className='outline-none border-b-2 border-[#353543] md:text-lg font-medium pb-4' />}
                                    className="flex gap-5"
                                />
                            </div>
                            <div className='text-start'>
                                <button className='text-[#9f2089] font-bold sm:text-sm md:text-lg'>RESEND OTP</button>
                            </div>
                            <button onClick={handleonverify} className='md:text-2xl font-medium p-2 mt-2 rounded-lg text-white text-center bg-[#9f2089] rounded-2 w-full'>Verify</button>
                        </form>
                        <div className='flex flex-col pb-7 items-center h-60 justify-end'>
                            <small>By continuing, you agree to Meesho's</small>
                            <small><a href="#" className='text-[#9f2089] font-medium'>Terms & Conditions </a>and  <a href="#" className='text-[#9f2089] font-medium'>Privacy Policy</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Otpvarification;
