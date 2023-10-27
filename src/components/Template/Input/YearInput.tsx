import React from 'react';

interface Props {
  id: string;
  holder: string;
}

export default function YearInput({ id, holder }: Props) {
  return(  <div className="mt-1">
    <input
      type="number"
      id={id}
      name={id}
      autoComplete="off"
      min="1000"
      max="9999"
      placeholder={holder}
      className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
  );
}
