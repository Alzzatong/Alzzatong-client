import React, { FC } from 'react';

const BusinessYearInput: FC = () => (
  <div>
    <div>
      <label
        htmlFor="business-year"
        className="block text-sm font-medium text-gray-700"
      >
        사업년도
      </label>
      <div className="mt-1 flex justify-between">
        <input
          type="year"
          id="business-year"
          name="business-year"
          autoComplete="number"
          className="w-full p-2 rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  </div>
);

export default BusinessYearInput;
