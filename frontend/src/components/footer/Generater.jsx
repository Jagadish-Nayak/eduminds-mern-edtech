import React from 'react'
import { NavLink } from 'react-router-dom';


const Generater = ({company}) => {
  console.log(company);  
  return (
    <div>
        {
                        company.map((data)=>(
                            <div key={data.id} className=''>
                                <h1 className='font-semibold text-[17px] text-white mt-4'>{data.name}</h1>
                                {
                                    data.links.map((cou)=>{
                                        return (
                                            <NavLink to={cou.linkto}>
                                                <p className='text-white opacity-35 text-[15px] mt-3 hover:opacity-60'>{cou.title}</p>
                                            </NavLink>
                                        );
                                    })
                                }


                            </div>
                        ))
        }
    </div>
  )
}

export default Generater