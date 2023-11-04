import React, { FC } from "react";

const SeniorNameInput: FC = () => (
  <div>
    <label
      htmlFor="senior-name"
      className="block text-sm font-medium text-gray-700"
    >
      성명
    </label>
    <div className="mt-1">
      <input
        type="text"
        id="senior-name"
        name="senior-name"
        autoComplete="text"
        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

export default SeniorNameInput;
