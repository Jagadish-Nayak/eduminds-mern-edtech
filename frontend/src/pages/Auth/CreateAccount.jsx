import React from 'react'
import Navbar from '../../components/common/Navbar';
import { useState } from 'react';
import Background from '../../assets/login/background.png';
import LoginImg from '../../assets/login/signup.webp';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '../../slices/authSlice';
import toast from 'react-hot-toast';
import { sendOTP } from '../../services/operations/authApis';

const CreateAccount = () => {
    const navigate = useNavigate();
    const signupData = useSelector((state)=>(state.auth));
    const dispatch = useDispatch();
    const [fillPassword,setFillPassword] = useState(false);
    const [fillConfirmPassword,setFillConfirmPassword] = useState(false);
    const [formData,setFormData] = useState({firstName:"",lastName:"" ,email:'',password:'',confirmPassword:"",accountType:'Student'});
    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setFormData((prev)=>({
            ...prev,[name]:value
        }));
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error('password does not match with confirm password');
            return;
        }
        dispatch(setSignupData(formData));
        console.log('signupData is ',signupData);
        setFormData({firstName:"",lastName:"" ,email:"",password:"",confirmPassword:"",accountType:"Student"});
        dispatch(sendOTP(formData.email,navigate));
    }
  return (
    <div className='flex  flex-col min-h-screen text-white items-center relative'>
        <Navbar/>
        <div className='w-10/12 max-w-full sm:px-20 md:px-32 lg:px-0 flex gap-20 lg:justify-between flex-col-reverse items-center lg:flex-row lg:my-auto mt-10 mb-12'>
            <div className='lg:w-[40%] max-w-full px-4'>
                <h1 className='text-[30px] font-semibold'>Join the millions learning to code with StudyNotion for free</h1>
                <p className='text-[18px] mt-3 font-light opacity-55'>Build skills for today, tomorrow, and beyond.</p>
                <p className='italic mt-2 font-serif font-bold text-cyan-500'>Education to future-proof your career.</p>
                <form onSubmit={submitHandler} className='flex flex-col mt-8'>
                    <div className='bg-[#161D29] flex rounded-full p-1 w-fit border-b border-gray-600'>
                        <label htmlFor="student">
                            <div className={`py-2 px-4 ${formData.accountType==='Student'?"bg-[#000814] rounded-full":"bg-[#161D29] rounded-full"}`}>
                                <input type='radio' name='accountType' value='Student' checked={formData.accountType==="Student"} onChange={changeHandler} className='hidden' id='student'></input>
                                Student
                            </div>
                        </label>
                        <label htmlFor="Instuctor">
                            <div  className={`py-2 px-4 ${formData.accountType==='Instuctor'?"bg-[#000814] rounded-full":"bg-[#161D29] rounded-full"}`}>
                                <input type='radio' name='accountType' value='Instuctor' checked={formData.accountType==="Instuctor"} onChange={changeHandler} className='hidden' id='Instuctor'></input>
                                Instuctor
                            </div>
                        </label>
                    </div>
                    <div className='flex gap-3 mt-4'>
                        <label htmlFor='firstName'>
                            <span className='text-[15px]'>First Name <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <input type='text'
                                    id='firstName' name='firstName'
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    placeholder='Enter first name'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                        <label htmlFor='lastName'>
                            <span className='text-[15px]'>Last Name <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <input type='text'
                                    id='lastName' name='lastName'
                                    value={formData.lastName}
                                    onChange={changeHandler}
                                    placeholder='Enter last name'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                    </div>    
                    <label htmlFor='email' className='mt-4'>
                        <span className='text-[15px]'>Email Address <sup className='text-red-500'>*</sup></span>
                        <br/>
                        <input type='email'
                                id='email' name='email'
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder='Enter email address'
                                className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                    </label>
                    <div className='flex gap-3 mt-4'>
                        <label htmlFor='password'>
                            <span className=' text-[15px]'>Create Password<sup className='text-red-500'>*</sup></span>
                            <br/>
                            <div className='relative'>
                                <input type={`${fillPassword?"text":"password"}`}
                                        id='password' name='password'
                                        value={formData.password}
                                        onChange={changeHandler}
                                        className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2'
                                        placeholder='Enter Password' required/>
                                    {
                                        !fillPassword &&  <IoEyeOutline className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[24px] text-white opacity-50' onClick={()=>{setFillPassword(true)}}/> 
                                    }  
                                    {
                                        fillPassword &&  <IoEyeOffOutline className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[24px] text-white opacity-50' onClick={()=>{setFillPassword(false)}}/> 
                                    }         
                            </div>
                        </label>
                        <label htmlFor='confirmPassword'>
                            <span className=' text-[15px]'>Confirm Password<sup className='text-red-500'>*</sup></span>
                            <br/>
                            <div className='relative'>
                                <input type={`${fillConfirmPassword?"text":"password"}`}
                                        id='confirmPassword' name='confirmPassword'
                                        value={formData.confirmPassword}
                                        onChange={changeHandler}
                                        className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2'
                                        placeholder='Confirm Password' required/>
                                    {
                                        !fillConfirmPassword &&  <IoEyeOutline className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[24px] text-white opacity-50' onClick={()=>{setFillConfirmPassword(true)}}/> 
                                    }  
                                    {
                                        fillConfirmPassword &&  <IoEyeOffOutline className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[24px] text-white opacity-50' onClick={()=>{setFillConfirmPassword(false)}}/> 
                                    }         
                            </div>
                        </label>
                    </div>
                    <div className='mt-10'>
                    <button type='submit' className='cursor-pointer py-3 px-4  text-[17px] font-bold
                         bg-[#FFD60A] text-black w-full
                        rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                        flex justify-center items-center gap-2 '>Create Account</button>
                    </div>
                </form>
            </div>
            <div className='relative max-w-[450px]'>
                <img src={LoginImg} alt='login' className='absolute bottom-4 right-4'/>
                <img src={Background} alt='background' className=''/>
            </div>
        </div>
    </div> 
  )
}

export default CreateAccount