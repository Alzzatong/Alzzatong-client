import LabelText from "@/components/Template/LabelText/LabelText";
import NameInput from "@/components/Template/Input/NameInput";
import RadioButton from "@/components/Template/Button/RadioButton";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import EmailInput from "@/components/Template/Input/EmailInput";
import StringInput from "@/components/Template/Input/StringInput";
import YearInput from "@/components/Template/Input/YearInput";
import {
  CompanyData,
  GetCompanyData,
  GetRecruitData,
  JoinData,
  RecruitData,
  SaveRecruitData,
  
  fourinsureMethods,
  idCollection,
  initialCompanyData,
  initialJoinData,
} from "../Interface/CompanyInterface";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import NumberInput from "@/components/Template/Input/NumberInput";
import PhoneNumberInput from "@/components/Template/Input/PhoneInput";
import FileInputButton from "@/components/Template/Button/FileBtn";
import AddButton from "@/components/Template/Button/Add";
import JobContent from "../Template/JobContent";

//company_id 값만 가지고, supabase에서 데이터를 가져올 수 있도록 함
interface Props {
  companyInfo: GetCompanyData;
  recruitsInfo: GetRecruitData[];
}
interface CompanyDetailData {
  data: JoinData | null;
  error: PostgrestError | null;
}

export default function CompanyDetail({ companyInfo, recruitsInfo }: Props) {
  const [items, setItems] = useState([{}]);
  const [reset, setReset] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyData>(companyInfo); // 가져온 데이터를 저장할 상태 변수
  const [recruits, setRecruits] = useState<RecruitData[]>(recruitsInfo);
  const [phone1, phone2, phone3]: string[] = companyInfo.main_phone.split("-");
  const addItem = () => {
    setItems([...items, {}]);
    // setRecruits([...recruits, initialRecruitData]);
  };
  // Item 삭제
  const removeItem = (index: number) => {
    if (index === 0) return; //안내 메시지 구현하기
    const newItems = [...items];
    const data = newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyData({
      ...companyData!,
      [e.target.id]: e.target.value,
    });
  };
  const handleFileChange = (fileUrl: string) => {
    setCompanyData({
      ...companyData,
      certification_link: fileUrl,
    });
  };
  const handleTextAreaChange = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setCompanyData({
      ...companyData,
      content: e.target.value,
    });
  };
  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setCompanyData({
      ...companyData,
      main_phone: newPhoneNumber,
    });
  };

  const handleRadioButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.id,
    });
  };
  const handleBooleanRadioButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.id === "true" ? true : false,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

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

      const { error } = await supabase.from("recruit").insert([recruit]);

      if (error) {
        console.error("Error inserting recruit data: ", error);
        return;
      }
    }
  };
  //취소시 새로고침
  const handleCancel = async () => {
    // 컴포넌트만 새로고침

    //스크롤 맨위로
    window.scrollTo(0, 0);
  };

  const handleJobContent = (index: number, updatedRecruit: RecruitData) => {
    let newRecruits = [...recruits];
    newRecruits[index] = updatedRecruit;
    setRecruits(newRecruits);
  };

  // useEffect(() => {
  //   handleCompanyData();
  //   // console.log("companyData: ", companyData);
  // }, [companyData]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <form className="lg:grid lg:gap-x-12 xl:gap-x-16">
          <div>
            <h1 className="text-4xl	font-medium text-gray-900">
              구인처 상세조회
            </h1>

            <div className="mt-10">
              <h2 className="text-lg font-medium text-gray-900">기업정보</h2>
              <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                <div>
                  <LabelText text="사업년도"></LabelText>
                  <YearInput
                    id={idCollection.businessYearId}
                    value={companyInfo.business_year}
                    onChange={handleChange}
                  ></YearInput>
                </div>
                <div>
                  <LabelText text="사업자번호"></LabelText>
                  <NumberInput
                    id={idCollection.businessNumberId}
                    value={companyInfo.business_number}
                    onChange={handleChange}
                  ></NumberInput>
                </div>

                {/* 중복 확인 버튼 */}
                <div className="mt-6 flex justify-between">
                  {/* <DoubleCheckButton onAlert={}></DoubleCheckButton> */}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                <div>
                  <LabelText text="참여기업명"></LabelText>
                  <NameInput
                    id={idCollection.companyNameId}
                    value={companyInfo.company_name}
                    onChange={handleChange}
                  ></NameInput>
                </div>
                <div>
                  <LabelText text="대표자명"></LabelText>
                  <NameInput
                    id={idCollection.ceoNameId}
                    value={companyInfo.ceo_name}
                    onChange={handleChange}
                  ></NameInput>
                </div>
              </div>

              <div className="mt-4">
                <LabelText text="업종코드"></LabelText>
                <div className="mt-1">
                  <NumberInput
                    id={idCollection.businessCodeId}
                    value={companyInfo.business_code}
                    onChange={handleChange}
                  ></NumberInput>
                </div>
                <div className="mt-4">
                  <LabelText text="전화번호"></LabelText>
                  {/* {'if()'} */}
                  <PhoneNumberInput
                    onPhoneNumberChange={handlePhoneNumberChange}
                    phone1={phone1}
                    phone2={phone2}
                    phone3={phone3}
                    reset={reset}
                    setReset={setReset}
                  ></PhoneNumberInput>
                  <div className="mt-4 w-1/2">
                    <LabelText text="팩스번호"></LabelText>
                    <StringInput
                      id={idCollection.faxId}
                      value={companyInfo.fax}
                      onChange={handleChange}
                    ></StringInput>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <div className="mt-10">
                  <h2 className="text-lg font-medium text-gray-900">
                    상세정보
                  </h2>
                </div>
                <div>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <LabelText text="담당자명"></LabelText>
                      <NameInput
                        id={idCollection.managerNameId}
                        value={companyInfo.manager_name}
                        onChange={handleChange}
                      ></NameInput>
                    </div>

                    <div>
                      <LabelText text="이메일"></LabelText>
                      <EmailInput
                        id={idCollection.managerEmailId}
                        value={companyInfo.manager_email}
                        onChange={handleChange}
                      ></EmailInput>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                    <div>
                      <LabelText text="기업소재지" />
                      <StringInput
                        id={idCollection.localDetailId}
                        value={companyInfo.address}
                        onChange={handleChange}
                      ></StringInput>
                    </div>
                    {/* <div>
                    <LabelText text="기업주소" />
                    <NameInput
                      id={"company-address"}
                      holder={dummy.companyAddress}
                    ></NameInput>
                  </div> */}
                    <div>
                      <LabelText text="기업설립연도" />
                      <YearInput
                        id={idCollection.foundationYearId}
                        value={companyInfo.foundation_year}
                        onChange={handleChange}
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
                      value={companyInfo.content}
                      holder={companyInfo.content}
                      onBlur={handleTextAreaChange}
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
              {recruitsInfo.map((recruit, index) => (
                <div key={index}>
                  <JobContent
                    index={index}
                    removeItem={removeItem}
                    handleJobContent={handleJobContent}
                    recruitData={recruit}
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
