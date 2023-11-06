"use client";
import { useEffect, useState } from "react";
import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import Link from "next/link";
import { supabase } from "@/lib/supabase/supabase";
import { GetRecruitData } from "@/components/Company/Interface/CompanyInterface";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

interface MatchingTabRecuruitSearchProps {
  company_id: number;
  // company_name: string
}

export default function MatchingTabRecuruitSearch({
  company_id,
}: MatchingTabRecuruitSearchProps) {
  const [recruits, setRecruits] = useState<GetRecruitData[]>([]); //(보여줄 데이터로 interface를 만들어야 함)

  const handleSearch = async () => {
    let { data, error } = await supabase
      .from("recruit")
      .select(`*`) //recruit 테이블과 조인
      .eq("company_id", company_id)
      .filter("job_availablility", "eq", true); // 구인중인 것만 조회
    if (error) console.error("Error loading data: ", error);
    else setRecruits(data || []);
  };

  useEffect(() => {
    // handleSearch 한번 실행
    handleSearch();
  }, []);
  return (
    <div className="min-h-[560px]">
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
      >
        {recruits.map((recruit) => (
          <li
            key={recruit.id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <Link href={`/matching/company/${company_id}/${recruit.id}`}>
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
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-500"/>
                    <div className="mt-1 text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                      급여
                    </div>
                    <div className="mt-1 text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
                      {/* 10000으로 나누기 */}
                      {Number(recruit.salary) / 10000}
                    </div>
                    <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight"> 만원 </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
