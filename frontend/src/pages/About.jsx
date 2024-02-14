import React from 'react'
import Navbar from '../components/common/Navbar'
import HighlightedText from '../components/homepage/HighlightedText';
import About1 from '../assets/about/about1.webp';
import About2 from '../assets/about/about2.webp';
import About3 from '../assets/about/about3.webp';
import About4 from '../assets/about/about4.png';
import { useState } from 'react';
import Footer from '../components/common/Footer';

const About = () => {
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
    <div className='flex flex-col min-h-screen w-screen items-center relative '>
        <Navbar/>
          <div className='bg-[#2C333F] w-full flex flex-col items-center'>
            <div className='w-10/12 max-w-full flex flex-col items-center'>
                <div className='lg:px-44 flex-col w-full justify-center text-center items-center'>
                    <div className='mt-16 text-[35px] leading-10 font-bold'>
                            <h1 className='text-white'>Driving Innovation in Online Education for a <HighlightedText text={"Brighter Future"}/></h1>
                    </div>
                    <p className='text-white font-medium lg:px-28 mt-3 opacity-60'>EduMinds is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                </div>
                <div className='mt-12 mb-8 grid grid-cols-3 gap-4 w-full lg:justify-around '>
                    <img src={About1} alt='about1' />
                    <img src={About2} alt='about2' />
                    <img src={About3} alt='about3' />
                </div>
            </div>
        </div>
        <div className='w-10/12  max-w-full flex flex-col items-center'>
              <div className='mt-24 lg:text-[30px] text-[20px] lg:leading-10 leading-7 font-bold text-center'>
                            <h1 className='text-white'>We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightedText text={"combines technology, "}/> <span className='text-yellow-600'>expertise,</span> and community to create an <span className='text-yellow-600'>unparalleled educational experience.</span></h1>
              </div>
        </div>
        <div className='bg-white w-full h-px opacity-30 mt-16 mb-20'></div>
        <div className='w-10/12  max-w-full flex flex-col items-center'>
              <img src={About4} className='shadow-[0px_0px_13px_2px_#f56565]'/>
                <div className=' mt-10 flex lg:flex-row flex-col justify-between items-center'>
                    <div className='flex-col w-full lg:w-[40%] justify-center items-center'>
                        <div className='mt-16 text-[35px] leading-10 text-left font-bold'>
                                <HighlightedText text={"Our Vision"}/>
                        </div>
                        <p className='text-white  font-medium mt-3 opacity-60'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                    </div>
                    <div className='flex-col w-full lg:w-[40%] justify-center items-center'>
                        <div className='mt-16 text-[35px] leading-10 text-left font-bold'>
                                <HighlightedText text={"Our Mission"}/>
                        </div>
                        <p className='text-white font-medium mt-3 opacity-60'>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                    </div>
                </div>
        </div>
        <div className='bg-[#2C333F] mt-16 w-full flex flex-col items-center'>
            <div className='w-10/12 max-w-full grid gap-y-12 my-8 lg:grid-cols-4 grid-cols-2 justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[30px] font-extrabold text-white'>5K</h1>
                  <p className='text-white opacity-30'>Active Students</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[30px] font-extrabold text-white'>10+</h1>
                  <p className='text-white opacity-30'>Mentors</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[30px] font-extrabold text-white'>200+</h1>
                  <p className='text-white opacity-30'>Courses</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[30px] font-extrabold text-white'>50+</h1>
                  <p className='text-white opacity-30'>Awards</p>
                </div>
            </div>
        </div>    
        <div className='mt-12 w-10/12  max-w-full flex flex-col items-center'>
            <h1 className='text-white font-bold text-[30px]'>Get in Touch</h1>
            <p className='text-white mt-4 opacity-30'>We'd love to here for you, Please fill out this form.</p>
            <form onSubmit={submitHandler} className='flex gap-y-3 mb-16 max-w-[500px] lg:w-[500px] text-white flex-col mt-8'>
                      <div className='flex justify-between mt-4 w-full'>
                        <label htmlFor='firstName' className='w-[48%]'>
                            <span className='text-[15px]'>First Name <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <input type='text'
                                    id='firstName' name='firstName'
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    placeholder='Enter first name'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                        <label htmlFor='lastName' className='w-[48%]'>
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
        <Footer/>
    </div>        
  )
}

export default About