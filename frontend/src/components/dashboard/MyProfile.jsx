import React from 'react'
import {  useSelector } from 'react-redux';
import Button from '../homepage/Button';
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const {loading:profileLoading,user} = useSelector((state)=>state.user);
  const {loading:authLoading,token} = useSelector((state)=>state.auth);
  return (
    <div className='flex min-h-[740px] w-[700px] py-12 px-12 flex-col items-start mx-auto text-white'>
        <div className='flex w-full h-fit flex-col items-start text-white'>
            <h1 className='text-[22px] font-bold'>My Profile</h1>
            <div className='bg-[#161D29] w-full h-fit mt-6 flex items-center justify-between rounded-lg py-6 px-8'>
                <div className='flex items-center gap-x-4'>
                    <img className='w-[60px]  rounded-full' alt={`${user?.firstName} ${user?.lastName}`} src={user?.imageUrl}/>
                    <div className='flex flex-col'>
                        <p className='font-semibold '>{`${user?.firstName} ${user?.lastName}`}</p>
                        <p className='text-[15px] opacity-40'>{user?.email}</p>
                    </div>
                </div>
                <Button text={"Edit"} active={true} linkto={"/dashboard/settings"}><FaEdit  /></Button>
            </div>
            <div className='bg-[#161D29] w-full h-fit mt-8 flex items-start justify-between rounded-lg py-6 px-8'>
              <div className='flex flex-col'>
                  <h1 className='text-[18px] font-semibold'>About</h1>
                  <p className='mt-8 opacity-35'>{user?.profileDetails ?? "Write Something About Yourself."}</p>
              </div>
              <Button text={"Edit"} active={true} linkto={"/dashboard/settings"}><FaEdit  /></Button>
            </div>
            <div className='bg-[#161D29] w-full h-fit mt-8 flex items-start justify-between rounded-lg py-6 px-8'>
              <div className='flex flex-col gap-y-6'>
                  <h1 className='text-[18px] font-semibold'>Personal Details</h1>
                  <div className='grid grid-cols-2 gap-y-5 gap-x-16 text-[14px]'>
                      <div>
                          <p className='text-[14px] opacity-40'>First Name</p>
                          <p>{user?.firstName}</p>
                      </div>
                      <div>
                          <p className='text-[14px] opacity-40'>Last Name</p>
                          <p>{user?.lastName}</p>
                      </div>
                      <div>
                          <p className='text-[14px] opacity-40'>Email</p>
                          <p>{user?.email}</p>
                      </div>
                      <div>
                          <p className='text-[14px] opacity-40'>Phone Number</p>
                          <p>{user?.contact ?? "Add Contact"}</p>
                      </div>
                      <div>
                          <p className='text-[14px] opacity-40'>Gender</p>
                          <p>{user?.profileDetails ?? "Add Gender"}</p>
                      </div>
                      <div>
                          <p className='text-[14px] opacity-40'>Date Of Birth</p>
                          <p>{user?.profileDetails ?? "Add DOB"}</p>
                      </div>
                  </div>
              </div>
              <Button text={"Edit"} active={true} linkto={"/dashboard/settings"}><FaEdit  /></Button>
            </div>
        </div>
    </div>
  )
}

export default MyProfile