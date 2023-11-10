import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import LabelText from "@/components/Template/LabelText/LabelText";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import React, { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";

interface MeetingScheduleProps {
  date: Date | null;
  value: Dayjs | null;
  etc: string;
  setDate: (event: Date | null) => void;
  setTime: (event: Dayjs | null) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function MeetingSchedule({
  date,
  value,
  etc,
  setDate,
  setTime,
  onBlur,
}: MeetingScheduleProps) {
  const datePickerFormat = "YYYY-MM-DD";

  return (
    <div>
      <div className="mt-10  pt-10 block w-full border-gray-200">
        <h2 className="flex border-b text-lg font-medium text-gray-900  border-gray-300">
          <div className="flex-glow border-b-4 border-b-blue-500">면접</div>
        </h2>
        <div className="mt-10">
          <LabelText text="면접날짜" />
          <div className="mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="날짜 선택"
                format={datePickerFormat}
                value={date}
                onChange={setDate}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="mt-10">
          <LabelText text="면접시간" />
          <div className="mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="시간 선택"
                value={value}
                onChange={setTime}
                referenceDate={dayjs(date)}
              />
              {/* <Typography>
                Stored value: {value == null ? "null" : value.format()}
              </Typography> */}
            </LocalizationProvider>
          </div>
        </div>
        <div className="mt-10">
          <LabelText text="비고(필수서류)" />
          <TextAreaBox
            id="etc"
            holder="입력한 내용이 노출됩니다."
            value={etc}
            onBlur={onBlur}
          />
        </div>
      </div>
    </div>
  );
}
