import React from "react";
import { IoIosPower, IoMdCube } from "react-icons/io";

export default function Sidebar() {
  return (
    <>
      <div className="bg-white shadow-2xl  flex flex-col min-h-screen w-[192px] gap-6 justify-evenly ">
        <div className="flex flex-col p-5 gap-2 items-center shadow-xl ">
          <div className="">
            <img
              className="rounded-full w-28 h-28"
              src="https://images.pexels.com/photos/19038743/pexels-photo-19038743/free-photo-of-a-person-walking-through-a-narrow-canyon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Name</h3>
            <h3 className="font-semibold">Email</h3>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4 gap-3 bg-blue-200 p-4 rounded-r-lg w-4/5 shadow-2xl ">
            <div className="text-2xl text-blue-600">
              <IoMdCube />
            </div>
            <h3 className="text-black">Dashboard</h3>
          </div>

          <div className="flex items-center mb-4 gap-3 rounded-r border border-black/10 outline-black p-4 w-4/5">
            <div className="text-2xl text-blue-600">
              <IoMdCube />
            </div>
            <h3 className="text-black">Perks</h3>
          </div>

          <div className="flex items-center mb-4 gap-3 rounded-r border border-black/10 outline-black p-4 w-4/5  ">
            <div className="text-2xl text-blue-600">
              <IoMdCube />
            </div>
            <h3 className="text-black">Addons</h3>
          </div>

          <div className="flex items-center mb-4 gap-3 rounded-r border border-black/10 outline-black p-4 w-4/5  ">
            <div className="text-2xl text-blue-600">
              <IoMdCube />
            </div>
            <h3 className="text-black">FAQ</h3>
          </div>

          <div className="flex items-center mb-4 gap-3 rounded-r border border-black/10 outline-black p-4 w-4/5  ">
            <div className="text-2xl text-blue-600">
              <IoMdCube />
            </div>
            <h3 className="text-black">Support</h3>
          </div>
        </div>

        <div className="flex justify-center">
            <div className="flex gap-4 items-center text-blue-600 font-medium text-base ">
                <h3>Logout</h3>
                <div><IoIosPower /></div>
            </div>
        </div>
      </div>
    </>
  );
}
