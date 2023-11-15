import { group } from "console";
import React, { use } from "react";

interface RadioitemName {
  id: string | number;
  title: string | number;
}

interface Props {
  id: string;
  itemList: RadioitemName[];
  groupName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number; // 현재 선택된 라디오 버튼의 id
}
const RadioNumberButton: React.FC<Props> = ({
  id,
  itemList,
  groupName,
  value,
  onChange,
}) => {
  return (
    <div>
      <fieldset className="mt-4">
        <legend className="sr-only">{groupName}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {itemList.map((RadioitemName) => (
            <div key={RadioitemName.id} className="flex items-center">
              <input
                id={id}
                name={groupName}
                type="radio"
                value={RadioitemName.id}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onBlur={onChange}
              />
              <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {RadioitemName.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default RadioNumberButton;
