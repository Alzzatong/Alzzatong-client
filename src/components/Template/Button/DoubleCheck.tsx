import { on } from 'events';
import React from 'react';

interface Props {
  onAlert: () => void;
}

export default function DoubleCheckButton({onAlert}: Props) {
  return (
    <button
      type="button"
      className="w-2/6 rounded bg-white px-2 py-1 text-sm font-normal text-blue-400 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-gray-100"
      onClick={onAlert}
    >
      중복 확인
    </button>
  );
}
