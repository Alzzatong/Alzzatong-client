import React, { useState } from 'react';

export default function CusSelectBox() {
  const [isCustomDomain, setIsCustomDomain] = useState(false);
  const [customDomain, setCustomDomain] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "직접입력") {
      setIsCustomDomain(true);
    } else {
      setIsCustomDomain(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDomain(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        이메일
      </label>
      <select
        id="location"
        name="location"
        onChange={handleSelectChange}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>naver.com</option>
        <option>hanmail.net</option>
        <option>gmail.com</option>
        <option>직접입력</option>
      </select>
      {isCustomDomain && (
        <input
          type="text"
          onChange={handleInputChange}
          value={customDomain}
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      )}
    </div>
  );
}
