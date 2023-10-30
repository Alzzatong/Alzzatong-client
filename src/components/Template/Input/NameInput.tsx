import React from "react";

interface Props {
  id: string;
  holder?: string;
}

export default function NameInput({ id, holder }: Props) {
  return (
    <div className="mt-1">
      <input
        type="text"
        id={id}
        name={id}
        autoComplete="off"
        placeholder={holder}
        className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
