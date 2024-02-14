import React from 'react'
import Navbar from '../components/common/Navbar'
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';
import Footer from '../components/common/Footer';

const Contact = () => {
  const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",contact:"",message:""});
  function changeHandler(event){
    const {name,value}=event.target;
    setFormData((prev)=>({
      ...prev,[name]:value,
    }))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
    setFormData({firstName:"",lastName:"",email:"",contact:"",message:""});
  }
  return (
    <div className='flex flex-col items-center relative'>
        <Navbar/>
        <div className='w-10/12 max-w-full justify-between my-20 gap-y-12 flex lg:flex-row flex-col items-start'>
            <div className='bg-[#161D29] flex flex-col rounded-xl p-6 lg:p-8 gap-y-12 lg:w-[38%] w-full text-white'>
                <div className='flex flex-col '>
                    <div className='flex justify-start gap-x-3 mb-[2px] items-center '>
                        <HiChatBubbleLeftRight className='text-[24px] opacity-45'/>
                        <h1 className='text-[18px] font-bold'>Chat on us</h1>
                    </div>
                    <p className='text-[14px] opacity-45'>Our friendly team is here to help.</p>
                    <p className='text-[14px] opacity-45'>info@eduminds.com</p>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-start mb-[2px] gap-x-3 items-center '>
                        <FaEarthAmericas className='text-[22px] opacity-45'/>
                        <h1 className='text-[18px] font-bold'>Visit us</h1>
                    </div>
                    <p className='text-[14px] opacity-45'>Come and say hello at our office HQ.</p>
                    <p className='text-[14px] opacity-45'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-start mb-[2px] gap-x-3 items-center '>
                        <IoCall className='text-[23px] opacity-45'/>
                        <h1 className='text-[18px] font-bold'>Call us</h1>
                    </div>
                    <p className='text-[14px] opacity-45'>Mon - Fri From 8am to 5pm</p>
                    <p className='text-[14px] opacity-45'>+123 456 7869</p>
                </div>
            </div>
            <div className=' w-full p-6 lg:p-16 lg:w-[58%] border rounded-xl border-opacity-30 border-white flex flex-col items-start'>
            <h1 className='text-white font-bold text-[30px]'>Got a Idea? We've got the skills. Let's team up</h1>
            <p className='text-white mt-4 opacity-30'>Tell us more about yourself and what you're got in mind.</p>
            <form onSubmit={submitHandler} className='flex gap-y-3 w-full text-white flex-col mt-8'>
                      <div className='flex justify-between mt-4 w-full'>
                        <label htmlFor='firstName' className='w-[48%]'>
                            <span className='text-[15px]'>First Name </span>
                            <br/>
                            <input type='text'
                                    id='firstName' name='firstName'
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    placeholder='Enter first name'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                        <label htmlFor='lastName' className='w-[48%]'>
                            <span className='text-[15px]'>Last Name </span>
                            <br/>
                            <input type='text'
                                    id='lastName' name='lastName'
                                    value={formData.lastName}
                                    onChange={changeHandler}
                                    placeholder='Enter last name'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                    </div> 
                    <label htmlFor='email'>
                        <span className='text-[15px]'>Email Address</span>
                        <br/>
                        <input type='email'
                                id='email' name='email'
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder='Enter email address'
                                className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                    </label>
                    <label htmlFor='contact'>
                        <span className='text-[15px]'>Phone Number</span>
                        <br/>
                        <input type='number'
                                id='contact' name='contact'
                                value={formData.contact}
                                onChange={changeHandler}
                                placeholder='12345 67890'
                                className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                    </label>
                    <label htmlFor='message'>
                        <span className='text-[15px]'>Message</span>
                        <br/>
                        <textarea rows='6' cols='20'
                                id='message' name='message'
                                value={formData.message}
                                onChange={changeHandler}
                                placeholder='Enter your message here'
                                className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                    </label>
                   
                    <div className='mt-8'>
                        <button type='submit' className='cursor-pointer py-3 px-4  text-[17px] font-bold
                         bg-[#FFD60A] text-black w-full
                        rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                        flex justify-center items-center gap-2'>Send Message</button>
                    </div>
                </form>
              </div>
        </div>
        <Footer/>
    </div>        
  )
}

export default Contact;