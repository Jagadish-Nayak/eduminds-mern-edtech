import React from 'react'
import Button from '../homepage/Button'
import { logout } from '../../services/operations/authApis';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';

const LogoutModal = ({setLogoutModal}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logOutHandler(){
    dispatch(logout(navigate));
  }
  return (
    <div className='absolute max-w-[350px] h-fit pt-2 p-6 top-[50%] left-[50%] backdrop-blur-2xl rounded-md bg-white/20 -translate-y-1/2 -translate-x-1/2'>
        
        <div className='text-[24px] text-white cursor-pointer font-extrabold translate-x-[280px]' onClick={()=>{setLogoutModal(false)}}>X</div>
        <p className='text-[22px] text-white font-semibold'>Are You sure to Log Out!</p>
        <p className='text-white opacity-50'>You have to login again to access your profile.</p>
        <div className='mt-4 flex justify-around'>
            <div onClick={logOutHandler}>
                <Button text={"Confirm"} active={true}/>
            </div>
            <div onClick={()=>{setLogoutModal(false)}}>
                <Button text={"Cancel"} active={false}/>
            </div>
        </div>
        
    </div>
  )
}

export default LogoutModal