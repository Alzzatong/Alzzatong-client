import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import LabelText from "@/components/Template/LabelText/LabelText";
import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
const company = [
  {
    jobType: "농업업종",
    jobAvailable: "구인중",
    name: "(주)홍길동 주식회사",
    number: "123-45-67890",
    manager: "홍길동",
    manager_phone: "010-1234-5678",
    email: "gildong@naver.com",
    address: "서울특별시 강남구 테헤란로 427",
    fileUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    jobType: "농업업종",
    jobAvailable: "구인중",
    name: "(주)홍길동 주식회사",
    number: "123-45-67890",
    manager: "홍길동",
    manager_phone: "010-1234-5678",
    email: "gildong@naver.com",
    address: "서울특별시 강남구 테헤란로 427",
    fileUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    jobType: "농업업종",
    jobAvailable: "구인중",
    name: "(주)홍길동 주식회사",
    number: "123-45-67890",
    manager: "홍길동",
    manager_phone: "010-1234-5678",
    email: "gildong@naver.com",
    address: "서울특별시 강남구 테헤란로 427",
    fileUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  //테스트용 더미 데이터
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function CompanySearch() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">조회</h1>

        <div className="mt-4 grid grid-cols-5 gap-y-6 sm:grid-cols-5 sm:gap-x-4">
          <YearInput id="business-year" holder="사업년도"></YearInput>
          <NameInput id="business-name" holder="기업이름"></NameInput>
          <div className="relative flex items-start">
            <div className="mt-2 flex h-6 items-center">
              <input
                id="job-availability"
                aria-describedby="job-availability"
                name="job-availability"
                type="checkbox"
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
          <SearchButton></SearchButton>
        </div>

        <h2 className="mt-20 text-xl	font-medium text-gray-900">검색결과</h2>
        <div className="min-h-[560px]">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
          >
            {company.map((company) => (
              <li
                key={company.email}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex gap-1">
                      <div className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
                        농업업종
                      </div>
                      <div className="text-blue-500  text-sm font-medium font-['Pretendard'] leading-tight">
                        |
                      </div>
                      <div className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
                        구인중
                      </div>
                    </div>
                    <div className="mt-1 flex items-center space-x-3">
                      <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                        {company.name}
                      </div>
                      {/* <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {company.role}
                      </span> */}
                    </div>
                    <div className="mt-4 flex gap-4">
                      <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                          번호
                        </div>
                      </div>
                      <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
                        {company.number}
                      </div>
                      <div className="w-20 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                          업무 담당자
                        </div>
                      </div>
                      <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
                        {company.manager}
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
                        {company.email}
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
