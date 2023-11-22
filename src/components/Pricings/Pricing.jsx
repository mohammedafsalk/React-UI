import React from "react";
import {
  IoIosArrowRoundForward,
  IoIosChatboxes,
  IoIosCloudy,
  IoMdContact,
  IoMdCube,
} from "react-icons/io";

export default function Pricing() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Pricing Card 1 */}
        <div className="bg-white rounded p-4 shadow-xl w-3/4 ">
          <div>
            <h2 className="text-4xl font-semibold mb-1">Basic</h2>
            <p className="text-gray-600 mb-1 line-through">$19.99</p>
            <div className="text-5xl">
              $19.99/<span className="text-4xl">mo</span>
            </div>
            <button className="mt-4 bg-orange-300 text-black px-6 py-2 rounded-md flex items-center justify-evenly gap-4 ">
              Subscribe
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="mt-5 p-4 border-t-2 border-black/20 ">
            <div className="font-semibold" >
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
        <div className="bg-white rounded p-4 shadow-xl w-3/4">
          <div>
            <h2 className="text-4xl font-semibold mb-1">Standard</h2>
            <p className="text-gray-600 mb-1 line-through">$19.99</p>
            <div className="text-5xl">
              $19.99/<span className="text-4xl">mo</span>
            </div>
            <button className="mt-4 bg-orange-600 text-black px-6 py-2 rounded-md flex items-center justify-evenly gap-4 ">
              Subscribe
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="mt-5 p-4 border-t-2 border-black/20 ">
            <div className="font-semibold" >
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
        <div className="bg-white rounded p-4 shadow-xl   w-3/4">
          <div>
            <h2 className="text-4xl font-semibold mb-1">Premium</h2>
            <p className="text-gray-600 mb-1 line-through">$19.99</p>
            <div className="text-5xl">
              $19.99/<span className="text-4xl">mo</span>
            </div>
            <button className="mt-4 bg-purple-500 text-black px-6 py-2 rounded-md flex items-center justify-evenly gap-4 ">
              Subscribe
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="mt-5 p-4 border-t-2 border-black/20 ">
            <div className="font-semibold" >
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
