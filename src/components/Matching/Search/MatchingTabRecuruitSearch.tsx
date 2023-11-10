"use client";
import { useEffect, useState } from "react";
import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import Link from "next/link";
import { supabase } from "@/lib/supabase/supabase";
import { GetRecruitData } from "@/components/Company/Interface/CompanyInterface";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import RecruitBox from "../SelectBox/RecruitBox";

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
              {/* 컴포넌트화 할 부분 */}
              <RecruitBox recruit={recruit} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
