import TableList from "@/components/Template/List/TableList";
import ChatingIcon from "../../../../public/svgs/chatingIcon";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";


export default function SeniorConsult() {
    const [date, setDate] = useState<Date | null>();
    const datePickerFormat = "YYYY-MM-DD";
    const datePickerUtils = {
        format: datePickerFormat,
        parse: (value:string) => dayjs(value, datePickerFormat, true).toDate(),
    }

    const handleDateChange = ( event:Date|null ) => {
        setDate(event);
        // setDate(event.target.value);
      };

  return (
    <div className="w-full relative bg-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8 text-black text-4xl font-bold font-['Pretendard'] leading-10">
          상담내역
        </h2>
        <div className="mt-10 bg-gray-50">
          <div className="mx-auto max-w-2xl px-4 pb-14 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 flex gap-x-4 gap-y-6">
              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                날짜입력
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div> {/* format 적용이 안 됨ㅠㅠㅠㅠ*/}
                            <DatePicker label="날짜 선택" format={datePickerFormat} onChange={handleDateChange}></DatePicker>
                        </div>
                    </LocalizationProvider>
                </div>
              </div>
            </div>
            <div className="mt-6 flex  gap-x-4 gap-y-6">
              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                참여점수
              </div>
            </div>
            <div className="mt-6 flex  gap-x-4 gap-y-6">
              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                구직상태
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2 text-black text-base font-bold font-['Pretendard'] leading-normal">
          <ChatingIcon className="w-10 h-10" />
          <div>상담내용</div>
        </div>
        <div className="mt-2 w-100% h-44 bg-white rounded-md border border-neutral-200" />
        <div className="flex justify-end  sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="mt-4 block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            저장
          </button>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-10"></div>
        <TableList />
      </div>
    </div>
  );
}
