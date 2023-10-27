"use client";
import { useState } from "react";
import BusinessNumberInput from "../Template/BusinessNumberInput";
import BusinessYearInput from "../Template/BusinessYearInput";
import CompanyNameAndCEONameInput from "../Template/CompanyNameInput";
import PhoneInput from "@/components/Template/Input/PhoneInput";
import JobCodeInput from "../Template/JobCodeInput";
import FaxNumberInput from "../Template/FaxNumberInput";
import CeoNameInput from "../Template/CeoNameInput";
import DoubleCheckButton from "@/components/Template/Button/DoubleCheck";
import SearchButton from "@/components/Template/Button/Search";
import NameInput from "@/components/Template/Input/NameInput";
import EmailInput from "@/components/Template/Input/EmailInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import RadioButton from "@/components/Template/Button/RadioButton";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import StringInput from "@/components/Template/Input/StringInput";

const fourinsureMethods = [
  { id: "yes", title: "가입" },
  { id: "no", title: "미가입" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CompanyRegister() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState();

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">구인처 등록</h2>

        <form className="lg:grid lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h1 className="text-4xl	font-medium text-gray-900">구인처 등록</h1>

              <div className="mt-20">
                <h2 className="text-lg font-medium text-gray-900">기업정보</h2>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <BusinessYearInput></BusinessYearInput>
                  <BusinessNumberInput></BusinessNumberInput>
                  {/* 중복 확인 버튼 */}
                  <div className="mt-6 flex justify-between">
                    <DoubleCheckButton></DoubleCheckButton>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <CompanyNameAndCEONameInput></CompanyNameAndCEONameInput>
                  <CeoNameInput></CeoNameInput>
                </div>

                <div className="mt-4">
                  <JobCodeInput></JobCodeInput>
                </div>
                <div className="mt-4">
                  <PhoneInput></PhoneInput>
                  <FaxNumberInput></FaxNumberInput>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">상세정보</h2>
              </div>
              <div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <LabelText id={"manager-name"} text="담당자명"></LabelText>
                    <NameInput id={"manager-name"}></NameInput>
                  </div>

                  <div>
                    <LabelText id={"manager-email"} text="이메일"></LabelText>
                    <EmailInput id={"manager-email"}></EmailInput>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText id={"company-location"} text="기업소재지" />
                    <NameInput id={"company-location"}></NameInput>
                  </div>
                  <div>
                    <LabelText id={"company-address"} text="기업주소" />
                    <NameInput id={"company-address"}></NameInput>
                  </div>
                  <div>
                    <LabelText
                      id={"company-establishment-year"}
                      text="기업설립연도"
                    />
                    <NameInput id={"company-establishment-year"} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <LabelText id={"fourinsure"} text="4대보험가입" />
                    <RadioButton
                      itemList={fourinsureMethods}
                      groupName={"4대보험가입내역"}
                    ></RadioButton>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText
                      id={"company-registration"}
                      text="사업자등록증"
                    />
                    <div className="mt-1">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <SearchButton></SearchButton>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <LabelText id={"main-business"} text="주요사업" />
                    <TextAreaBox></TextAreaBox>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">구인내용</h2>

              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div>
                  <LabelText id={"job-type1"} text="구인직무1" />
                  <NameInput id={"job-type1"}></NameInput>
                </div>
                <div>
                  <LabelText id={"NumberOfHires"} text="구인인원" />
                  <NameInput id={"NumberOfHires"}></NameInput>
                </div>
                <div>
                  {/* 급여 */}
                  <LabelText id={"salary"} text="급여" />
                  <NameInput id={"salary"}></NameInput>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div>
                  {/* 근무형태 */}
                  <LabelText id={"working-type"} text="근무형태" />
                  <NameInput id={"working-type"}></NameInput>
                </div>
                <div>
                  {/* 근무시간 */}
                  <LabelText id={"working-time"} text="근무시간" />
                  <div className="flex gap-3">
                    {/* 시작시간, 종료시간 */}
                    <NameInput id={"work-start-hour"}></NameInput>
                    <NameInput id={"work-end-hour"}></NameInput>
                  </div>
                </div>
                <div>
                  {/* 주 소정근로시간 계싼 */}
                  <div className="mt-6">
                    <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                      주 소정근로시간 : 40시간
                    </div>
                  </div>
                </div>
                <div>
                  {/* 점심시간 */}
                  <LabelText id={"lunch-time"} text="점심시간" />
                  <NameInput id={"lunch-time"}></NameInput>
                </div>
              </div>
              <div className="mt-4">
                <LabelText id={"etc"} text="비고" />
                <StringInput id={"etc"} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
