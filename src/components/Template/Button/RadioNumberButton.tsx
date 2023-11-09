import { group } from "console";
import React, { use } from "react";

interface RadioitemName {
  id: number;
  title: string | number;
}

interface Props {
  itemList: RadioitemName[];
  groupName: string;
  onChange: any;
  value: string | number; // 현재 선택된 라디오 버튼의 id

}
const RadioNumberButton: React.FC<Props> = ({ itemList, groupName, value, onChange }) => {
  return (
    <div>
      <fieldset className="mt-4">
        <legend className="sr-only">{groupName}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {itemList.map((RadioitemName) => (
            <div key={RadioitemName.id} className="flex items-center">
              <input
                name={groupName}
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onBlur={onChange}
              />
              <label
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
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
