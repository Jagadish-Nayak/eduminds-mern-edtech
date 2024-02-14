import React, { useEffect } from 'react'
import { useState } from 'react';
import { MdPeopleAlt } from "react-icons/md";
import { ImTree } from "react-icons/im";

const CreateCatalog = ({catalog}) => {
    
    const [active,setActive] = useState(catalog.courses[0].heading);
    useEffect(()=>{
        setActive(catalog.courses[0].heading);
    },[catalog]);
  return (
    <div className='flex lg:flex-row gap-16 flex-wrap justify-center items-center mt-8 mb-8'>
        {
            catalog.courses.map((course)=>{
                return (
                    <div className={`flex flex-col px-4 py-6 w-[360px] h-[290px] ${active===course.heading?"bg-white text-black shadow-[13px_13px_0px_0px_#f6e05e]":"text-white bg-[#161D29]"}`} onClick={()=>setActive(course.heading)}>
                       <h3 className='font-bold text-[18px]'>{course.heading}</h3> 
                       <p className='mt-4 opacity-40'>{course.description}</p>
                       
                       <div className={`mt-16 h-[1px] border-dashed ${active===course.heading?"border-black":"border-white opacity-40"} border`}></div>
                       <div className='flex justify-between mt-3'>
                            <div className={`flex justify-center gap-x-1 items-center ${active===course.heading?"text-green-800":"text-white opacity-40"} font-semibold`}>
                                <MdPeopleAlt/>
                                <p>{course.level}</p>
                            </div>
                            <div className={`flex justify-center gap-x-1 items-center ${active===course.heading?"text-green-800":"text-white opacity-40"} font-semibold`}>
                                <ImTree />
                                <p>{course.lessionNumber} Lesson</p>
                            </div>
                       </div>
                        
                    </div>
                )

            
            })
        }
    </div>
  )
}

export default CreateCatalog