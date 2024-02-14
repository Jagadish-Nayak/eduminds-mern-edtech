import React from 'react'
import { BsFillAwardFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoDiamondSharp } from "react-icons/io5";
import { RiCodeBoxFill } from "react-icons/ri";
import Lecture from "../../assets/homepage/about.png";

const LectureSection = () => {
  return (
    <div className='flex flex-wrap items-center lg:items-start justify-between mt-24 mb-24 bg-[#F8F8F8] flex-col lg:flex-row gap-y-16 sm:gap-x-0 lg:gap-x-16'>
              <div className='lg:w-[40%] flex flex-col gap-y-12 lg:gap-y-0'>
                <div className='flex gap-x-6 items-center'>
                  <div className='flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full'>
                    <BsFillAwardFill className='text-[24px] text-[#118AB2] font-extrabold'/>
                  </div>
                  <div>
                    <h3 className='text-[18px] font-semibold'>Leadership</h3>
                    <p>Fully committed to the success company</p>
                  </div>
                </div>
                <div className='hidden lg:block w-[1px] border-dotted border border-gray-500 h-20 ml-[23px] opacity-30'></div>
                <div className='flex gap-x-6 items-center'>
                  <div className='flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full'>
                    <RiGraduationCapFill className='text-[24px] text-[#EF476F] font-extrabold'/>
                  </div>
                  <div>
                    <h3 className='text-[18px] font-semibold'>Responsibility</h3>
                    <p>Students will always be our top priority</p>
                  </div>
                </div>
                <div className='hidden lg:block w-[1px] border-dotted border border-gray-500 h-20 ml-[23px] opacity-30'></div>
                <div className='flex gap-x-6 items-center'>
                  <div className='flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full'>
                    <IoDiamondSharp className='text-[24px] text-[#05BF8E] font-extrabold'/>
                  </div>
                  <div>
                    <h3 className='text-[18px] font-semibold'>Flexibility</h3>
                    <p>The ability to switch is an important skills</p>
                  </div>
                </div>
                <div className='hidden lg:block w-[1px] border-dotted border border-gray-500 h-20 ml-[23px] opacity-30'></div>
                <div className='flex gap-x-6  items-center'>
                  <div className='flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full'>
                    <RiCodeBoxFill className='text-[24px] text-[#E7C009] font-extrabold'/>
                  </div>
                  <div>
                    <h3 className='text-[18px] font-semibold'>Solve the problem</h3>
                    <p>Code your way to a solution</p>
                  </div>
                </div>
              </div>
              <div className='lg:w-[54%] w-[450px] sm:w-[550px] relative'>
                <img src={Lecture} className='shadow-[-7px_-7px_13px_0px_#81e6d9]'/>
                <div className='lg:w-[560px] lg:h-[120px] bg-[#014A32] h-[150px] w-[230px] flex lg:justify-evenly justify-center flex-col gap-y-4  lg:flex-row items-center lg:relative absolute top-0 lg:-translate-y-1/2 mx-auto'>
                   <div className='flex lg:gap-x-12 gap-x-4 items-center'>
                        <h1 className='text-[28px] font-extrabold text-white'>10</h1>
                        <div className='text-[#05A77B]'>
                            <p>YEARS</p>
                            <p>EXPERIENCES</p>
                        </div>
                    </div> 
                    <div className='hidden lg:block h-10 w-[1px] border border-[#05A77B]'></div>
                    <div className='flex lg:gap-x-12 gap-x-4 items-center '>
                        <h1 className='text-[28px] font-extrabold text-white'>250</h1>
                        <div className='text-[#05A77B]'>
                            <p>TYPES OF</p>
                            <p>COURSES</p>
                        </div>
                    </div> 
                </div>
              </div>
           </div>
  )
}

export default LectureSection