"use client";
import { useEffect, useState } from "react";
import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import Link from "next/link";
import { supabase } from "@/lib/supabase/supabase";
import EmploymentStatusTextBox from "../SelectBox/EmploymentStatusTextBox";
import CompanyBox, {CompanyBoxType} from "../SelectBox/CompanyBox";


export default function MatchingTabCompanySearch() {
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<CompanyBoxType[]>([]); //(보여줄 데이터로 interface를 만들어야 함)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSearch = async () => {
    let { data: joinedData, error } = await supabase
      .from("company")
      .select(`*, recruit (*)`) //recruit 테이블과 조인
      .ilike("company_name", `%${name}%`)
      .filter("recruit.job_availablility", "eq", true);
    if (error) console.error("Error loading data: ", error);
    else setCompany(joinedData || []);
  };

  useEffect(() => {
    // handleSearch 한번 실행
    handleSearch();
  }, [name]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">조회</h1>

        <div className="mt-4 flex gap-4">
          <div className="w-11/12">
            <NameInput
              id="business_name"
              holder="기업이름"
              value={name}
              onChange={handleNameChange}
            ></NameInput>
          </div>
          <SearchButton onClick={handleSearch}></SearchButton>
          {/* </div> */}
        </div>

        <h2 className="mt-10 text-xl	font-medium text-gray-900">검색결과</h2>
        <div className="min-h-[560px]">
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
          >
            {company.map((company) => (
              <li
                key={company.id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <Link href={`/matching/company/${company.id}`}>
                  {/* 컴포넌트화 할 부분 */}
                  <CompanyBox companyBox={company} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
