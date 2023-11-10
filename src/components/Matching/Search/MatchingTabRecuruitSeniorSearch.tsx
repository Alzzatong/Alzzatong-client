"use client";
import { WishListType } from "@/components/Senior/Search";
import ManAgeCalculate from "@/components/Senior/Template/ManAgeCalculate";
import { supabase } from "@/lib/supabase/supabase";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import RecruitBox from "../SelectBox/RecruitBox";
import { SeniorData } from "@/components/Senior/Interface/SeniorInterface";
import SeniorBox from "../SelectBox/SeniorBox";
import { get } from "http";
import { getSeniorInfoList } from "@/services/supabase/matchingCompanyAPI";

interface MatchingTabRecuruitSeniorSearchProps {
  company_id: number;
  recruit_id: number;
  region: string;
  location: string;
  job_type: string;
}
export interface SeniorBoxType {
  senior_id: number;
  name: string;
  regi_first_num: string;
  regi_second_num: string;
  address: string;
  health_status: number;
  phone_num: string;
  agreement_link: string;
  created_at: Date;
  senior_wishlist: WishListType[];
}
// Wishlist도 선언 필요

export default function MatchingTabRecuruitSeniorSearch({
  company_id,
  recruit_id,
  region,
  location,
  job_type,
}: MatchingTabRecuruitSeniorSearchProps) {
  const [seniors, setSeniors] = useState<SeniorBoxType[]>([]);

  // // 희망 근무지와 희망 직종에 맞는 구직자조회
  // const handleSeniorSearch = async () => {
  //   let { data, error } = await supabase
  //     .from("senior_wishlist")
  //     .select(`senior_id`)
  //     .eq("location", region)
  //     .eq("location_detail", location)
  //     .eq("job_type_name", job_type);

  //   if (error) console.error("Error loading data: ", error);
  //   else {
  //     if (data && data.length > 0) {
  //       let tempSenior = []; // 임시 배열 생성
  //       console.log("data: ", data);
  //       for (let i = 0; i < data.length; i++) {
  //         let { data: seniorData, error: seniorError } = await supabase
  //           .from("senior")
  //           .select(`*`)
  //           .eq("senior_id", data[i].senior_id)
  //           .single();
  //         if (seniorError) console.error("Error loading data: ", seniorError);
  //         else {
  //           console.log("seniorData: ", seniorData);
  //           tempSenior.push(seniorData);
  //         }
  //       }
  //       setSeniors(tempSenior);
  //     }
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      if (seniors.length < 1) { // 무한 렌더링 방지
        await getSeniorInfoList({ region, location, job_type, setSeniors });
      }
    };
    fetchData();
  }, [job_type]);

  return (
    <div>
      <h2 className="mt-10 text-l	font-semibold text-gray-900">
        검색 결과
        <span className="text-xl  text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">
          {seniors?.length}
        </span>
      </h2>
      <div className="min-h-[560px]">
        <ul
          role="list"
          className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
        >
          {seniors &&
            seniors.map((senior: SeniorBoxType) => {
              let dateObject = new Date(senior.created_at);
              let dateString = dateObject.toISOString();
              let date = dateString.slice(0, 10);
              return (
                <li
                  key={senior.senior_id}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <Link
                    href={`/matching/company/${company_id}/${recruit_id}/${senior.senior_id}`}
                  >
                    {/* //컴포넌트화 해야할 부분 */}
                    <SeniorBox
                      senior={senior}
                      date={date}
                      job_type={job_type}
                      region={region}
                      location={location}
                    />
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
