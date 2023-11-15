"use client";
import ManAgeCalculate from "@/components/Senior/Template/ManAgeCalculate";
import { supabase } from "@/lib/supabase/supabase";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import RecruitBox from "../SelectBox/RecruitBox";
import {
  SeniorData,
  SeniorJoinWish,
} from "@/components/Senior/Interface/SeniorInterface";
import SeniorBox from "../SelectBox/SeniorBox";
import { get } from "http";
import { getSeniorInfoList } from "@/services/supabase/matchingCompanyAPI";
import React from "react";
import Loading from "@/components/Loading";

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
  senior_wishlist: SeniorJoinWish[];
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
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (region && location && job_type) {
      await getSeniorInfoList({ region, location, job_type, setSeniors });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [region, location, job_type]);

  if (isLoading) {
    <Loading />;
  } else {
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
}
