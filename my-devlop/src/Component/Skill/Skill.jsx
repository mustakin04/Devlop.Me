import React from "react";
import Container from "../Container/Container";
import { FaArrowDown } from "react-icons/fa6";
import Skillname from "../Skillname/Skillname";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Skill = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="bg-black py-[90px] rounded-[40px]">
      <Container>
        <div>
          <div className="flex items-center ">
            <div className="flex justify-center items-center w-[44px] h-[44px] border-[1px] border-white rounded-full ">
              <FaArrowDown className="text-white text-center" />
            </div>
            <p
              className="font-sans font-normal text-[18px] text-white border-[1px]
                     border-white rounded-[100px] px-[16px] py-[6px]"
            >
              Why Choose me
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-[516px] font-sans font-bold text-[58px] text-white mt-[40px]">
              <h2>
                MY Extensive <br /> List of Skills
              </h2>
            </div>
            <div className=" font-sans font-normal text-[18px] text-white mt-[40px] text-end ">
              <h5>
                Buliding the worlds best marketing Your<br></br> trusted partner
                for strategy,design,and dev.
              </h5>
              <div className="w-full h-[1px] bg-white mt-[10px]"></div>
            </div>
          </div>
          <div className="">
            <Slider {...settings}>
              <Skillname
                tittle="HTML & CSS"
                tittle2="Duis aute irure dolor in reprehenderit
             in voluptate.Ut emin and minim eniam,quis"
              />
              <Skillname
                tittle="Javascript"
                tittle2="Duis aute irure dolor in reprehenderit
             in voluptate.Ut emin"
              ></Skillname>
              <Skillname
                tittle="Webflow"
                tittle2="Duis aute irure dolor in reprehendriit in vouuplate
             .Ut enim ad miim venaim wuis"
              />
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
