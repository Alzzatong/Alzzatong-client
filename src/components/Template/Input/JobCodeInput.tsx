import React, { useState } from "react";
import JobCodeModal from "../Modal/JobCodeModal";

interface Props {
  id: string;
  holder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function JobCodeInput({ id, holder, value, onChange }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [jobCode, setJobCode] = useState(""); // 직무코드
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectJobCode = (jobCode: string) => {
    console.log(jobCode);
    setJobCode(jobCode);
    onChange({ target: { value: jobCode } } as React.ChangeEvent<HTMLInputElement>);
    handleCloseModal();
  };

  

  return (
    <div className="mt-1">
      <input
        type="text"
        id={id}
        name={id}
        value={jobCode}
        onChange={onChange}
        autoComplete="off"
        placeholder={holder}
        maxLength={10}
        onClick={handleOpenModal}
        className="block w-full p-2 rounded-md ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        readOnly
      />
      {isModalOpen && (
        <JobCodeModal 
          onClose={handleCloseModal} 
          onSelectJobCode={handleSelectJobCode} 
        />
      )}
    </div>
  );
}
