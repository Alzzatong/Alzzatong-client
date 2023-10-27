import { group } from "console";
import React from "react";

interface RadioitemName {
  id: string;
  title: string;
}

interface Props {
  itemList: RadioitemName[];
  groupName: string;
}
const RadioButton: React.FC<Props> = ({ itemList, groupName }) => {
  return (
    <div>
      <fieldset className="mt-4">
        <legend className="sr-only">{groupName}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {itemList.map((RadioitemName) => (
            <div key={RadioitemName.id} className="flex items-center">
              <input
                id={RadioitemName.id}
                name="notification-method"
                type="radio"
                // defaultChecked={RadioitemName.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
