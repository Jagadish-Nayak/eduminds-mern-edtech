import React, { useEffect, useState } from 'react'
import { NavbarLinks } from '../../data/navbar-links';
import { NavLink, matchPath } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { apiConnector } from '../../services/connectApis';
import { catagories } from '../../services/apiList';
import Spinner from '../common/Spinner';

const Pages = ({value}) => {

    const [loading,setLoading] = useState(false);
    const [catalogLinks,setCatalogLinks] = useState([]);
    const location = useLocation();
    const fetchCatalog = async() =>{
        try{
            setLoading(true);
            const response = await apiConnector("GET",catagories);
            setCatalogLinks(response.data.data);
            console.log(catalogLinks);
            setLoading(false);
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(()=>{
        fetchCatalog();
    },[])
    function matchRoute(route){
        return matchPath({path:route},location.pathname);
    }
  return (

    <div className={`flex gap-6 ${value?"flex-col  w-[200px] absolute right-16 z-20 rounded-md  top-0 bg-[#31323344] backdrop-blur-xl text-white px-4 py-10":"flex-row"}`}>
        {
            NavbarLinks.map((data,index)=>(
            <div key={index}  className={`flex`}>
                {
                    data.title === "Catalog"?<div className={`flex justify-center items-center gap-2 group`}> 
                                                <p>Catalog </p>
                                                <IoIosArrowDown />
                                                <div className='flex flex-col group transition-all duration-200 relative z-20'>
                                                    <div className=' absolute hidden group-hover:block translate-y-3 -translate-x-7  w-[24px] h-[24px] rounded-md bg-white rotate-45'></div>
                                                    <div className=' absolute hidden group-hover:block -translate-y-3 -translate-x-2/3 mt-8 w-[300px] h-fit px-4 py-4 bg-white flex flex-col rounded-md'>
                                                        {
                                                            loading && 
                                                            <div className='text-black font-bold text-center'><Spinner/></div>  
                                                            } {
                                                             !loading &&
                                                            catalogLinks.map((item)=>(
                                                                <div key={item._id} className='w-full hover:bg-[#C5C7D4] px-4 rounded-md cursor-pointer py-4 text-black'>
                                                                    <NavLink to={`/${item.name}`}>
                                                                        <div>{item.name}</div>
                                                                    </NavLink>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>:
                                            <NavLink to={data.path}>
                                                <div className={`cursor-pointer ${matchRoute(data.path)?"text-[#FFD60A]":""}`}>{data.title}</div>
                                            </NavLink>
                }
            </div>
        ))
        }
    </div>
  )
}

export default Pages