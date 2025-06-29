import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({tittle}) => {
  return ( 
    <div className='relative flex  items-center border-[1px] border-[#000000] py-[20px] pl-[60px] pr-[6px] rounded-[100px]'>
        <div className='flex items-center justify-center absolute top-[18%] left-0  w-[38px] h-[38px] rounded-full border-[1px] border-[#000000]'>
         <FaArrowRightLong className='' />
        </div>
        <p className='font-sport font-normal text-[16px] text-black text-end  '>{tittle}</p>
    </div>
  )
}

export default Button