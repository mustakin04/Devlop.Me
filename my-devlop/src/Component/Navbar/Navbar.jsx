import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center">
          <div className="w-[20%]">
            <img src={logo} alt="" />
          </div>
          <div className="w-[80%] ">
            <ul className="flex gap-[36px] items-center justify-end font-sport font-normal text-[16px] text-black">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li className="mr-[31px]">Blog</li>
              <Button tittle="Start Project"></Button>
            </ul>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
