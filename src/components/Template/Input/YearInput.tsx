import React from 'react';

interface Props {
  id: string;
  holder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
}

export default function YearInput({ id, holder, value, onChange, min }: Props) {
  return(  <div className="mt-1">
    <input
      type="number"
      id={id}
      name={id}
      value={value}
      autoComplete="off"
      min={min}
      max="9999"
      maxLength={4}
      onChange={onChange}
      placeholder={holder}
      className="block w-full p-2 rounded-md ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      
    />
  </div>
  );
}
