import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import Button from '../homepage/Button';
import { FaEdit } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { useState } from 'react';
import { updateProfile, updateProfilePhoto } from '../../services/operations/profileApis';
import Spinner from '../common/Spinner';

const SettingProfile = () => {
  const {loading:profileLoading,user} = useSelector((state)=>state.user);
  const {loading:authLoading,token} = useSelector((state)=>state.auth);
  const [fileData,setFileData] = useState('');
  const [fileName,setFileName] = useState("");
  const [formData,setFormData] = useState({firstName:user?.firstName,lastName:user?.lastNaadditionalDetails?.dob??"",gender:user?.additionalDetails?.gender??"",contact:user?.additionalDetails?.contact??"",about:user?.additionalDetails?.about??""});
  const dispatch = useDispatch();
  function fileChangeHandler(event){
    setFileData(event.target.files[0]);
    setFileName(event.target.files[0].name);
  }
  function changeHandler(event){
    const {name,value}=event.target;
    setFormData((prev)=>({
        ...prev,[name]:value
    }))
  }
  function submitHandler(){
    console.log(formData);
    dispatch(updateProfile(formData,token));
    setFormData({firstName:user?.firstName,lastName:user?.lastName,dob:user?.additionalDetails?.dob??"",gender:user?.additionalDetails?.gender??"",contact:user?.additionalDetails?.contact??"",about:user?.additionalDetails?.about??""});
  }
  function fileSubmitHandler(event){
    
    event.preventDefault();
    const formData = new FormData();
    formData.append("file",fileData);
    console.log("formData is ",formData.file);
    dispatch(updateProfilePhoto(formData,token));
    setFileName('');
    //dispatch(updateProfilePicture(formData.file));
  }
  return (
    <div className='flex min-h-[740px] max-w-[750px] py-12 px-12 flex-col items-start mx-auto text-white'>
        {
            (authLoading || profileLoading) && (
                <div><Spinner/></div>
            )
                
            
        }
        <div className='flex max-w-full h-fit flex-col items-start text-white'>
            <h1 className='text-[22px] font-bold'>Edit Profile</h1>
            <div className='bg-[#161D29] w-full h-fit mt-6 flex items-center justify-between rounded-lg py-6 px-8'>
                <div className='flex items-center justify-start gap-x-4'>
                    <img className='w-[60px] h-[60px]  rounded-full' alt={`${user?.firstName} ${user?.lastName}`} src={user?.imageUrl}/>
                    <div className='flex flex-col w-full gap-2'>
                        <p className='font-semibold '>Change Profile Picture</p>
                        <form onSubmit={fileSubmitHandler} className='flex items-center w-full justify-around'>
                            <input type='file' name='file' className='w-[230px]' onChange={fileChangeHandler}/>
                            <button type='submit' className='cursor-pointer py-3 px-4  text-[17px] font-bold
                         bg-[#FFD60A] text-black 
                        rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                        flex justify-center items-center gap-2 '>Upload</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg-[#161D29] w-full h-fit mt-8 flex flex-col items-start justify-between rounded-lg py-6 px-8'>
              
                  <h1 className='text-[18px] font-semibold'>Profile Information</h1>
                  <form className='mt-6 flex flex-col gap-y-4 w-full text-[15px]'>
                    <div className='flex flex-col sm:flex-row gap-3 mt-4'>
                        <label htmlFor='firstName' className='sm:w-[48%] w-full'>
                            <span className='text-[15px]'>First Name </span>
                            <br/>
                            <input type='text'
                                    id='firstName' name='firstName'
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    placeholder='Enter first name'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                        <label htmlFor='lastName' className='sm:w-[48%] w-full'>
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
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <label htmlFor='dob' className='sm:w-[48%] w-full'>
                            <span className='text-[15px]'>Date Of Birth </span>
                            <br/>
                            <input type='date'
                                    id='dob' name='dob'
                                    value={formData.dob}
                                    onChange={changeHandler}
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                        <div className='sm:w-[48%] w-full'>
                            <span className='text-[15px]'>Gender </span>
                            <br/>
                            <div className='flex justify-between items-center'>
                                <label htmlFor="male">
                                        <div className={`flex text-[16px] py-[10px] px-4 `}>
                                            <input type='radio' name='gender' value='Male' checked={formData.gender==="Male"} onChange={changeHandler}  id='male'></input>
                                            Male
                                        </div>
                                </label>
                                <label htmlFor="female">
                                        <div  className=' flex text-[16px] py-[10px] px-4'>
                                            <input type='radio' name='gender' value='Female' checked={formData.gender==="Female"} onChange={changeHandler} id='female'></input>
                                            Female
                                        </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <label htmlFor='contact' className='sm:w-[48%] w-full'>
                            <span className='text-[15px]'>Contact Number </span>
                            <br/>
                            <input type='number'
                                    id='contact' name='contact'
                                    value={formData.contact}
                                    onChange={changeHandler}
                                    placeholder='Enter contact number'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                        <label htmlFor='about' className='sm:w-[48%] w-full'>
                            <span className='text-[15px]'>About </span>
                            <br/>
                            <input type='text'
                                    id='about' name='about'
                                    value={formData.about}
                                    onChange={changeHandler}
                                    placeholder='Enter Bio Data'
                                    className=' mt-1 bg-[#2C333F] placeholder:opacity-60 font-light w-full py-[10px] focus:none rounded-lg border-b border-b-gray-400 px-2' required/>
                        </label>
                    </div>
                  </form>
              
              
            </div>
            <div className='flex justify-end w-full gap-6 mt-5'>
                        <button type='submit' onClick={()=>{setFormData({firstName:user?.firstName,lastName:user?.lastName,dob:user?.additionalDetails?.dob??"",gender:user?.additionalDetails?.gender??"",contact:user?.additionalDetails?.contact??"",about:user?.additionalDetails?.about??""});}} className='cursor-pointer py-3 px-4  text-[17px] font-bold
                          bg-[#2C333F] text-white 
                        rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                        flex justify-center items-center gap-2 '>Cancel</button>
                        <button onClick={()=>{submitHandler()}} className='cursor-pointer py-3 px-4  text-[17px] font-bold
                         bg-[#FFD60A] text-black 
                        rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                        flex justify-center items-center gap-2 '>Save</button>
            </div>
        </div>
    </div>
  )
}

export default SettingProfile