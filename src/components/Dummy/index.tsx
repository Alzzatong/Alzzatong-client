import { useState, useEffect } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import LabelText from "@/components/Template/LabelText/LabelText";
import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import Link from "next/link";
import NumberInput from "@/components/Template/Input/NumberInput";
import ManAgeCalculate from "../Template/ManAgeCalculate";
import { supabase } from "@/services/supabaseClient";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function SeniorSearch() {
  //1st 시도
  const [seniorData, setseniorData] = useState<any[] | null>(null);
  const [seniorError, setSeniorError] = useState<any | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('Senior').select();
      setseniorData(data);
      setSeniorError(error);
    }

    fetchData();
  }, []);

  // const Senior_Table = "Senior";
  // const { data, error } = await supabase.from(Senior_Table).select();
  // if (error) {
  //   throw error;
  // }

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">조회</h1>

        <div className="mt-4 grid grid-cols-4 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
          <YearInput id="business-year" holder="사업년도"></YearInput>
          <NameInput id="senior-name" holder="구직자명 입력"></NameInput>
          <NumberInput
            id="senior-resident-number"
            holder="앞 6자리 입력"
          ></NumberInput>
          <div className="relative flex items-end">
            <SearchButton></SearchButton>
          </div>
        </div>

        <h2 className="mt-10 text-xl	font-medium text-gray-900">검색결과:{seniorData?.length}</h2>
        <div className="min-h-[560px]">
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
          >
            {seniorData?.map((senior:any) => (
              <li
                key={senior.senior_id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <Link href={`/senoir/${senior.senior_id}/detail`}>
                  <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
                    <div className="flex-1 truncate">
                      <div className="gap-1">
                        <div className="mt-1 flex flex-row items-center space-x-3">
                          <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                            {senior.name}
                          </div>
                          <div className="text-blue-500 text-l font-medium font-['Pretendard'] leading-tight">
                          <ManAgeCalculate firstPart={senior.regi_first_num} secondPart={senior.regi_second_num}/>
                          세(만)
                          </div>
                        <div className="mt-1 flex justify-end items-center space-x-3">
                          <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                            hoho
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
                      <div className="grid grid-cols-6 gap-4">
                        <div className="mt-4 flex col-span-3">
                          <div className="px-2 py-0.5 gap-2.5 inline-flex">
                            <div className="text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              희망직종 1
                            </div>
                          </div>
                          <div className="px-2 py-0.5 gap-2.5 inline-flex">
                            <div className="text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              희망직종 2
                            </div>
                          </div>
                          <div className="px-2 py-0.5 gap-2.5 inline-flex">
                            <div className="text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              희망직종 3
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-4">
                        <div className="mt-4 flex col-span-3">
                          <div className="px-2 py-0.5 gap-2.5 inline-flex">
                            <div className="text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              희망근무지 1
                            </div>
                          </div>
                          <div className="px-2 py-0.5 gap-2.5 inline-flex">
                            <div className="text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              희망근무지 2
                            </div>
                          </div>
                          <div className="px-2 py-0.5 gap-2.5 inline-flex">
                            <div className="text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              희망근무지 3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
