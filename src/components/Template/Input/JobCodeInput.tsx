import React, { ChangeEvent, useState } from "react";
import JobCodeModal from "../Modal/JobCodeModal";
import Modal from "react-modal";

interface Props {
  id: string;
  holder?: string;
  value: string;
  onChange: (jobCode: string) => void;
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
    onChange(jobCode);
    handleCloseModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "30%",
      height: "50%",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <div className="mt-1">
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        autoComplete="off"
        placeholder={holder}
        maxLength={10}
        onClick={handleOpenModal}
        className="block w-full p-2 rounded-md ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        readOnly
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="예시 모달"
      >
        <JobCodeModal
          onClose={handleCloseModal}
          onSelectJobCode={handleSelectJobCode}
        />
      </Modal>
    </div>
  );
}
