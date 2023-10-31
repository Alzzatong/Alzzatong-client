import NameInput from "@/components/Template/Input/NameInput";
import StringInput from "@/components/Template/Input/StringInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import React from "react";
import EmployJobButton from "./EmployJobButton";
// ... (기타 필요한 import 구문)
// interface Props {
//   index: number;
// }
interface JobContentProps {
    index: number;
    removeItem: (index: number) => void;
}

function JobContent( props: JobContentProps) {
    const { index, removeItem } = props;
    // const removeItem = (index: number) => () => {
    //     props.removeItem(index);
    //   };
  return (
    <>
      <div className="mt-10 md-4">
        <EmployJobButton id={index} removeItem={removeItem}></EmployJobButton>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
        <div>
          <LabelText
            id={`job-type${index + 1}`}
            text={`구인직무${index + 1}`}
          />
          <NameInput id={`job-type${index + 1}`}></NameInput>
        </div>
        <div>
          <LabelText id={`NumberOfHires${index + 1}`} text="구인인원" />
          <NameInput id={`NumberOfHires${index + 1}`}></NameInput>
        </div>
        <div>
          {/* 급여 */}
          <LabelText id={`salary${index + 1}`} text="급여" />
          <NameInput id={`salary${index + 1}`}></NameInput>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
        <div>
          {/* 근무형태 */}
          <LabelText id={`working-type${index + 1}`} text="근무형태" />
          <NameInput id={`working-type${index + 1}`}></NameInput>
        </div>
        <div>
          {/* 근무시간 */}
          <LabelText id={`working-time${index + 1}`} text="근무시간" />
          <div className="flex gap-3">
            {/* 시작시간, 종료시간 */}
            <NameInput id={`work-start-hour${index + 1}`}></NameInput>
            <NameInput id={`work-end-hour${index + 1}`}></NameInput>
          </div>
        </div>
        <div>
          {/* 주 소정근로시간 계싼 */}
          <div className="mt-6">
            <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
              주 소정근로시간 : 40시간
            </div>
          </div>
        </div>
        <div>
          {/* 점심시간 */}
          <LabelText id={`lunch-time${index + 1}`} text="점심시간" />
          <NameInput id={`lunch-time${index + 1}`}></NameInput>
        </div>
      </div>
      <div className="mt-4">
        <LabelText id={`etc${index + 1}`} text="비고" />
        <StringInput id={`etc${index + 1}`} />
      </div>
    </>
  );
}

export default JobContent;
