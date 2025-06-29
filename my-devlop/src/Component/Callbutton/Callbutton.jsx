import React from "react";
import { IoIosCall } from "react-icons/io";

const Callbutton = ({ tittle }) => {
  return (
    <div className="relative inline-flex items-center border border-black py-5 pl-16 pr-4 rounded-full">
      <div className="flex items-center justify-center  absolute top-[18%] left-0  w-[38px] h-[38px]
       rounded-full border-[1px] border-[#000000]">
        <IoIosCall />
      </div>
      <h3 className="font-sport font-normal text-[16px] text-black text-end">
        {tittle}
      </h3>
    </div>
  );
};

export default Callbutton;
