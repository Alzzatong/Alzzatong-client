import React from 'react';

interface Props {
  id: string;
}

export default function EmailInput({ id }: Props) {
  return (
    <div className="mt-1">
      <input
        type="email"
        id={id}
        name={id}
        autoComplete="off"
        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
