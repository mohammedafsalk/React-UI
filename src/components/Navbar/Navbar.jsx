import React from "react";
import "./navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/logo.jpg'
export default function Navbar() {
  return (
    <>
      <nav className="max-w mx-auto flex justify-between h-28 sticky">
        <div className="bg-white flex items-center  relative w-40 ">
          <h1 className="text-4xl font-bold px-10 z-10">
            <img src={logo} alt="" />
          </h1>
          <div className="skew-bg shadow-"></div>
        </div>
        <div className="flex items-center gap-4 mr-28 ">
          <button className="shadow-xl rounded-md  h-10 p-3 bg-white  flex items-center justify-evenly gap-4">
            <div className="h-8 w-8" >
              <div className="h-full">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.pexels.com/photos/19038743/pexels-photo-19038743/free-photo-of-a-person-walking-through-a-narrow-canyon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                  alt=""
                />
              </div>
            </div>
            <div className="font-bold">XYZ Enterprises Pvt Ltd</div>
          </button>
          <div className="bg-white shadow-xl h-10 w-10 rounded-md flex items-center justify-center">
            <IoIosArrowDown />
          </div>
        </div>
      </nav>
    </>
  );
}
