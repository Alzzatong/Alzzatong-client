import React from "react";

interface Props {
  id?: string;
  holder?: string;
  defaultValue: string;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UncontrolledStringInput({ id , holder, defaultValue, onBlur }: Props) {
  return (
    <div className="mt-1" id={id}>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={holder}
        defaultValue={defaultValue}
        onBlur={onBlur}
        autoComplete="off"
        className="block w-full p-2 rounded-md ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
