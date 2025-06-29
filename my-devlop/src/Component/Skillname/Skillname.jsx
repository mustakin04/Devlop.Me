import React from 'react'
import reacticon from "../../assets/reacticon.png"

const Skillname = ({tittle,tittle2}) => {
  return (
    <div className='p-[20px] bg-[#ffffff1d] w-[400px] h-[365px] rounded-[50px] mt-[70px]'>
        <div className='mt-[48px]'>
            <img src={reacticon} alt="" />
        </div>
        <h2 className='font-bold font-sans text-[26px] text-white my-[30px]'>{tittle}</h2>
        <p className='w-[230px] font-normal font-sans text-[16px] text-white'>{tittle2}</p>
    </div>
  )
}

export default Skillname