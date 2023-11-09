import React, { ChangeEvent, useEffect, useState } from "react";
import {
  majorJobCode,
  intermediateJobCode,
  minorJobCode,
  detailedJobCode,
  itemListValues,
} from "@/components/Dummy/JobCode"; // 이전에 제공한 JobCode 데이터를 가져옵니다.
import "@/app/globals.css";
import LabelText from "../LabelText/LabelText";

interface Props {
  onClose: () => void;
  onSelectJobCode: (jobCode: string) => void;
}

export default function JobCodeModal({ onClose, onSelectJobCode }: Props) {
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedIntermediate, setSelectedIntermediate] = useState("");
  const [selectedMinor, setSelectedMinor] = useState("");
  const [selectedDetailed, setSelectedDetailed] = useState("");
  const [filteredIntermediate, setFilteredIntermediate] = useState<
    itemListValues[]
  >([]);
  const [filteredMinor, setFilteredMinor] = useState<itemListValues[]>([]);
  const [filteredDetailed, setFilteredDetailed] = useState<itemListValues[]>(
    []
  );

  useEffect(() => {
    if (selectedMajor) {
      setFilteredIntermediate(
        filterOptions(intermediateJobCode, selectedMajor)
      );
    } else {
      setFilteredIntermediate([]);
    }
    console.log(filteredIntermediate);
  }, [selectedMajor]);

  useEffect(() => {
    if (selectedIntermediate) {
      setFilteredMinor(filterOptions(minorJobCode, selectedIntermediate));
    } else {
      setFilteredMinor([]);
    }
  }, [selectedIntermediate]);

  useEffect(() => {
    if (selectedMinor) {
      setFilteredDetailed(filterOptions(detailedJobCode, selectedMinor));
    } else {
      setFilteredDetailed([]);
    }
  }, [selectedMinor]);

  const filterOptions = (
    options: itemListValues[],
    prefix: string
  ): itemListValues[] => {
    return options.filter((option) => {
      if (option.id.startsWith(prefix) || option.id === "업종코드") {
        return true;
      }
      return false;
    });
  };

  const handleMajorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMajor(event.target.value);
    setSelectedIntermediate("");
    setSelectedMinor("");
    setSelectedDetailed("");
  };

  const handleIntermediateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedIntermediate(event.target.value);
    setSelectedMinor("");
    setSelectedDetailed("");
  };

  const handleMinorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinor(event.target.value);
    setSelectedDetailed("");
  };

  const handleDetailedChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDetailed(event.target.value);
    onSelectJobCode(event.target.value); // 선택 완료시 상위 컴포넌트에 값 전달
    onClose(); // 선택 완료시 모달 닫기
  };

  return (
    <div id="modal" className="z-50">
      {/* <div className="flex flex-col border w-[24rem] h-[20rem] border-gray6 shadow-sm bg-white sm:w-[30rem] sm:h-[20rem] rounded-lg p-6  gap-y-[4px] overflow-auto"> */}
      <div className="mt-5">
        <LabelText text="대분류" />
        <select
          id="major"
          name="major"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={selectedMajor}
          onChange={handleMajorChange}
        >
          {majorJobCode.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id} : {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <LabelText text="중분류" />
        <select
          id="intermediate"
          name="intermediate"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={selectedIntermediate}
          onChange={handleIntermediateChange}
        >
          {filteredIntermediate.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id} : {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <LabelText text="소분류" />
        <select
          id="minor"
          name="minor"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={selectedMinor}
          onChange={handleMinorChange}
        >
          {filteredMinor.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id} : {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <LabelText text="세분류" />
        <select
          id="detailed"
          name="detailed"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={selectedDetailed}
          onChange={handleDetailedChange}
        >
          {filteredDetailed.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id} : {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 flex justify-center">
        <button
          className=" h-14 w-64 relative bg-white rounded-full border border-neutral-200 text-center text-zinc-500 text-xl font-semibold leading-7  hover:bg-gray-200"
          onClick={onClose}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            취소
          </div>
        </button>
      </div>
    </div>
  );
}
