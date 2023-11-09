"use client";
import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import NumberInput from "@/components/Template/Input/NumberInput";
import ManAgeCalculate from "../Template/ManAgeCalculate";
import AgreementButton from "../Template/AgreementButton";
import Link from "next/link";
import { supabase } from "@/services/SupabaseClient";
import { SmallJobCode } from "@/components/Senior/Interface/SeniorInterface";
import Link from "next/link";
import { supabase } from "@/lib/supabase/supabase";
import { useEffect, useState } from "react";

interface SeniorType {
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

interface WishListType {
  wish_list_id: number;
  senior_id: number;
  location: string;
  location_detail: string;
  job_code_number: number;
  job_code_name: string;
  priority: number;
  salary: number;
  work_hour: number;
  work_type: number;
  etc: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SeniorSearch() {
  // const [senior, setSenior] = useState<SeniorType[] | null>(null);
  const [senior_wishlist, setSenior_wishlist] = useState<WishListType[] | null>(
    null
  );

  //supabase connect (`table:foreignTable(columns)`)
  const [senior, setSenior] = useState<any[]>();
  const call = async () => {
    const { data, error } = await supabase
      .from("senior")
      .select(`*, senior_wishlist:senior_wishlist(*)`);

    if (error) {
      console.log(error);
      return;
    }
    setSenior(data);
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">조회</h1>

        <div className="mt-4 grid grid-cols-4 gap-y-6 sm:grid-cols-4 sm:gap-x-4">

          {/* <YearInput id="business-year" holder="사업년도"></YearInput>
          <NameInput id="senior-name" holder="구직자명 입력"></NameInput>
          <NumberInput
            id="senior-resident-number"
            holder="앞 6자리 입력"
          ></NumberInput>
          <div className="relative flex items-end">

            <SearchButton onClick={}></SearchButton>
          </div> */}
        </div>

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
                            {senior.senior_wishlist.map(
                              (wishList: WishListType) => (
                                <div
                                  key={wishList.wish_list_id}
                                  className="mt-4 flex pr-8 py-0.5 gap-2.5"
                                >
                                  <div className="grid grid-rows-2">
                                    <div className="col-span-1">
                                      <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                        {/* <div className="inline-flex"> */}
                                        희망직종 {wishList.priority}
                                        <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                          &nbsp;|&nbsp;
                                        </div>
                                        <div>
                                          {/* {
                                            SmallJobCode[
                                              Number(
                                                wishList.job_code_name.charAt(0)
                                              )
                                            ].find(
                                              (item) =>
                                                item.id ===
                                                wishList.job_code_name
                                            )?.title
                                          } */}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-1">
                                      <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                        희망근무지 {wishList.priority}
                                        <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                          &nbsp;|&nbsp;
                                        </div>{" "}
                                        {wishList.location}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                            <div className="col-start-5 mt-5">
                              <AgreementButton></AgreementButton>
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
    </div>
  );
}
