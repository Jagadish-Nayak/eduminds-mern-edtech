import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import HighlightedText from '../components/homepage/HighlightedText';
import Button from '../components/homepage/Button';
import bannerImg from "../assets/homepage/banner.mp4";
import { TypeAnimation } from 'react-type-animation';
import {data} from "../data/homepage-explore";
import { useState } from 'react';
import CreateCatalog from "../components/homepage/CreateCatalog";
import LectureSection from '../components/homepage/LectureSection';
import WorkProgress from '../components/homepage/WorkProgress'
import BecomeAnInstructor from "../components/homepage/BecomeAnInstructor";
import ReveiwsSection from '../components/homepage/ReveiwsSection';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
const Home = () => {
  //console.log(data);
  const [catalog,setCatalog]=useState(data[0]);
  console.log(catalog);
  function clickHandler(event){
    data.forEach(category=>{
      if(category.tag === event.target.value){
        setCatalog(category);
      }
    });
    console.log(catalog);
  }

  return (
    <div className='flex flex-col items-center relative overflow-x-hidden sm:text-[16px] text-[14px]'>
        <Navbar/>
        <div className='w-10/12 max-w-full flex flex-col items-center'>
                
                {/* <div className='w-fit'>
                  <button className='mt-16 text-white flex items-center bg-[#161D29] cursor-pointer py-2 px-10 font-semibold opacity-60 rounded-full justify-center  border-b-[0.5px] border-b-slate-300 hover:scale-95 transition-all duration-200v hover:border-none'>
                        <p className='mr-2'>Become an Instructor</p>
                        <FaArrowRight />
                  </button>
                </div> */}
                <div className='mt-24 text-[36px] text-center font-extrabold'>
                    <h1 className='text-white text-[40px]'>Empower Your Future with <HighlightedText text={"Coding Skills"}/></h1>
                </div>
                <p className='text-white text-center font-bold text-[18px] lg:px-28 mt-4 opacity-60'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
                <div className='flex gap-8 mt-10'>
                    <Button text={"Learn More"} linkto={"/signup"} active={true}/>
                    <Button text={"Book a Demo"} linkto={"/login"} active={false}/>
                </div>
                <div className='mt-20 bg-white'>
                  <video
                    muted loop autoPlay className='lg:h-[650px] shadow-[-5px_-5px_40px_0px_#48bb78]'>
                      <source src={bannerImg}></source>
                  </video>
                </div> 

                <div className='flex justify-between flex-col lg:flex-row flex-wrap mb-6 mt-28'>
                  <div className='lg:w-[48%] xl:w-[45%] mb-6'>
                      <div className=' text-[36px] font-extrabold'>
                          <h1 className='text-white'>Unlock your <HighlightedText text={"coding potential"}/> with our online courses.</h1>
                      </div>
                      <p className='text-white font-bold text-[18px] mt-4 opacity-60'>Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
                      <div className='flex gap-8 mt-10'>
                          <Button text={"Try it Yourself"} linkto={"/signup"} active={true}><FaArrowRight /></Button>
                          <Button text={"Learn More"} linkto={"/login"} active={false}/>
                      </div>
                  </div>
                   <div className='relative'>
                      <div className='mt-6 sm:text-[16px] text-[13px] flex border-gray-700 border-2 p-2 relative'>
                        <div className='text-white opacity-60'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p className='sm:hidden'>12</p>
                        </div>
                        <div className='lg:w-[350px] xl:w-[450px] mx-3 font-semibold'>
                          <TypeAnimation sequence={[`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`,2000, ""]}
                                                  repeat={Infinity} cursor={true}
                                                  style={{ whiteSpace: "pre-line", display: 'block',color:'yellow'}}
                                                  omitDeletionAnimation={true}/>
                        </div>
                      </div>
                      <div className='w-[360px] h-[250px] bg-yellow-700 opacity-50 rounded-[50%] blur-3xl absolute bottom-16'></div>
                   </div>
                </div>

                <div className='flex justify-between flex-col lg:flex-row-reverse flex-wrap mb-6 mt-28'>
                  <div className='lg:w-[48%] xl:w-[45%] mb-6'>
                      <div className=' text-[36px] font-extrabold'>
                          <h1 className='text-white'>Start <HighlightedText text={"coding in seconds"}/></h1>
                      </div>
                      <p className='text-white font-bold text-[18px] mt-4 opacity-60'>Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
                      <div className='flex gap-8 mt-10'>
                          <Button text={"Continue Lesson"} linkto={"/signup"} active={true}><FaArrowRight /></Button>
                          <Button text={"Learn More"} linkto={"/login"} active={false}/>
                      </div>
                  </div>

                  <div className='relative'>
                      <div className='mt-6 sm:text-[16px] text-[13px] flex border-gray-700 border-2 p-2 '>
                        <div className='text-white opacity-60'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p className='sm:hidden'>12</p>
                        </div>
                        <div className='lg:w-[350px] xl:w-[450px] mx-3 font-semibold'>
                          <TypeAnimation sequence={[`import React from "react";\nimport CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`,2000, ""]}
                                                  repeat={Infinity} cursor={true}
                                                  style={{ whiteSpace: "pre-line", display: 'block',color:'white'}}
                                                  omitDeletionAnimation={true}/>
                        </div>
                      </div> 
                      <div className='w-[360px] h-[250px] bg-cyan-400 opacity-50 rounded-[50%] blur-3xl absolute bottom-10'></div>
                  </div>
                </div>

                <div className='mt-6 text-[36px] font-extrabold'>
                    <h1 className='text-white'>Unlock the <HighlightedText text={"Power of Code"}/></h1>
                </div>
                <p className='text-white font-bold text-[18px] mt-2 opacity-60'>Learn to Build Anything You Can Imagine</p>
                <div className='bg-[#161D29] sm:block hidden rounded-full mt-5 mb-10 p-1 border-b border-gray-600'>
                  {
                    data.map((category,index)=>(
                      <button key={index} className={`py-2 px-4 md:px-7 text-white lg:mx-2 text-[14px] lg:text-[17px] font-semibold ${category.tag===catalog.tag?"bg-[#000814] rounded-full":"bg-[#161D29] rounded-full"}`} value={category.tag} onClick={clickHandler}>{category.tag}</button>
                    ))
                  }
                </div>
                <div>
                  
                    <CreateCatalog catalog={catalog}/>
                  
                </div>
        </div>

        <div className='bg-[#FAFAFA] w-full flex flex-col items-center'>
           <div className='w-10/12 max-w-full flex flex-col items-center'>
              <div className='flex sm:gap-8 gap-2 mt-10'>
                              <Button text={"Explore Full Catalog"} linkto={"/signup"} active={true}><FaArrowRight /></Button>
                              <Button text={"Learn More"} linkto={"/login"} active={false}/>
                </div>
                <div className='mt-32 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-6'>
                    <div className=' text-[34px] font-bold lg:w-[50%]'>
                            <h1 className='text-[#2C333F] inline'>Get the skills you need for a <HighlightedText text={"job that is in demand."}/></h1>
                    </div>
                    <div className='lg:w-[40%] flex flex-col gap-y-8'>
                        <p>The modern EduMinds is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                        <div className='w-36'><Button text={"Learn More"} linkto={"/login"} active={true}/></div>
                    </div>
                  
                </div>
           </div>
           <LectureSection/>
           {/* <WorkProgress/> */}
        </div> 


        <div className=' w-10/12 max-w-full flex flex-col items-center mb-12'>
               <BecomeAnInstructor/>  
               <ReveiwsSection/> 
        </div> 
        <Footer/>        
    </div>
    
  )
}

export default Home