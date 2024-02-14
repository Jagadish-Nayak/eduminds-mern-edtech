import React from 'react'
import Navbar from '../../components/common/Navbar';
import OTPInput from 'react-otp-input';
import { useState
 } from 'react';
 import { FaArrowLeftLong } from "react-icons/fa6";
 import { RxCounterClockwiseClock } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../services/operations/authApis';

const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    const {signupData} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(otp);
        console.log(signupData);
        const {firstName,lastName,email,password,confirmPassword,accountType}=signupData;
        dispatch(signup(firstName,lastName,
            email,password,confirmPassword,
            accountType,otp,navigate));
    }
  return (
    <div className='flex h-screen w-screen flex-col items-center relative'>
        <Navbar/>
        <div className='w-10/12 max-w-full flex flex-col my-auto items-center text-white'>
           <div className=' w-[450px] h-fit flex flex-col items-start'>
            <h1 className='text-[30px] font-semibold'>Verify Email</h1>
            <p className='text-[18px] mt-2 font-light mb-2 opacity-55'>A verification code has been sent to you. Enter the code below</p>
            <form onSubmit={submitHandler}>
                <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span className='mx-4'></span>}
                        renderInput={(props) => <div className='w-12 h-12 bg-[#161D29] text-center felx items-center justify-center text-white border-b-gray-600 border-b rounded-md'><input {...props} placeholder='-' className='w-full text-[26px] pt-1 bg-[#161D29]' /></div>}
                        />
                    <div className='mt-8  w-full'>
                                <button type='submit' className='cursor-pointer py-3 px-4  text-[17px] font-bold
                                bg-[#FFD60A] text-black w-full
                                rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                                flex justify-center items-center gap-2'>Verify Email</button>
                    </div>    
            </form>
                <div className='flex cursor-pointer items-center mt-4 justify-between w-full' onClick={()=>{navigate(-1)}}>
                    <div className='flex items-center gap-2'>
                            <FaArrowLeftLong />
                            <p>Back To Signup</p>
                    </div>
                    <div className='flex items-center gap-2 text-cyan-600'>
                            <RxCounterClockwiseClock />
                            <p>Resend It</p>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default VerifyEmail