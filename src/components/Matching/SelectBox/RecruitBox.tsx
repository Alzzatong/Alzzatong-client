import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { GetRecruitData } from "../../Company/Interface/CompanyInterface";

interface RecruitBoxProps {
  recruit: GetRecruitData;
}

export default function RecruitBox({recruit}: RecruitBoxProps) {
  //필요한 데이터

  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
      <div className="flex-1 truncate">
        {/* 이 부분에서 'recruit' 테이블의 데이터를 사용합니다. */}
        <div className="mt-2 grid grid-cols-4 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              구인직무
            </div>
            <div className=" text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
              {recruit.job_type}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              구인 인원
            </div>
            <div className=" text-black text-sm font-medium font-['Pretendard'] leading-tight">
              {recruit.number_of_hires} 명
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              근무형태
            </div>
            <div className=" text-black text-sm font-medium font-['Pretendard'] leading-tight">
              {recruit.working_type}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              일 근로시간
            </div>
            <div className="flex gap-2">
              <div className=" text-black text-sm font-medium font-['Pretendard'] leading-tight">
                {recruit.work_start_hour}:00 ~
              </div>
              <div className=" text-black text-sm font-medium font-['Pretendard'] leading-tight">
                {recruit.work_end_hour}:00
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-3 justify-end">
          <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
          <div className="mt-1 text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
            급여
          </div>
          <div className="mt-1 text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
            {/* 10000으로 나누기 */}
            {Number(recruit.salary) / 10000}
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {" "}
            만원{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
