import React from "react";
import Aside from "../Aside/Aside";
import Sidebar from "../Sidebar/Sidebar";
import Pricing from "../Pricings/Pricing";
import PricingLast from "../Pricinglast/PricingLast";

export default function Section() {
  return (
    <>
      <div className="min-h-fit  flex justify-between">
        <div className="w-[1800px] flex bg-white shadow-slate-50">
          <Sidebar />
          <div className=" p-7 flex-grow">
            <div className="font-semibold text-black text-4xl">Choose a plan thats just fine for you!</div>
            <div className="flex justify-end">
                <div className="rounded-full w-60 h-10 flex gap-2 text-center border p-2 ">
                    <div className="rounded-full w-full bg-blue-200 flex items-center justify-center">Monthly</div>
                    <div className="rounded-full w-full  flex items-center justify-center">Annualy</div>
                </div>
            </div>
            <div>
                <Pricing/>
            </div>
            <div>
              <PricingLast/>
            </div>
          </div>
        </div>
        <Aside />
      </div>
    </>
  );
}
