import React, { useState } from 'react';

interface itemListValues {
  id: string | number,
  title: string | number;
}

interface props {
  itemList: itemListValues[],
  groupName: string,
}


export default function DropBox({itemList, groupName}: props) {
  const [state, setState] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.currentTarget.value);
  };

  return (
    <div>
      <legend className="sr-only">{groupName}</legend>
      <label
        htmlFor="select-item"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
      </label>
      <select
        id="select-item"
        name="select-item"
        onChange={handleSelectChange}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {itemList.map((SelectItem:itemListValues) => (
            <option>{SelectItem.title}</option>
        ))}
      </select>
    </div>
  );
}
