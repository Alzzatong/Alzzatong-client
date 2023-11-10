import React from "react";

interface CancelButtonProps {
  text: string;
  onClose: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClose, text }) => {
  return (
    <button
      className="h-14 w-64 relative bg-white rounded-full border border-neutral-200 text-center text-zinc-500 text-xl font-semibold leading-7  hover:bg-gray-200"
      onClick={onClose}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {text}
      </div>
    </button>
  );
};

export default CancelButton;
