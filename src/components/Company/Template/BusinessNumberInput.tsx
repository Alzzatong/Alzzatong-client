import React, { FC } from "react";

const BusinessNumberInput: FC = () => (
  <div>
    <div className="mt-1 flex justify-between">
      <input
        type="number"
        id="business-number-1"
        name="business-number-1"
        autoComplete="number"
        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <div className="w-auto flex items-center justify-center mx-2">-</div>
      <input
        type="number"
        id="business-number-2"
        name="business-number-2"
        autoComplete="number"
        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <div className="w-auto flex items-center justify-center mx-2">-</div>
      <input
        type="number"
        id="business-number-3"
        name="business-number-3"
        autoComplete="number"
        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />

    </div>
    
  </div>
);

export default BusinessNumberInput;
