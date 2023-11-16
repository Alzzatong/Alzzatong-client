import React from "react";

// itemList: 입력될 데이터 모음, groupName: 지칭명, onSelect: Dropbox에 적용될 함수
interface props {
  id: string;
  itemList: { id: string | number | boolean; title: string | number }[];
  groupName: string | null;
  onSelect: any;
}

export default function DropBox({ id, itemList, groupName, onSelect }: props) {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event);
  };

  return (
    <div className="mt-1">
      <legend className="sr-only">{groupName}</legend>
      <label
        htmlFor="select-items"
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <select
        id={id}
        name={id}
        onChange={handleSelect}
        className="block w-full bg-white rounded-md shadow-sm border-0 p-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {itemList.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
