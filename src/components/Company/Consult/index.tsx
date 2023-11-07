import RadioButton from "@/components/Template/Button/RadioButton";
import TableList from "@/components/Template/List/TableList";
import ChatingIcon from "../../../styles/svgs/chatingIcon";
import { ChangeEvent, FormEvent, use, useEffect, useState } from "react";
import NumberInput from "@/components/Template/Input/NumberInput";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import { supabase } from "@/lib/supabase/supabase";
import {
  deleteConsultServerSideProps,
  getConsultServerSideProps,
} from "@/services/supabase/companySelect";
import Loading from "@/components/Loading";
import { employMethods, employStatus } from "../Interface/CompanyInterface";


export interface ConsultProps {
  company_id: number;
}

export interface ConsultData {
  id?: number;
  company_id: number;
  created_at: string;
  employ_method: string;
  employ_status: boolean;
  employ_date: string;
  manager_name: string;
  manager_email: string;
  manager_phone: string;
  content: string;
}
export const consultIdCollection = {
  company_id: "company_id",
  employ_method: "employ_method",
  employ_status: "employ_status",
  employ_date: "employ_date",
  manager_name: "manager_name",
  manager_email: "manager_email",
  manager_phone: "manager_phone",
  content: "content",
};
export const initialConsultData: ConsultData = {
  created_at: "",
  company_id: 0,
  employ_method: "",
  employ_status: false,
  employ_date: "",
  manager_name: "",
  manager_email: "",
  manager_phone: "",
  content: "",
};

export default function CompanyConsult({ company_id }: ConsultProps) {
  const [isLoading, setIsLoading] = useState(true);

  const [consultList, setConsultList] = useState<ConsultData[]>([]);

  initialConsultData.company_id = company_id;
  const [consultData, setConsultData] =
    useState<ConsultData>(initialConsultData);
  const [showEmployInput, setShowEmployInput] = useState(false); // 추가 입력칸 상태

  const checkConsult = (consult: ConsultData) => {
    setConsultData(consult); // 인자로 받은 consult을 추가합니다.
  };

  const deleteConsult = (consult: ConsultData) => {
    if (consult.id != undefined) {
      setConsultList(consultList.filter((item) => item !== consult)); // 인자로 받은 consult을 제외한 나머지를 저장합니다.
      console.log("consult.id: ", consult.id);
      deleteConsultServerSideProps({
        id: consult.id,
      });
      return;
    } else {
      // id가 없으면 삭제할 수 없습니다.
      alert("삭제할 수 없습니다.");
    }
  };
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
  const handleBooleanRadioButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConsultData({
      ...consultData,
      [e.target.name]: e.target.id === "true" ? true : false,
    });
  };
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setConsultData({
      ...consultData,
      content: e.target.value,
    });
  };
  // setConsultData({

  //저장버튼
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { data, error } = await supabase.from("consult_company").insert([
      {
        company_id: consultData.company_id,
        employ_method: consultData.employ_method,
        employ_status: consultData.employ_status,
        employ_date: consultData.employ_date,
        manager_name: consultData.manager_name,
        manager_email: consultData.manager_email,
        manager_phone: consultData.manager_phone,
        content: consultData.content,
      },
    ]);
    if (error) {
      console.error("Error inserting company data:", error);
    } else {
      alert("저장되었습니다.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      getConsultServerSideProps({
        id: company_id,
        setConsultList: setConsultList,
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (consultData.employ_status == true) {
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
              value={consultData.employ_method}
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
              value={consultData.employ_status.toString()}
              onChange={handleBooleanRadioButtonChange}
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
      {/* 만약 isLoading이 true이면 */}
      {isLoading && <Loading />}
      {!isLoading && (
        <TableList
          consults={consultList}
          checkConsult={checkConsult}
          deleteConsult={deleteConsult}
        />
      )}
      {/* <TableList consults={consultList} /> */}
    </div>
  );
}
