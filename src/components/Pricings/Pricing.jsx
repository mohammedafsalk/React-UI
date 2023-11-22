import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Pricing Card 1 */}
        <div className="bg-white rounded p-6 shadow-md  ">
          <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="text-3xl font-bold text-green-500">$19.99</div>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full">
            Subscribe
          </button>
        </div>

        {/* Pricing Card 2 */}
        <div className="bg-white rounded p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Standard Plan</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="text-3xl font-bold text-blue-500">$29.99</div>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">
            Subscribe
          </button>
        </div>

        {/* Pricing Card 3 */}
        <div className="bg-white rounded p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="text-3xl font-bold text-purple-500">$39.99</div>
          <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
