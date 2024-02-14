import React from 'react'
import Instructor from '../../assets/homepage/instructor.png';
import HighlightedText from './HighlightedText';
import { FaArrowRight } from "react-icons/fa6";
import Button from './Button';

const BecomeAnInstructor = () => {
  return (
    <div className='text-white flex flex-col  flex-wrap lg:flex-row gap-y-10 gap-x-20 mt-20'>
        <img src={Instructor} alt='Instructor' className='shadow-[-18px_-18px_3px_0px_#FFF] lg:w-[48%]'/>
        <div className='flex flex-col justify-center lg:w-[40%]'>
                    <div className=' text-[34px] font-bold'>
                            <h1 className='text-white inline'>Become an <HighlightedText text={"instructor"}/></h1>
                    </div>
                    <div className=' flex flex-col gap-y-8 mt-7'>
                        <p className='opacity-50'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                        <div className='max-w-fit'><Button text={"Start Teaching Today"} linkto={"/signup"} active={true}><FaArrowRight /></Button></div>
                    </div>
                  
        </div>
    </div>
  )
}

export default BecomeAnInstructor