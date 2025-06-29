import React from "react";
import Container from "../Container/Container";
import { FaArrowDown } from "react-icons/fa6";
import vactor from "../../assets/Vector.png"
import vactor1 from "../../assets/Vector (1).png"
import vactor2 from "../../assets/Vector (2).png"
import vactor3 from "../../assets/Vector (3).png"
const Developing = () => {
  return (
    <div className="bg-hero1 bg-cover bg-center h-screen w-full  pt-[130px]">
      <Container>
        <div>
          <div className="flex items-center justify-center  ">
            <div className="flex justify-center items-center w-[44px] h-[44px] border-[1px] border-black rounded-full ">
              <FaArrowDown className="text-black text-center" />
            </div>
            <p
              className="font-sans font-normal text-[18px] text-black border-[1px]
                                 border-black rounded-[100px] px-[16px] py-[6px]"
            >
              Why Choose me
            </p>
          </div>
        </div>
        <div>
            <h2 className="w-[1053px] m-auto font-sans font-bold text-[78px] text-black">
                I've been <span className="bg-black rounded-md text-white">Developing</span><br />
                 Websites since <span className="bg-black rounded-md text-white">2013</span></h2>
                 <h4 className="font-sans font-normal text-[18px] text-black w-[921px] m-auto text-center mt-[20px]">We start ev
                    ery new Client interract witn an in-depth discovery call where <br />
                    we get to khow each other and recoommend the best course of action</h4>
        </div>
        <div className="flex mt-[160px] justify-between">
            <div className="w-[200px] font-sans font-bold text-[26px] text-black">
                <p>PREVIOUSLY WORKED ON</p>
            </div>
            <div className="relative flex items-center justify-end ">
                <div className="py-[15px] px-[20px] border-[2px] border-black rounded-[100px]">
                    <img src={vactor} alt="" />
                </div>
                 <div className="py-[15px] px-[20px] rotate-[-10deg] border-[2px] ml-[20px] border-black rounded-[100px]">
                    <img src={vactor1} alt="" />
                </div>
                 <div className="py-[15px] px-[20px] border-[2px] border-black rounded-[100px]">
                    <img src={vactor2} alt="" />
                </div>
                 <div className="absolute right-[-150px] bottom-[40px] rotate-45  py-[15px] px-[20px] border-[2px] border-black rounded-[100px]">
                    <img src={vactor3} alt="" />
                </div>
                 <div className="absolute right-[0px] top-[-40px]   py-[15px] px-[40px] border-[2px] border-black rounded-[100px]">
                    <img src={vactor} alt="" />
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Developing;
