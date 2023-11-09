import React from 'react';

interface Props {
  id?: string;
  holder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NumberInput({ id, holder, value, onChange }: Props) {
  return(  <div className="mt-1">
    <input
      type="number"
      id={id}
      name={id}
      defaultValue={value}
      onBlur={onChange}
      autoComplete="off"
      placeholder={holder}
      className="block w-full p-2 rounded-md ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
  );
}
