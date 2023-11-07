import NameInput from "@/components/Template/Input/NameInput";
import StringInput from "@/components/Template/Input/StringInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import React, { ChangeEvent, useEffect, useState } from "react";
import EmployJobButton from "./EmployJobButton";
import NumberInput from "@/components/Template/Input/NumberInput";
import { RecruitData, initialRecruitData } from "../Interface/CompanyInterface";
import Loading from "@/components/Loading";

interface JobContentProps {
  index: number;
  handleJobContent: (index: number, recruit: RecruitData) => void;
  removeItem: (index: number) => void;
  recruitData?: RecruitData;
}
function JobContent(props: JobContentProps) {
  const { index, removeItem, handleJobContent, recruitData } = props;
  const [recruit, setRecruit] = useState<RecruitData>(initialRecruitData);

  // console.log("recruitData: ", recruitData);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedRecruit = {
      ...recruit,
      [e.target.id]: e.target.value,
    };
    setRecruit(updatedRecruit);
    handleJobContent(index, updatedRecruit);
  };
  //recruitData가 없으면
  console.log("recruitData: ", recruitData);
  if (recruitData == undefined) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="mt-10 md-4">
          <EmployJobButton id={index} removeItem={removeItem}></EmployJobButton>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
          <div>
            <LabelText text={`구인직무${index + 1}`} />
            <NameInput
              id="job_type"
              value={recruitData.job_type}
              holder={recruitData?.job_type}
              onChange={handleChange}
            ></NameInput>
          </div>
          <div>
            <LabelText text="구인인원" />
            <NumberInput
              id="number_of_hires"
              value={recruitData.number_of_hires}
              holder={recruitData?.number_of_hires}
              onChange={handleChange}
            ></NumberInput>
          </div>
          <div>
            {/* 급여 */}
            <LabelText text="급여" />
            <NameInput
              id="salary"
              value={recruitData.salary}
              holder={recruitData?.salary}
              onChange={handleChange}
            ></NameInput>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
          <div>
            {/* 근무형태 */}
            <LabelText text="근무형태" />
            <NameInput
              id="working_type"
              value={recruitData.working_type}
              holder={recruitData?.working_type}
              onChange={handleChange}
            ></NameInput>
          </div>
          <div>
            {/* 근무시간 */}
            <LabelText text="근무시간" />
            <div className="flex gap-3">
              {/* 시작시간, 종료시간 */}
              <NameInput
                id="work_start_hour"
                value={recruitData.work_start_hour}
                holder={recruitData?.work_start_hour}
                onChange={handleChange}
              ></NameInput>
              <NameInput
                id="work_end_hour"
                value={recruitData.work_end_hour}
                holder={recruitData?.work_end_hour}
                onChange={handleChange}
              ></NameInput>
            </div>
          </div>
          <div>
            {/* 주 소정근로시간 계산 */}
            <div className="mt-6">
              <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                주 소정근로시간 : 40시간
              </div>
            </div>
          </div>
          <div>
            {/* 점심시간 */}
            <LabelText text="점심시간" />
            <NameInput
              id="lunch_hour"
              value={recruitData.lunch_hour}
              holder={recruitData?.lunch_hour}
              onChange={handleChange}
            ></NameInput>
          </div>
        </div>
        <div className="mt-4">
          <LabelText text="비고" />
          <StringInput
            id="etc"
            value={recruitData.etc}
            holder={recruitData?.etc}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
}

export default JobContent;
