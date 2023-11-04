import React, { useState } from "react";

interface itemListDefaultValue {
  id: string | number;
  title: string | number;
}

interface props {
  itemList1: { id: string | number; title: string | number }[];
  itemList2: {[key: string]: { id: string | number; title: string | number }[]};
  groupName: string;
}

export default function MultiDropBox({
  itemList1,
  itemList2,
  groupName,
}: props) {
  const [selectedItem, setSelectedItem] = useState<string | number | null>("");
  const [secondSelectedItem, setSecondSelectedItem] = useState<any>(null);
  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
    setSecondSelectedItem(null)
  };
  
  const handleSecondSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSecondSelectedItem(event.currentTarget.value);
  };

  return (
    <div>
      <legend className="sr-only">{groupName}</legend>
      <label
        htmlFor="select-items"
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <select
        id="select-item1"
        name="select-item1"
        onChange={handleSelectChange}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {itemList1.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
        <select
          id="select-item2"
          name="select-item2"
          onChange={handleSecondSelectChange}
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
          {selectedItem && itemList2[selectedItem].map((item: itemListDefaultValue) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
    </div>
  );
}
