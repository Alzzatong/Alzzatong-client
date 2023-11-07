import React, { Fragment, useEffect, useState } from "react";
import {
  majorJobCode,
  intermediateJobCode,
  minorJobCode,
  detailedJobCode,
  itemListValues,
} from "@/components/Dummy/JobCode"; // 이전에 제공한 JobCode 데이터를 가져옵니다.
// import DropBox from "../SelectBox/DropBox";
// import MultiDropBox from "../SelectBox/MultiDropBox";
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
  const [filteredIntermediate, setFilteredIntermediate] = useState<itemListValues[]>([]);
  const [filteredMinor, setFilteredMinor] = useState< itemListValues[]>([]);
  const [filteredDetailed, setFilteredDetailed] = useState< itemListValues[]>([]);

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
      if (option.id.startsWith(prefix) || option.id === "직무코드") {
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

  // 모달 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as Element).id === "modal") {
        onClose();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div id="modal" className="w-full">
      <div id="modal-content">
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
      <div>
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
      <div>
        <LabelText text="소분류" />
        <select
            id = "minor"
            name = "minor"
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
      <div>
        <LabelText text="세분류" />
        <select
            id = "detailed"
            name = "detailed"
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
    </div>
  );
}
