import React, { FC } from "react";

const JobCodeInput: FC = () => (
  <div>
    <label
      htmlFor="business-year"
      className="block text-sm font-medium text-gray-700"
    >
      업종
    </label>
    <div className="mt-1">
      <input
        type="number"
        id="business-year"
        name="business-year"
        autoComplete="number"
        className="block w-1/3 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

export default JobCodeInput;
