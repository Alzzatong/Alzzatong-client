import TableList from "@/components/Template/List/TableList";
// import ChatingIcon from "../../../../public/svgs/chatingIcon";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import DropBox from "@/components/Template/SelectBox/DropBox";
import { Score, JobAvailability } from "@/components/Senior/Interface/SeniorInterface";
import LabelText from "@/components/Template/LabelText/LabelText";
import CustomButton from "@/components/Template/Button/CustomButton";
import ConsultList from "../Template/ConsultList";

export default function SeniorConsult() {
  const [score, setScore] = useState<number>();
  const [jobAvailability, setJobAvailability] = useState<number>(5);
  const [date, setDate] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const datePickerFormat = "YYYY-MM-DD";
  // const datePickerUtils = {
  //   format: datePickerFormat,
  //   parse: (value: string) => dayjs(value, datePickerFormat, true),
  // };

  const handleScoreChange = (e: number) => {
    setScore(e);
    console.log(setScore, "handleScoreChange");
  };

  const handleJobAvailability = (e: number) => {
    setJobAvailability(e);
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

  const handleAddButton = (e:React.ChangeEvent<HTMLSelectElement>) => {
    console.log("등록 버튼 누름")
  }
  const handleRetouchButton = (e:React.ChangeEvent<HTMLSelectElement>) => {
    console.log("수정 버튼 누름")
  }

  return (
    <div className="w-full relative bg-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8 text-black text-4xl font-bold font-['Pretendard'] leading-10">
          상담내역
        </h2>
        <div className="mt-10">
          <div className="mx-auto max-w-2xl grid grid-cols-4 gap-4 px-4 pb-14 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <div className="mt-6 flex gap-x-4 gap-y-6"> */}
            {/* <div className="mt-4 text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal"> */}
            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              상담일자
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <DatePicker
                    label=""
                    format={datePickerFormat}
                    value={date}
                    onChange={handleDateChange}
                  ></DatePicker>
                </div>
              </LocalizationProvider>
            </div>
            {/* </div> */}
            {/* </div> */}

            {/* <div className="flex gap-x-4 gap-y-6"> */}
            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              참여점수
              <DropBox
                itemList={Score}
                groupName="참여점수"
                onSelect={handleScoreChange}
                className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {/* </div> */}

              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                구직상태
                <DropBox
                  itemList={JobAvailability}
                  groupName="구직 상태"
                  onSelect={handleJobAvailability}
                  className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
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
          <ConsultList />
      </div>
    </div>
  );
}
