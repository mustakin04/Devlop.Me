import React from "react";
import Container from "../Container/Container";
import Callbutton from "../Callbutton/Callbutton";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="relative bg-hero bg-cover bg-center h-screen w-full  py-[150px]">
      <Container>
        <div>
          <h1 className="w-[908px] font-sans font-bold text-[78px] text-black  ">
            Trusted{" "}
            <span className="bg-black rounded-md px-[5px] text-white">
              Partner
            </span>{" "}
            for <br />
            Your Website{" "}
            <span className="bg-black rounded-md px-[5px] text-white">
              Develop.
            </span>
          </h1>
          <div className="flex mt-[50px]">
            <div className="relative w-[30%]">
                <div className="absolute top-7 rotate-[-90deg]">
                    <p className="font-sans font-normal text-[18px] text-black mb-[38px] ">@willianmrey</p>
                    <div className="flex items-center gap-[20px]">
                        <div className="w-[20px] h-[2px] bg-black"></div>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="w-[70%]">
              <p className=" font-sans font-normal text-[18px] text-black ">
                Buildring the worlds best marketing websites for over a decade.
              </p>
              <h5 className=" font-sans font-normal text-[18px] text-black mb-[42px]">
                Your trusted paartner for strategy,design,and dev.
              </h5 >
              <Callbutton tittle="Schedule a Call" ></Callbutton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
