import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import DropBox from "@/components/Template/SelectBox/DropBox";
import {
  Score,
  JobAvailability,SeniorConsultJoinAdmin, ConsultSenior
} from "@/components/Senior/Interface/SeniorInterface";
import LabelText from "@/components/Template/LabelText/LabelText";
import CustomButton from "@/components/Template/Button/CustomButton";
import ConsultList from "../Template/ConsultList";
import UncontrolledDropbox from "@/components/Template/SelectBox/UncontrolledDropbox";

interface SeniorDetailProps {
  sidData: SeniorConsultJoinAdmin[];
}

export default function SeniorConsult(sidData:SeniorDetailProps) {
  const [joinData, setJoinData] = useState<SeniorConsultJoinAdmin[] | null>(null);
  const [reset, setReset] = useState(false);
  const [consultData, serConsultData] = useState<ConsultSenior[]>([]);
  const [score, setScore] = useState<number>();
  const [jobAvailability, setJobAvailability] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const datePickerFormat = "YYYY-MM-DD";

  useEffect(() => {
    if (sidData && sidData.sidData) {
      setJoinData(sidData.sidData);
    }
  }, []);

  const handleScoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScore(Number(e.target.id));
    console.log(setScore, "handleScoreChange");
  };

  const handleJobAvailability = (e: React.ChangeEvent<HTMLSelectElement>) => {
    serConsultData({
      ...consultData,
      [e.target.id]: e.target.value,
    })
    console.log(setJobAvailability, "handleJobAvailability");
  };

  const handleDateChange = (e: string | null, context: any) => {
    if (e) {
      setDate(e);
      console.log(setDate, "handleDateChange");
    }
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    console.log(setContent, "handleContent");
  };

  const handleAddButton = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("등록 버튼 누름");
  };
  const handleRetouchButton = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("수정 버튼 누름");
  };

  return (
    <div>
      <div className="mt-10">
        <div>
          <div className="mx-auto max-w-2xl grid grid-cols-4 gap-4 px-4 pb-14 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div>
              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                  상담일자
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div>
                      <DatePicker
                        label=""
                        format={datePickerFormat}
                        defaultValue={date}
                        onChange={handleDateChange}
                      ></DatePicker>
                    </div>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                참여점수
                <UncontrolledDropbox
                  id="score"
                  itemList={Score}
                  groupName="근무지 대분류"
                  defaultValue={""}
                  onBlur={(e) => handleScoreChange(e)}
                />
              </div>

              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                구직상태
                <DropBox
                  id="job_availability"
                  itemList={JobAvailability}
                  groupName="구직 상태"
                  onSelect={(e) => handleJobAvailability(e)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-row">
                {/* <ChatingIcon className="w-10 h-10" /> */}
                <div className="mb-2 ml-2 text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                  상담내용
                </div>
              </div>
              <div className="mt-2 flex">
                <textarea
                  rows={4}
                  name="senior-etc"
                  id="senior-etc"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onBlur={handleContent}
                />
              </div>
              <div className="flex flex-row-reverse ">
                <CustomButton
                  label="등록"
                  onClick={handleAddButton}
                  className="mt-4 rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                />
                <CustomButton
                  label="수정"
                  onClick={handleRetouchButton}
                  className="mt-4 mr-4 rounded-md bg-gray-100 px-3 py-2 text-center text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                />
              </div>
            </div>
          <div className="mt-8 w-100% bg-white rounded-md border border-neutral-200" />
          <div className="flex justify-end  sm:ml-16 sm:mt-0 sm:flex-none"></div>
          <div className="mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-bold leading-6 text-gray-900">
            최신순
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          {/* <div className="inline min-w-full py-2 align-middle sm:px-6 lg:px-8"> */}
            {/* <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"> */}
            <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="table-auto min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-0.5 pl-4 py-3.5 text-center text-xs font-normal text-gray-900"
                    >
                      순번
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-0.5 py-3.5 text-center text-xs  font-normal text-gray-900"
                    >
                      상담자
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xs  font-normal text-gray-900"
                    >
                      상담일자
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 min-w-200 text-center text-xs  font-normal text-gray-900"
                    >
                      참여점수
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-xs  font-normal text-gray-900"
                    >
                      상담내용
                    </th>
                   
                    <th
                      scope="col"
                      className="px-3 py-3.5 pr-6 text-center text-xs  font-normal text-gray-900"
                    >
                      삭제
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {joinData?.map((consult, index) => {
                    let create_date = consult.created_at.toString();
                    let con_date = create_date.substring(0, 10);
                    return(
                    <tr key={consult.consult_senior_id}>
                      <td className="whitespace-nowrap text-center sm:pl-6 py-2 pr-3 text-sm font-medium text-gray-900 ">
                        {index+1}
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                        {/* {consult.admin_name} */}
                        김상담
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                        {con_date}
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                        {consult.score}
                      </td>
                      {/* <td className="break-words text-center whitespace-nowrap px-3 py-4 text-sm text-gray-500"> */}
                      <td className="whitespace-normal text-center px-3 py-4 text-sm text-gray-500">
                        {consult.content}
                      </td>
                      
                      <td className="relative whitespace-nowrap text-right py-4 pl-3 pr-4 text-sm font-thin sm:pr-6">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          삭제<span className="sr-only"></span>
                        </a>
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
