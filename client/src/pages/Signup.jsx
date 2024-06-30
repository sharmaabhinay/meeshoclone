import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Signupnav from '../components/Signupnav';
import { RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { signInWithPhoneNumber } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUserPhone } from '../redux/auth/userAction';


const Signup = () => {
    const [downloadAppVisibility,setDownloadAppVisibility] = useState(false)
    const [webtitle,setWebtitle] = useState('Meesho')
    const [phonenumber,setPhoneNumber] = useState();
    const [userconfirmation,setUserconfirmation] = useState('')
    const [isDesabled,setIsDesebled] = useState(false)
    let navigate = useNavigate();    
    const handleonsubmit =async (e)=> {
        e.preventDefault()
        setIsDesebled(true)
        setTimeout(()=> {
            setIsDesebled(false)
        },2000)
        // console.log(phonenumber.phone)
        // try{
        //     const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
        //     const confirmation =await signInWithPhoneNumber(auth,`+91${phonenumber.phone}`,recaptcha)
        //     setUserconfirmation(confirmation)
        //     console.log('first console',confirmation)
        //     // setUserconfirmation(confirmation)
        //     console.log(userconfirmation)
        //     // console.log(recaptcha)

        // }catch(err){
        //     console.log(err)
        // }
        // console.log(userconfirmation)
        
        navigate('/signup/verification',{state:{phonenumber}})
    }
    const settingThePhone =(e)=> {
        setPhoneNumber({[e.target.name]:e.target.value})
        
    }
    
    useEffect(()=> {
        window.scroll(0,0)
        document.title = webtitle
    },[webtitle])
  return (
    <>
    <div className='loginPageBackground'>
    <Signupnav />
        <hr />
        <div className='signupbg w-auto pb-20'>
            <div className='md:w-[433px] sm:w-[85%] m-auto border-2 sm:mt-24 md:mt-32 bg-white signupbg'>
                <div className=''>
                    <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" className='rounded-t-lg'/>
                </div>
                <form className='sm:p-5 md:p-10 flex gap-3 flex-col'>
                    <h1 className='md:text-xl font-medium'>Sign Up to view your profile</h1>
                    <span className='sm:text-xs md:text-sm text-[#8b8ba3]'>Country</span>
                    <div className='flex sm:text-sm md:text-lg gap-3 -mt-2'>
                        <span className='border-b-2'> 🇮🇳 +91 </span><input type="text" placeholder='Phone Number' name='phone' onChange={(e)=> settingThePhone(e)} className='border-b-2 outline-none'/>
                    </div>
                    <div>
                        
                        <button type='submit' className='md:text-2xl text-center font-medium p-2 mt-2 rounded-lg text-white bg-[#9f2089] rounded-2 w-full' onClick={handleonsubmit}  style={{background: isDesabled ? "#FF70AB":"#9f2089", cursor:isDesabled ? 'not-allowed':'pointer'}}>Continue</button>
                    </div>
                    
                </form>
                <div className='text-center w-[70%] m-auto'>
                    <div id='recaptcha' className=''></div>
                </div>
                <div className=''></div>
                <div className='flex flex-col pb-7 items-center h-60 justify-end'>
                    <small>By cotinuing, you agree to Meesho's</small>
                    <small><a href="#" className='text-[#9f2089] font-medium'>Terms & Conditions </a>and  <a href="#" className='text-[#9f2089] font-medium'>Privacy Policy</a></small>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Signup