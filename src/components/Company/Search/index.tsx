import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import LabelText from "@/components/Template/LabelText/LabelText";
import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import Link from "next/link";
import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/supabase";

interface CompanyBox {
  recruit: any;
  id: number;
  created_at: Date;
  job_type: string;
  job_availablility: boolean;
  company_name: string;
  business_number: string;
  manager_name: string;
  manager_phone: string;
  manager_email: string;
  address: string;
}

export default function CompanySearch() {
  const [year, setYear] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [jobAvailability, setJobAvailability] = useState<boolean>(false);
  const [company, setCompany] = useState<CompanyBox[]>([]); //(보여줄 데이터로 interface를 만들어야 함)

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleJobAvailabilityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJobAvailability(e.target.checked);
  };

  const handleSearch = async () => {
    let { data: joinedData, error } = await supabase
      .from("company")
      .select(`*, recruit (*)`) //recruit 테이블과 조인
      // 사업년도 빈칸이면 1960보다 큰 수 검색
      .gte("business_year", year === "" ? 1960 : year)
      // 이름은 포함으로 검색
      .ilike("company_name", `%${name}%`)
      .filter("recruit.job_availablility", "eq", jobAvailability);
    if (error) console.error("Error loading data: ", error);
    else  setCompany(joinedData ||[]);
  };

  useEffect(() => {
    // handleSearch 한번 실행
    handleSearch();
  }, [year, name, jobAvailability]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">조회</h1>

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
            value={name}
            onChange={handleNameChange}
          ></NameInput>
          <div className="relative flex items-start">
            <div className="mt-2 flex h-6 items-center">
              <input
                id="job_availability"
                aria-describedby="job_availability"
                name="job_availability"
                type="checkbox"
                checked={jobAvailability}
                onChange={handleJobAvailabilityChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="mt-2 ml-3 text-sm leading-6">
              <label htmlFor="candidates" className="font-medium text-gray-900">
                구인유무
              </label>
            </div>
          </div>
          <div></div>
          <SearchButton onClick={handleSearch}></SearchButton>
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
                <Link href={`/company/${company.id}/detail`}>
                  <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
                    <div className="flex-1 truncate">
                      {/* 이 부분에서 'recruit' 테이블의 데이터를 사용합니다. */}

                      <div className="flex gap-1">
                        {company.recruit.map(
                          (recruit: {
                            job_type: string;
                            job_availablility: boolean;
                          }) => (
                            <>
                              <div className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                {recruit.job_type}
                              </div>
                              <div className="text-blue-500  text-sm font-medium font-['Pretendard'] leading-tight">
                                |
                              </div>
                              <div className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                {recruit.job_availablility
                                  ? "구인중"
                                  : "구인마감"}
                              </div>
                            </>
                          )
                        )}
                      </div>

                      <div className="mt-1 flex items-center space-x-3">
                        <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                          {company.company_name}
                        </div>
                      </div>
                      <div className="mt-4 flex gap-4">
                        <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                            번호
                          </div>
                        </div>
                        <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
                          {company.business_number}
                        </div>
                        <div className="w-20 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                            업무 담당자
                          </div>
                        </div>
                        <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
                          {company.manager_name}
                        </div>
                        <div className="w-24 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                            담당자 연락처
                          </div>
                        </div>
                        <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
                          {company.manager_phone}
                        </div>
                      </div>
                      <div className="mt-2 flex gap-4">
                        <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                            이메일
                          </div>
                        </div>
                        <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
                          {company.manager_email}
                        </div>
                        <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                            주소
                          </div>
                        </div>
                        <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
                          {company.address}
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
