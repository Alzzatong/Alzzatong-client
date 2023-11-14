import React, { useState } from "react";

interface itemListDefaultValue {
  id: string | number;
  title: string | number;
}

interface props {
  id1: string; 
  id2: string;
  value1: string | number;
  value2: string | number;
  onChange1: (value: string) => void;
  onChange2: (value: string) => void;
  itemList1: { id: string | number; title: string | number }[];
  itemList2: {
    [key: string]: { id: string | number; title: string | number }[];
  };
  groupName: string;
}

export default function MultiDropBox({
  id1, id2, value1, value2, onChange1, onChange2,
  itemList1,
  itemList2,
  groupName,
}: props) {
  const [selectedItem, setSelectedItem] = useState<string | number | null>("");
  const [secondSelectedItem, setSecondSelectedItem] = useState<any>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
    onChange1(event.target.value);
    setSecondSelectedItem(null);
  };

  const handleSecondSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSecondSelectedItem(event.currentTarget.value);
    onChange2(event.currentTarget.value);
  };

  return (
    <div className="grid grid-cols-3 gap-4 ">
      <legend className="sr-only">{groupName}</legend>
      <select
        id={id1}
        name={id1}
        value={value1}
        onChange={handleSelectChange}
        className="block w-full p-2 rounded-md ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {itemList1.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <select
        id={id2}
        name={id2}
        value={value2}
        onChange={handleSecondSelectChange}
        className="block w-full p-2 rounded-md ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {selectedItem &&
          itemList2[selectedItem].map((item: itemListDefaultValue) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
}
