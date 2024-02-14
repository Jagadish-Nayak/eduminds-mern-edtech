import React from 'react'
import HighlightedText from './HighlightedText'
import Progress from '../../assets/homepage/progress.png';
import Compare from '../../assets/homepage/compare.svg';
import Plan from '../../assets/homepage/plan_your_lessons.svg';
import Button from './Button';

const WorkProgress = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='mt-16 text-center text-[36px] font-semibold'>
                    <h1>Your swiss knife for <HighlightedText text={"learning any language"}/></h1>
        </div>
        <p className='text-center text-[18px] lg:px-28 mt-4 opacity-60'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
        <div className='mt-8 lg:flex relative'>
          <img src={Progress} alt='progress' className='lg:absolute -left-2/3'/>
          <img src={Compare} alt='compare'/>
          <img src={Plan} alt='plan' className='lg:absolute left-2/3'/>
        </div>
        <div className='w-36 mb-8'><Button text={"Learn More"} linkto={"/login"} active={true}/></div>
    </div>
  )
}

export default WorkProgress