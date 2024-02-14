import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../../components/common/Navbar'
import { useState } from 'react';
import Background from '../../assets/login/background.png';
import LoginImg from '../../assets/login/login.webp';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { login } from '../../services/operations/authApis';
import { useDispatch } from 'react-redux';

const Signin = () => {
    const [fillPassword,setFillPassword] = useState(false);
    const [formData,setFormData] = useState({email:'',password:''});
    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setFormData((prev)=>({
            ...prev,[name]:value
        }))
    }
    const dispatch = useDispatch();
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({email:"",password:""});
        dispatch(login(formData.email,formData.password));
    }
  return (
    <div className='flex  flex-col min-h-screen text-white items-center relative'>
        <Navbar/>
        <div className='w-10/12 max-w-full flex gap-20 lg:justify-between flex-col-reverse items-center lg:flex-row lg:my-auto mt-10 mb-12'>
            <div className='lg:w-[40%] max-w-full px-4'>
                <h1 className='text-[30px] font-semibold'>Welcome Back</h1>
                <p className='text-[18px] mt-3 font-light opacity-55'>Build skills for today, tomorrow, and beyond.</p>
                <p className='italic mt-2 font-serif font-bold text-cyan-500'>Education to future-proof your career.</p>
                <form onSubmit={submitHandler} className='flex flex-col mt-8'>
                    <label htmlFor='email'>
                        <span className='text-[15px]'>Email Address <sup className='text-red-500'>*</sup></span>
                        <br/>
                        <input type='email'
                                id='email' name='email'
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder='Enter email address'
                                className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                    </label>
                    <label htmlFor='password' className='mt-4'>
                         <span className=' text-[15px]'>Password<sup className='text-red-500'>*</sup></span>
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
                    <NavLink to='/forgot-password'><div className='font-sans text-[14px] text-right text-cyan-600'>Forgot Password</div></NavLink>
                    <div className='mt-8'>
                        <button type='submit' className='cursor-pointer py-3 px-4  text-[17px] font-bold
                         bg-[#FFD60A] text-black w-full
                        rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                        flex justify-center items-center gap-2'>Sign In</button>
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

export default Signin