import ManAgeCalculate from "@/components/Senior/Template/ManAgeCalculate";
import { SeniorBoxType } from "../Search/MatchingTabRecuruitSeniorSearch";

interface SeniorBoxProps {
    senior: SeniorBoxType;
    date : string;
    job_type : string;
    region : string;
    location : string;

    }

export default function SeniorBox({senior, date, job_type, region, location} : SeniorBoxProps){



  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
      <div className="flex-1 truncate">
        <div className="gap-1">
          <div className="mt-1 flex flex-row items-center space-x-3">
            <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
              {senior.name}
            </div>
            <div className="text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">
              <ManAgeCalculate
                firstPart={senior.regi_first_num}
                secondPart={senior.regi_second_num}
              />
              세(만)
            </div>
            <div className="mt-1 items-center space-x-3">
              <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                등록일: {date}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="mt-4 flex col-span-1">
            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                번호
              </div>
            </div>
            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
              {senior.senior_id}
            </div>
          </div>
          <div className="mt-4 flex col-span-2">
            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                주민번호
              </div>
            </div>
            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
              {senior.regi_first_num}-{senior.regi_second_num}
            </div>
          </div>
          <div className="mt-4 flex col-span-3">
            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                주소
              </div>
            </div>
            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
              {senior.address}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="mt-4 flex pr-8 py-0.5 gap-2.5">
            <div className="grid grid-rows-2">
              <div className="col-span-1">
                <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                  {/* <div className="inline-flex"> */}
                  희망직종 {job_type}
                  <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                    &nbsp;|&nbsp;
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                  희망근무지 {region}
                  <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                    &nbsp;|&nbsp;
                  </div>{" "}
                  {location}
                </div>
              </div>
            </div>
          </div>

          <div className="col-start-5 mt-5">
            {/* <AgreementButton></AgreementButton> */}
            {/* {senior.agreement_link} */}
          </div>
        </div>
      </div>
    </div>
  );
};
