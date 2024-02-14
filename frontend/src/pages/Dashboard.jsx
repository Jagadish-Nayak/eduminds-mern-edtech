import React from 'react'
import Navbar from '../components/common/Navbar';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { VscAccount } from "react-icons/vsc";
import { VscDashboard } from "react-icons/vsc";
import { VscVm } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import { VscMortarBoard } from "react-icons/vsc";
import { VscHistory } from "react-icons/vsc";
import { matchPath } from 'react-router-dom';
import { MdOutlineSettings } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useState } from 'react';
import LogoutModal from '../components/dashboard/LogoutModal';

const Dashboard = () => {
    const {loading:profileLoading,user} = useSelector((state)=>state.user);
    const {loading:authLoading,token} = useSelector((state)=>state.auth);
    const location = useLocation();
    const [logoutModal,setLogoutModal] = useState(false);
    function matchRoute(route){
        return matchPath({path:route},location.pathname);
    }
  return (

    <div className='flex min-h-screen w-screen flex-col items-center '>
        <Navbar/>
        <div className='min-h-[740px] relative flex justify-between w-full'>
            <div className='w-[200px]  min-h-[740px] bg-gray-700'>
                <div className='pt-8'>
                    {
                        token !== null && user?.accountType === 'Student' && 
                        <div className='flex flex-col text-white'>
                            <NavLink to='/dashboard/my-profile'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/my-profile')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <VscAccount  className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>My Profile</p>
                            </div>
                            </NavLink>
                            <NavLink to='/dashboard/enrolled-courses'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/enrolled-courses')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <VscMortarBoard className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>Enrolled Courses</p>
                            </div>
                            </NavLink>
                            <NavLink to='/dashboard/purchase-history'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/purchase-history')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <VscHistory className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>Purchase History</p>
                            </div>
                            </NavLink>
                        </div>
                        
                    }
                </div>
                
                <div className='pt-8'>
                    {
                        token !== null && user?.accountType === 'Instuctor' && 
                        <div className='flex flex-col text-white'>
                            <NavLink to='/dashboard/my-profile'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/my-profile')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <VscAccount  className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>My Profile</p>
                            </div>
                            </NavLink>
                            <NavLink to='/dashboard/instructor'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/instructor')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <VscDashboard className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>Dashboard</p>
                            </div>
                            </NavLink>
                            <NavLink to='/dashboard/my-courses'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/my-courses')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <VscVm className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>My Courses</p>
                            </div>
                            </NavLink>
                            <NavLink to='/dashboard/add-course'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/add-course')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <VscAdd className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>Add Course</p>
                            </div>
                            </NavLink>
                        </div>
                        
                    }
                </div>
                <div className='mt-10 w-full h-px border border-white opacity-30'></div>
                <div className=' mt-6 flex flex-col text-white'>
                            <NavLink to='/dashboard/settings'>
                            <div className={`flex items-center justify-start p-2 gap-2 ${matchRoute('/dashboard/settings')?"border-l-4 text-yellow-600 border-l-yellow-700":""}`}>
                                <MdOutlineSettings   className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>Settings</p>
                            </div>
                            </NavLink>
                            
                            <div className={`flex items-center justify-start p-2 gap-2 cursor-pointer`} onClick={()=>{
                                setLogoutModal(true);
                            }}>
                                <BiLogOut className='text-[24px] opacity-40'/>
                                <p className='font-semibold'>Log Out</p>
                            </div>
                        </div>
            </div>
            
            <Outlet/>
        </div>
        {
            logoutModal && <LogoutModal setLogoutModal={setLogoutModal}/>
        }
    </div>
    
  )
}

export default Dashboard