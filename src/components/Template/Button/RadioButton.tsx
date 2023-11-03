import { group } from "console";
import React, { use } from "react";

interface RadioitemName {
  id: string;
  title: string;
}

interface Props {
  itemList: RadioitemName[];
  groupName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
const RadioButton: React.FC<Props> = ({ itemList, groupName, onChange }) => {
  return (
    <div>
      <fieldset className="mt-4">
        <legend className="sr-only">{groupName}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {itemList.map((RadioitemName) => (
            <div key={RadioitemName.id} className="flex items-center">
              <input
                id={RadioitemName.id}
                name={groupName}
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={onChange}
              />
              <label
                htmlFor={RadioitemName.id}
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

export default RadioButton;
