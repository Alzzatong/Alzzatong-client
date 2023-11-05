import RadioButton from "@/components/Template/Button/RadioButton";
import TableList from "@/components/Template/List/TableList";
import ChatingIcon from "../../../../public/svgs/chatingIcon";
import { ChangeEvent, FormEvent, use, useEffect, useState } from "react";
import { idCollection } from "../Interface/CompanyInterface";
import NumberInput from "@/components/Template/Input/NumberInput";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import { supabase } from "@/lib/supabase/supabase";

export const employMethods = [
  { id: "main", title: "본기관" },
  { id: "other", title: "타기관" },
  { id: "self", title: "자가 취업" },
];
export const employStatus = [
  { id: "false", title: "구인중" },
  { id: "true", title: "구인완료" },
];
export interface ConsultProps {
  company_id: number;
  consult_list: ConsultData[];
}

export interface ConsultData {
  company_id: number;
  created_at?: Date;
  employ_method: string;
  employ_status: string;
  employ_date: string;
  manager_name: string;
  manager_email: string;
  manager_phone: string;
  content: string;
}
export  const consultIdCollection = {
  company_id: "company_id",
  employ_method: "employ_method",
  employ_status: "employ_status",
  employ_date: "employ_date",
  manager_name: "manager_name",
  manager_email: "manager_email",
  manager_phone: "manager_phone",
  content: "content",
};
export  const initialConsultData: ConsultData = {
  company_id: 0,
  employ_method: "",
  employ_status: "false",
  employ_date: "",
  manager_name: "",
  manager_email: "",
  manager_phone: "",
  content: "",
};

export default function CompanyConsult({company_id, consult_list}: ConsultProps) {
  console.log("company_id: ", company_id);
  console.log("CompanyConsult에서 consult_list: ", consult_list);
  initialConsultData.company_id = company_id;
  const [consultData, setConsultData] =
    useState<ConsultData>(initialConsultData);
  const [showEmployInput, setShowEmployInput] = useState(false); // 추가 입력칸 상태

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConsultData({
      ...consultData,
      [e.target.id]: e.target.value,
    });
  };

  const handleEmployRadioButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConsultData({
      ...consultData,
      [e.target.name]: e.target.id,
    });
  };
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setConsultData({
      ...consultData,
      content: e.target.value,
    });
  };

  //저장버튼
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("consult_company")
      .insert([consultData]);
    if (error) {
      console.error("Error inserting company data:", error);
    } else {
      alert("저장되었습니다.");
    }

  };

  useEffect(() => {
    console.log("consultData: ", consultData);
    if (consultData.employ_status === "true") {
      setShowEmployInput(true);
    } else {
      setShowEmployInput(false);
    }
  }, [consultData]);

  return (
    <div className="bg-white">
      <h2 className="sr-only">상담내역</h2>
      <h1 className="text-4xl	font-medium text-gray-900">상담내역</h1>
      <div className="mt-10 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 pb-14 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 flex gap-x-4 gap-y-6">
            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              구인방법
            </div>
            <RadioButton
              itemList={employMethods}
              groupName={consultIdCollection.employ_method}
              onChange={handleEmployRadioButtonChange}
            ></RadioButton>
          </div>
          <div className="mt-6 flex  gap-x-4 gap-y-6">
            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              구인상태
            </div>
            <RadioButton
              itemList={employStatus}
              groupName={consultIdCollection.employ_status}
              onChange={handleEmployRadioButtonChange}
            ></RadioButton>
            {showEmployInput && (
              <div className="mt-1 ml-3">
                <NumberInput
                  id={consultIdCollection.employ_date}
                  value={consultData.employ_date}
                  holder="구인일짜"
                  onChange={handleChange}
                ></NumberInput>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-2 text-black text-base font-bold font-['Pretendard'] leading-normal">
        <ChatingIcon className="w-10 h-10" />
        <div>상담내용</div>
      </div>
      <TextAreaBox
        id={consultIdCollection.content}
        value={consultData.content}
        holder="상담내용을 입력해주세요."
        onChange={handleTextAreaChange}
      ></TextAreaBox>
      <div className="flex justify-end  sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          className="mt-4 block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={handleSubmit}
        >
          저장
        </button>
      </div>
      <div className="mt-10 border-t border-gray-200 pt-10"></div>
      <TableList />
    </div>
  );
}
