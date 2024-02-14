import React, { useState } from 'react'
import CourseBuilder from './CourseBuilder';
import CourseInfo from './CourseInfo';
import Publish from './Publish';

const AddCourse = () => {
    const [currentStep,setCurrentStep] = useState(1);
    const steps = [
        {
            id:1,
            name:"Course Information",
        },
        {
            id:2,
            name:"Course Builder",
        },
        {
            id:3,
            name:"Publish",
        },
    ]
  return (
    <div className='flex min-h-[740px] w-[700px] py-6 px-12 flex-col items-start mx-auto text-white'>
        <div className='flex w-full h-fit flex-col items-start text-white'>
            <h1 className='text-[22px] font-bold'>Add Course</h1>
            <div className='mt-4 flex w-full justify-center'>
                {
                    steps.map((item)=>(
                        <div key={item.id} className='w-full flex justify-start items-center'>
                            <p className={`w-[34px] h-[34px] flex items-center ${currentStep >= item.id?"border-yellow-600 border-2  bg-yellow-600 bg-opacity-40":"border-white border border-opacity-40 bg-[#161D29]"}  justify-center font-bold rounded-full`}>{item.id}</p>
                            {
                                item.id !== 3 && (
                                    <div className={`w-[85%] h-px ${currentStep > item.id?"border-yellow-600":"border-white"} border-dashed border`}></div>
                                )
                            }
                        </div>
                    )) 
                }
            </div>
            
                
                    {currentStep === 1 && <CourseInfo setCurrentStep={setCurrentStep}/>}
                    {currentStep === 2 && <CourseBuilder setCurrentStep={setCurrentStep}/>}
                    {currentStep === 3 && <Publish setCurrentStep={setCurrentStep}/>}
                
            
        </div>    
    </div>
  )
}

export default AddCourse