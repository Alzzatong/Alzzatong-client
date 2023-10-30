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
import YearInput from "@/components/Template/Input/YearInput";
import NumberInput from "@/components/Template/Input/NumberInput";
import AddButton from "@/components/Template/Button/Add";
import JobContent from "../Template/JobContent";

const fourinsureMethods = [
  { id: "yes", title: "가입" },
  { id: "no", title: "미가입" },
];
const idCollection = {
  BusinessYearId: "business-year",
  BusinessNumberId: "business-number",
  CompanyNameId: "company-name",
  CEONameId: "ceo-name",
  ManagerNameId: "manager-name",
  ManagerEmailId: "manager-email",
  CompanyLocationId: "company-location",
  CompanyAddressId: "company-address",
  CompanyEstablishmentYearId: "company-establishment-year",
  FourInsureId: "fourinsure",
  CompanyRegistrationId: "company-registration",
  MainBusinessId: "main-business",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CompanyRegister() {
  const [items, setItems] = useState([{}]);
  const addItem = () => {
    setItems([...items, {}]);
  };
  // Item 삭제
  const removeItem = (index: number) => {
    if(index === 0) return; //안내 메시지 구현하기 
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }


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
                  <div>
                    <LabelText
                      id={idCollection.BusinessYearId}
                      text="사업년도"
                    ></LabelText>
                    <YearInput id={idCollection.BusinessYearId}></YearInput>
                  </div>
                  <BusinessNumberInput></BusinessNumberInput>
                  {/* 중복 확인 버튼 */}
                  <div className="mt-6 flex justify-between">
                    <DoubleCheckButton></DoubleCheckButton>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText
                      id={idCollection.CompanyNameId}
                      text="참여기업명"
                    ></LabelText>
                    <NameInput id={idCollection.CompanyNameId}></NameInput>
                  </div>
                  <div>
                    <LabelText
                      id={idCollection.CEONameId}
                      text="대표자명"
                    ></LabelText>
                    <NameInput id={idCollection.CEONameId}></NameInput>
                  </div>
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
                    <LabelText
                      id={idCollection.ManagerNameId}
                      text="담당자명"
                    ></LabelText>
                    <NameInput id={idCollection.ManagerNameId}></NameInput>
                  </div>

                  <div>
                    <LabelText
                      id={idCollection.ManagerEmailId}
                      text="이메일"
                    ></LabelText>
                    <EmailInput id={idCollection.ManagerEmailId}></EmailInput>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText
                      id={idCollection.CompanyLocationId}
                      text="기업소재지"
                    />
                    <NameInput id={idCollection.CompanyLocationId}></NameInput>
                  </div>
                  <div>
                    <LabelText
                      id={idCollection.CompanyAddressId}
                      text="기업주소"
                    />
                    <NameInput id={idCollection.CompanyAddressId}></NameInput>
                  </div>
                  <div>
                    <LabelText
                      id={idCollection.CompanyEstablishmentYearId}
                      text="기업설립연도"
                    />
                    <NameInput id={idCollection.CompanyEstablishmentYearId} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <LabelText
                      id={idCollection.FourInsureId}
                      text="4대보험가입"
                    />
                    <RadioButton
                      itemList={fourinsureMethods}
                      groupName={idCollection.FourInsureId}
                    ></RadioButton>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText
                      id={idCollection.CompanyRegistrationId}
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
                    <LabelText
                      id={idCollection.MainBusinessId}
                      text="주요사업"
                    />
                    <TextAreaBox></TextAreaBox>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t pt-10 block w-full border-gray-200">
              {/* <AddButton></AddButton> */}
              <h2 className="flex border-b text-lg font-medium text-gray-900  border-gray-300">
                <div className="flex-glow border-b-4 border-b-blue-500">
                  구인내용
                </div>
                <button
                  type="button" 
                  className="ml-auto rounded bg-indigo-50 px-2 py-1 my-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
                  onClick={addItem}

                >
                  + 추가하기
                </button>

              </h2>
              {items.map((item, index) => (
                <div key={index}>
                  <JobContent index={index} removeItem={removeItem} />
                  </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
