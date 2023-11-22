import React from "react";
import {
  IoIosArrowRoundForward,
  IoIosChatboxes,
  IoIosCloudy,
  IoMdContact,
} from "react-icons/io";

export default function PricingLast() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
        {/* Pricing Card 1 */}
        <div className="bg-white rounded p-4 shadow-xl w-3/4 flex justify-between ">
          <div className="flex flex-col items-start justify-center gap-3 flex-grow">
            <h2 className="text-xs  font-medium bg-yellow-300 px-3 py-1  rounded-xl ">
              Free Starter
            </h2>
            <div className="text-4xl font-bold">Free Starter</div>
            <button className="mt-4 bg-yellow-300 text-black px-6 py-2 rounded-md flex items-center justify-evenly gap-4 ">
              Get started
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="mt-5 p-4 ">
            <div className="font-semibold">
              <p>What you will get :</p>
            </div>
            <div className="flex items-center  gap-3 p-2  w-4/5 ">
              <div className="text-xl text-black">
                <IoMdContact />
              </div>
              <h3 className="text-black">Up to 25 users</h3>
            </div>
            <div className="flex items-center  gap-3 p-2  w-4/5 ">
              <div className="text-xl text-black">
                <IoIosCloudy />
              </div>
              <h3 className="text-black">Up to 25GB storage</h3>
            </div>
            <div className="flex items-center  gap-3 p-2  w-4/5 ">
              <div className="text-xl text-black">
                <IoIosChatboxes />
              </div>
              <h3 className="text-black">Email support</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded p-4 shadow-xl w-3/4 flex justify-between ">
          <div className="flex flex-col items-start justify-center gap-3 flex-grow">
            <h2 className="text-xs  font-medium bg-blue-400 px-3 py-1  rounded-xl ">
              Lets connect 
            </h2>
            <div className="text-4xl font-bold">Lets connect</div>
            <button className="mt-4 bg-blue-400 text-black px-6 py-2 rounded-md flex items-center justify-evenly gap-4 ">
              Get started
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="mt-5 p-4 ">
            <div className="font-semibold">
              <p>What you will get :</p>
            </div>
            <div className="flex items-center  gap-3 p-2  w-4/5 ">
              <div className="text-xl text-black">
                <IoMdContact />
              </div>
              <h3 className="text-black">Up to 25 users</h3>
            </div>
            <div className="flex items-center  gap-3 p-2  w-4/5 ">
              <div className="text-xl text-black">
                <IoIosCloudy />
              </div>
              <h3 className="text-black">Up to 25GB storage</h3>
            </div>
            <div className="flex items-center  gap-3 p-2  w-4/5 ">
              <div className="text-xl text-black">
                <IoIosChatboxes />
              </div>
              <h3 className="text-black">Email support</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
