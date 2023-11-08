"use client";
import { FormEvent, useState, ChangeEvent, use, useEffect } from "react";

import DoubleCheckButton from "@/components/Template/Button/DoubleCheck";
import NameInput from "@/components/Template/Input/NameInput";
import EmailInput from "@/components/Template/Input/EmailInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import RadioButton from "@/components/Template/Button/RadioButton";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import YearInput from "@/components/Template/Input/YearInput";
import NumberInput from "@/components/Template/Input/NumberInput";
import JobContent from "../Template/JobContent";
import { supabase } from "@/lib/supabase/supabase";
import PhoneNumberInput from "@/components/Template/Input/PhoneInput";
import StringInput from "@/components/Template/Input/StringInput";
import FileInputButton from "@/components/Template/Button/FileBtn";
import AddButton from "@/components/Template/Button/Add";
import {
  CompanyData,
  RecruitData,
  SaveRecruitData,
  companyDataKoean,
  fourinsureMethods,
  idCollection,
  initialCompanyData,
  initialRecruitData,
} from "../Interface/CompanyInterface";
import JobCodeInput from "@/components/Template/Input/JobCodeInput";

export default function CompanyRegister() {
  const [items, setItems] = useState([{}]);
  const [reset, setReset] = useState(false);
  const [companyData, setCompanyData] = useState(initialCompanyData);
  const [recruits, setRecruits] = useState<RecruitData[]>([initialRecruitData]);

  const addItem = () => {
    setItems([...items, {}]);
    setRecruits([...recruits, initialRecruitData]);
  };
  // Item 삭제
  const removeItem = (index: number) => {
    if (index === 0) return; //안내 메시지 구현하기
    const newItems = [...items];
    const data = newItems.splice(index, 1);
    setItems(newItems);
  };

  // 검증 함수
  const validateData = (companyData: CompanyData): string | null => {
    const requiredFields = [
      "business_year",
      "business_number",
      "company_name",
      "ceo_name",
      "business_code",
      "main_phone",
      "address",
      "foundation_year",
      "manager_name",
      "manager_email",
      "content",
    ];
    const missingFields = [];

    for (let field of requiredFields) {
      if (companyData[field] === "") {
        
        missingFields.push(companyDataKoean[field]);
      }
    }

    if (missingFields.length > 0) {
      return `${missingFields.join(", ")}는 필수 입력 사항입니다.`;
    }

    if (companyData.business_number.length !== 10) {
      return "사업자번호는 10자리입니다.";
    }
    if (companyData.main_phone.length !== 11) {
      return "대표 전화번호는 11자리입니다.";
    }
    if (companyData.manager_email.indexOf("@") === -1) {
      return "이메일 형식이 올바르지 않습니다.";
    }
    if (companyData.foundation_year.length !== 4) {
      return "설립연도는 4자리입니다.";
    }
    if (companyData.manager_phone.length !== 11) {
      return "매니저 전화번호는 11자리입니다.";
    }
    if (companyData.certification_link === "") {
      return "사업자등록증을 첨부해주세요.";
    }

    return null;
  };

  // 추가하기 버튼의 onClick 이벤트 핸들러
  const handleJobContent = (index: number, updatedRecruit: RecruitData) => {
    const newRecruits = [...recruits];
    newRecruits[index] = updatedRecruit;
    setRecruits(newRecruits);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value,
    });
  };
  const handleJobCodeChange = (jobCode: string) => {
    setCompanyData({
      ...companyData,
      business_code: jobCode,
    });
  };

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setCompanyData({
      ...companyData,
      main_phone: newPhoneNumber,
    });
  };
 
  const handleBooleanRadioButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.id === "true" ? true : false,
    });
  };
  const handleFileChange = (fileUrl: string) => {
    setCompanyData({
      ...companyData,
      certification_link: fileUrl,
    });
  };
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCompanyData({
      ...companyData,
      content: e.target.value,
    });
  };
  const doubleCheck = async () => {
    alert("중복확인");
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  // 저장 버튼
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const errorMessage = validateData(companyData);
    if (errorMessage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      alert(errorMessage);      
      return;
    }
    
    const { data, error } = await supabase
      .from("company")
      .insert([companyData])
      .select("id");
    if (error) {
      console.error("Error inserting data: ", error);
    }

    const companyId = data?.[0].id;
    if (!companyId) {
      console.error("Error getting company ID");
      return;
    }

    for (const recruit of recruits) {
      if (recruit.job_type === "") continue;
      const saveRecruitData: SaveRecruitData = {
        ...recruit,
        company_id: companyId,
        job_availablility: true,
      };
      const { error } = await supabase
        .from("recruit")
        .insert([saveRecruitData]);
      if (error) {
        console.error("Error inserting recruit data: ", error);
        return;
      }
    }
    alert("저장되었습니다.");
    handleCancel(event);
  };
  const handleCancel = (event: FormEvent) => {
    event.preventDefault();

    // form 초기화
    setCompanyData(initialCompanyData);
    setRecruits([initialRecruitData]);
    setItems([{}]);
    setReset(!reset);
    // 페이지 최상단으로 이동
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" bg-white">
      <div className="mx-auto max-w-2xl px-10 pb-24 pt-20 sm:px-10 lg:max-w-7xl lg:px-20">
        <h2 className="sr-only">구인처 등록</h2>

        <form
          className="lg:grid lg:gap-x-12 xl:gap-x-16"
          onKeyPress={handleKeyPress}
        >
          <div>
            <div>
              <h1 className="text-4xl	font-medium text-gray-900">구인처 등록</h1>

              <div className="mt-20">
                <h2 className="text-lg font-medium text-gray-900">기업정보</h2>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="사업년도"></LabelText>
                    <YearInput
                      id={idCollection.businessYearId}
                      value={companyData.business_year}
                      onChange={handleChange}
                      min="2023"
                    ></YearInput>
                  </div>
                  <div>
                    <LabelText text="사업자번호"></LabelText>
                    <NumberInput
                      id={idCollection.businessNumberId}
                      value={companyData.business_number}
                      onChange={handleChange}
                    ></NumberInput>
                  </div>
                  {/* 중복 확인 버튼 */}
                  <div className="mt-6 flex justify-between">
                    <DoubleCheckButton
                      onAlert={doubleCheck}
                    ></DoubleCheckButton>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="참여기업명"></LabelText>
                    <NameInput
                      id={idCollection.companyNameId}
                      value={companyData.company_name}
                      onChange={handleChange}
                    ></NameInput>
                  </div>
                  <div>
                    <LabelText text="대표자명"></LabelText>
                    <NameInput
                      id={idCollection.ceoNameId}
                      value={companyData.ceo_name}
                      onChange={handleChange}
                    ></NameInput>
                  </div>
                </div>
                <div className="mt-4  w-1/3">
                  <LabelText text="업종코드"></LabelText>
                  <div className="mt-1">
                    <JobCodeInput
                      id={idCollection.businessCodeId}
                      value={companyData.business_code}
                      onChange={handleJobCodeChange}
                    ></JobCodeInput>
                  </div>
                </div>
                <div className="mt-4">
                  <LabelText text="전화번호"></LabelText>
                  <PhoneNumberInput
                    onPhoneNumberChange={handlePhoneNumberChange}
                    reset={reset}
                    setReset={setReset}
                  ></PhoneNumberInput>
                  <div className="mt-4 w-1/2">
                    <LabelText text="팩스번호"></LabelText>
                    <StringInput
                      id={idCollection.faxId}
                      value={companyData.fax}
                      onChange={handleChange}
                    ></StringInput>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">상세정보</h2>
              </div>
              <div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="담당자명"></LabelText>
                    <NameInput
                      id={idCollection.managerNameId}
                      value={companyData.manager_name}
                      onChange={handleChange}
                    ></NameInput>
                  </div>

                  <div>
                    <LabelText text="이메일"></LabelText>
                    <EmailInput
                      id={idCollection.managerEmailId}
                      value={companyData.manager_email}
                      onChange={handleChange}
                    ></EmailInput>
                  </div>
                </div>
                <div className="mt-4 ">
                  <div>
                    <LabelText text="기업소재지" />
                    <StringInput
                      id={idCollection.addressId}
                      value={companyData.address}
                      onChange={handleChange}
                    ></StringInput>
                  </div>
                </div>
                <div className="mt-4 w-1/3">
                  <div>
                    <LabelText text="기업설립연도" />
                    <YearInput
                      id={idCollection.foundationYearId}
                      value={companyData.foundation_year}
                      onChange={handleChange}
                      min="1960"
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <LabelText text="4대보험가입" />
                    <RadioButton
                      itemList={fourinsureMethods}
                      groupName={idCollection.isInsuranceId}
                      value={companyData.is_insurance.toString()}
                      onChange={handleBooleanRadioButtonChange}
                    ></RadioButton>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="사업자등록증" />
                    <FileInputButton
                      onfileUrlChange={handleFileChange}
                      // id={idCollection.certificationLinkId}
                      // value={companyData.certification_link}
                    ></FileInputButton>
                  </div>
                  <div className="mt-6">
                    {/* <SearchButton></SearchButton> */}
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <LabelText text="주요사업" />
                    <TextAreaBox
                      id={idCollection.contentId}
                      value={companyData.content}
                      onChange={handleTextAreaChange}
                    ></TextAreaBox>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t pt-10 block w-full border-gray-200">
              <h2 className="flex border-b text-lg font-medium text-gray-900  border-gray-300">
                <div className="flex-glow border-b-4 border-b-blue-500">
                  구인내용
                </div>
                <AddButton addItem={addItem}></AddButton>
              </h2>
              {items.map((item, index) => (
                <div key={index}>
                  <JobContent
                    index={index}
                    removeItem={removeItem}
                    handleJobContent={handleJobContent}
                    recruitData={recruits[index]}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-20 ">
              <button
                className="h-14 w-64 relative bg-blue-500 rounded-full text-center text-white text-xl font-semibold leading-7 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  저장
                </div>
              </button>
              <button
                className="h-14 w-64 relative bg-white rounded-full border border-neutral-200 text-center text-zinc-500 text-xl font-semibold leading-7 ml-4 hover:bg-gray-200"
                onClick={handleCancel}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  취소
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
