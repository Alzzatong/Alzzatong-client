"use client";
import { SeniorType, WishListType } from "@/components/Senior/Search";
import ManAgeCalculate from "@/components/Senior/Template/ManAgeCalculate";
import { supabase } from "@/lib/supabase/supabase";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import RecruitBox from "../SelectBox/RecruitBox";
import { SeniorData } from "@/components/Senior/Interface/SeniorInterface";

interface MatchingTabRecuruitSeniorSearchProps {
  region: string;
  location: string;
  job_type: string;
}

export default function MatchingTabRecuruitSeniorSearch({
  region,
  location,
  job_type,
}: MatchingTabRecuruitSeniorSearchProps) {
  const [senior, setSenior] = useState<SeniorType[]>([]);

  // 희망 근무지와 희망 직종에 맞는 구직자조회
  const handleSeniorSearch = async () => {
    let { data, error } = await supabase
      .from("senior_wishlist")
      .select(`senior_id`)
      .eq("location", region)
      .eq("location_detail", location)
      .eq("job_type_name", job_type);

    if (error) console.error("Error loading data: ", error);
    else {
      if (data && data.length > 0) {
        let tempSenior = []; // 임시 배열 생성
        console.log("data: ", data);
        for (let i = 0; i < data.length; i++) {
          let { data: seniorData, error: seniorError } = await supabase
            .from("senior")
            .select(`*`)
            .eq("senior_id", data[i].senior_id)
            .single();
          if (seniorError) console.error("Error loading data: ", seniorError);
          else {
            console.log("seniorData: ", seniorData);
            tempSenior.push(seniorData);
          }
        }
        setSenior(tempSenior);
      }
    }
  };

  useEffect(() => {
    handleSeniorSearch();
  }, [job_type]);

  return (
    <div>
      <h2 className="mt-10 text-l	font-semibold text-gray-900">
        검색 결과
        <span className="text-xl  text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">
          {senior?.length}
        </span>
      </h2>
      <div className="min-h-[560px]">
        <ul
          role="list"
          className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
        >
          {senior &&
            senior.map((senior: SeniorType) => {
              let dateObject = new Date(senior.created_at);
              let dateString = dateObject.toISOString();
              let date = dateString.slice(0, 10);
              return (
                <li
                  key={senior.senior_id}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <Link href={`/senior/${senior.senior_id}/detail`}>
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


