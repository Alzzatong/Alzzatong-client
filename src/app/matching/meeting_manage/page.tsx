"use client";
import SearchButton from "@/components/Template/Button/Search";
import NameInput from "@/components/Template/Input/NameInput";
import YearInput from "@/components/Template/Input/YearInput";
import DropBox from "@/components/Template/SelectBox/DropBox";
import { supabase } from "@/lib/supabase/supabase";
import { getMeetingList } from "@/services/supabase/matchingCompanyAPI";
import Link from "next/link";
import { useState } from "react";

const statusList = [
  { id: 3, title: "전체" },
  { id: 0, title: "대기" },
  { id: 1, title: "완료" },
  { id: 2, title: "취소" },
];
interface Company {
  address: any;
  manager_name: any;
  manager_phone: any;
}

interface Senior {
  name: any;
}
interface MeetingBoxType {
  date: Date;
  status: number;
  company: Company[];
  senior: Senior[];
}

export default function MeetingPage({}: {}) {
  const [year, setYear] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [seniorName, setSeniorName] = useState<string>("");

  const [status, setStatus] = useState<number>(0); // 대기 0, 완료 1, 취소 2
  const [meetingBoxs, setMeetingBoxs] = useState<MeetingBoxType[]>([]);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };
  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };
  const handleSeniorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeniorName(e.target.value);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(Number(e.target.value));
  };

  // 매칭 내용 조회
  const handleSearch = async () => {
    await getMeetingList({
      year,
      companyName,
      seniorName,
      status,
      setMeetingBoxs,
    });
  };
  // useEffect(() => {
  //     fetchData();
  // }, [year, companyName, seniorName, status]);

  return (
    <div className="bg-gray-50" style={{ maxHeight: "800px" }}>
      <div className="mx-auto max-w-2xl px-4  pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">면접 관리</h1>
        <div className="mx-2 mt-11 grid grid-cols-2 gap-2">
          <div className="flex justify-start gap-2">
            <div className=" text-black text-xl font-medium font-['Pretendard'] leading-7"></div>
            <div className="text-black text-xl font-medium font-['Pretendard'] leading-7"></div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-y-6 sm:grid-cols-5 sm:gap-x-4">
          <YearInput
            id="business_year"
            holder="사업년도"
            value={year}
            onChange={handleYearChange}
          ></YearInput>
          <NameInput
            id="business_name"
            holder="기업이름"
            value={companyName}
            onChange={handleCompanyNameChange}
          ></NameInput>
          <NameInput
            id="business_name"
            holder="구직자명"
            value={seniorName}
            onChange={handleSeniorNameChange}
          ></NameInput>
          <DropBox
            id="status"
            itemList={statusList}
            groupName="면접 상태"
            onSelect={handleStatusChange}
          ></DropBox>
          <SearchButton onClick={handleSearch}></SearchButton>
        </div>
      </div>
      <h2 className="mt-10 text-l	font-semibold text-gray-900">
        검색 결과
        <span className="text-xl  text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">
          {meetingBoxs?.length}
        </span>
      </h2>
      <div className="min-h-[560px]">
        <ul
          role="list"
          className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
        >
          {meetingBoxs &&
            meetingBoxs.map((meetingBox: MeetingBoxType) => {
              return (
                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                  <Link
                    href={`/matching/meeting_manage/`} // 미팅 id 추가
                  >
                    {/* //컴포넌트화 해야할 부분 */}
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
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
