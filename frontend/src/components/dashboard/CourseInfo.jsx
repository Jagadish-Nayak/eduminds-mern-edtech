import React from 'react'
import { useState } from 'react';
import { apiConnector } from '../../services/connectApis';
import { catagories } from '../../services/apiList';
import { useEffect } from 'react';
import Spinner from '../common/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../services/operations/courseApis';

const CourseInfo = ({setCurrentStep}) => {
    const [fileData,setFileData] = useState('');
    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth);
    const [loading,setLoading] = useState(false);
    const [catalogLinks,setCatalogLinks] = useState([]);
    const fetchCatalog = async() =>{
        try{
            setLoading(true);
            const response = await apiConnector("GET",catagories);
            //console.log(response.data);
            setCatalogLinks(response.data.data);
            console.log('catalog links are ',catalogLinks[0]);
            setLoading(false);
        }catch(err){
            console.log(err.message);
        }
    }

    function fileChangeHandler(event){
        setFileData(event.target.files[0]);
    }
    useEffect(()=>{
        fetchCatalog();
    },[])
    const [formData,setFormData] = useState({title:'',desc:'',price:'',category:catalogLinks[0],whatyoulearn:''});
    function changeHandler(event){
        const {name,value} = event.target;
        setFormData((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        const thumbnail = new FormData();
        thumbnail.append("file",fileData);
        dispatch(createCourse(formData.title,formData.desc,formData.price,formData.category,formData.whatyoulearn,thumbnail,setLoading,setCurrentStep,token))
        console.log(formData);
        setFileData('');
        setFormData({title:'',desc:'',price:'',category:'',whatyoulearn:''});
    }
  return (
    <>
    {
        loading && <Spinner/>
    } 
    <div className='bg-[#161D29] w-full h-fit mt-6 flex items-center justify-between rounded-lg py-6 px-8'>
        <form className='w-full' onSubmit={submitHandler}>
            <label htmlFor='title' className='w-full mt-4'>
                            <span className='text-[15px]'>Course Title  <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <input type='text'
                                    id='title' name='title'
                                    value={formData.title}
                                    onChange={changeHandler}
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] mb-4 focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
            </label>
            <label htmlFor='desc' className='w-full'>
                            <span className='text-[15px]'>Course Short Desc  <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <textarea rows='4'
                                    id='desc' name='desc'
                                    value={formData.desc}
                                    onChange={changeHandler}
                                    className=' mt-1 bg-[#2C333F] mb-4 placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
            </label>
            <label htmlFor='price' className='w-full'>
                            <span className='text-[15px]'>Course Price  <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <input type='number'
                                    id='price' name='price'
                                    value={formData.price}
                                    onChange={changeHandler}
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] mb-4 focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
            </label>
            <label htmlFor='category' className='w-full'>
                            <span className='text-[15px]'>Course Category  <sup className='text-red-500'>*</sup></span>
                            <br/>
                <select id="category" className='mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] mb-4 focus:none rounded-lg border-b border-b-gray-400 px-2'
                value={formData.category}
                onChange={changeHandler}
                name="category">
                    {
                        catalogLinks.map((item)=>(
                            <option key={item._id}>{item.name}</option>
                        ))
                    }
                </select>
            </label>
            <label htmlFor='thumbnail' className='w-full'>
                            <span className='text-[15px]'>Course Thumbnail Image  <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <input type='file' name='thumbnail' className='mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] mb-4 focus:none rounded-lg border-b border-b-gray-400 px-2' onChange={fileChangeHandler}/>
            </label>
            <label htmlFor='whatyoulearn' className='w-full'>
                            <span className='text-[15px]'>Benefits of the Course  <sup className='text-red-500'>*</sup></span>
                            <br/>
                            <textarea rows='5'
                                    id='whatyoulearn' name='whatyoulearn'
                                    value={formData.whatyoulearn}
                                    onChange={changeHandler}
                                    className=' mt-1 bg-[#2C333F] mb-4 placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
            </label>
            
            <div className='flex justify-end'>
                <button type='submit' className='cursor-pointer py-3 px-4  text-[18px] font-bold
                                bg-[#FFD60A] text-black
                                rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                                flex justify-center items-center gap-2'>Next</button>        
            </div>
        </form>
    </div>
    </>
  )
}

export default CourseInfo