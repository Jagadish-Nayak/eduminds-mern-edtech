import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({children,text,active,linkto,type,property}) => {
  return (
    <NavLink to={linkto}>
        <button type={type} className={`cursor-pointer py-3 px-4 text-[15px] sm:text-[17px] font-bold
                         ${property} ${active?"bg-[#FFD60A] text-black":"bg-[#161D29] text-white"}
                        rounded-md text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:shadow-none transition-all duration-200 hover:scale-95
                        flex justify-center items-center gap-1 sm:gap-2`}>
            {text}
            {children}
        </button>
    </NavLink>
  )
}

export default Button