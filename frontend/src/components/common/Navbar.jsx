import React, { useState } from 'react';
import Logo from '../../assets/download.png';
import { NavLink,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import Pages from '../navbar/Pages';
import { logout } from '../../services/operations/authApis';

const Navbar = () => {
    const menu = [
        {id:1,title:'Dashboard',linkto:'/dashboard/my-profile'},
        {id:2,title:'Log Out',linkto:'/'},
    ];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading:profileLoading,user} = useSelector((state)=>state.user);
  const {loading:authLoading,token} = useSelector((state)=>state.auth);
    const {cart,totalItems} = useSelector((state)=>state.cart);
    const [isOpen,setIsOpen] = useState(false);
    function logOutHandler(){
        dispatch(logout(navigate));
    }
    let value='hello'; 
  return (
    <div className='bg-[#161D29] w-full border-b border-white border-opacity-20'>
        <div className='w-10/12 max-w-full flex lg:flex-row justify-between items-center py-2 mx-auto gap-y-16 text-white'>
            <NavLink to="/">
                <img src={Logo} alt='logo' className='sm:h-8 h-7'/>
            </NavLink>
            <div className='lg:block hidden'><Pages/></div>
            <div>
                {
                    token==null && <div className='flex items-center gap-5 lg:text-[16px] text-[14px]'>
                        <div className='flex gap-2'>
                            <NavLink to='/login'>
                            <div className='sm:py-2 sm:px-3 py-2 px-1 border rounded-md border-white border-opacity-30 bg-[#161D29]'>Log in</div>
                            </NavLink>
                            <NavLink to='/signup'>
                                <div className='sm:py-2 sm:px-3 py-2 px-1 border rounded-md border-white border-opacity-30 bg-[#161D29]'>Sign up</div>
                            </NavLink>
                        </div>
                        <div className='text-[24px] lg:hidden cursor-pointer' onClick={()=>{setIsOpen(true)}}><IoMenu /></div>
                    </div>
                }
                {
                    token !== null && user?.accountType==="Instuctor" && <div className='flex gap-4'>
                        <CiSearch className='text-[28px] opacity-30 cursor-pointer'/>
                        <div className='group'>
                        <img src={user?.imageUrl} className=' h-[28px] group rounded-full cursor-pointer' alt='user'/>
                        <div className='flex flex-col group transition-all duration-200 relative z-20'>
                                                    <div className=' absolute hidden group-hover:block translate-y-[4px]  w-[24px] h-[24px] rounded-md bg-white rotate-45'></div>
                                                    <div className=' absolute hidden group-hover:block -translate-y-5 -translate-x-2/3 mt-8 w-[150px] h-fit px-4 py-4 bg-white flex flex-col rounded-md'>
                                                        {
                                                            menu.map((item)=>(
                                                                <div key={item.id} className='w-full hover:bg-[#C5C7D4] px-4 rounded-md cursor-pointer py-4 text-black'>
                                                                    {
                                                                        item.id===2?(<div onClick={logOutHandler}>{item.title}</div>):

                                                                    (<NavLink to={item.linkto}>
                                                                        <div>{item.title}</div>
                                                                    </NavLink>)
                                                                    
                                                                    }
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                        </div>
                        </div>                    
                        </div>
                }
                {
                    token !== null && user?.accountType!=="Instuctor" && <div className='flex gap-4'>
                        <CiSearch className='text-[28px] opacity-30 cursor-pointer'/>
                        <div className='relative'>
                            <IoCartOutline className='text-[28px] opacity-30 cursor-pointer'/>
                            {
                                totalItems !== 0 && <div className='absolute top-0 animate-bounce right-0 w-[13px] h-[13px] bg-green-500 font-bold flex justify-center items-center rounded-full text-[11px]'>
                                    {totalItems}
                                </div>
                            }
                        </div>
                        <div className='group'>
                        <img src={user?.imageUrl} className=' h-[28px] group rounded-full cursor-pointer' alt='user'/>
                        <div className='flex flex-col group transition-all duration-200 relative z-20'>
                                                    <div className=' absolute hidden group-hover:block translate-y-[4px]  w-[24px] h-[24px] rounded-md bg-white rotate-45'></div>
                                                    <div className=' absolute hidden group-hover:block -translate-y-5 -translate-x-2/3 mt-8 w-[150px] h-fit px-4 py-4 bg-white flex flex-col rounded-md'>
                                                        {
                                                            menu.map((item)=>(
                                                                <div key={item.id} className='w-full hover:bg-[#C5C7D4] px-4 rounded-md cursor-pointer py-4 text-black'>
                                                                    {
                                                                        item.id===2?(<div onClick={logOutHandler}>{item.title}</div>):

                                                                    (<NavLink to={item.linkto}>
                                                                        <div>{item.title}</div>
                                                                    </NavLink>)
                                                                    
                                                                    }
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                        </div>
                        </div>
                    </div>
                }
            </div>

        </div>
        {
            isOpen && <div className='relative'>
                            <div className='text-white absolute font-bold text-[20px] right-20 top-3 cursor-pointer z-30' onClick={()=>{setIsOpen(false)}}>X</div>
                            <Pages value={value}/>
                     </div>
        }
    </div>   
  )
}

export default Navbar