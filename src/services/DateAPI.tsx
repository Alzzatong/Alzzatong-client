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
    parse: (value: string) => dayjs(value, datePickerFormat, true).toDate(),
  };

  const handleDateChange = (event: Date | null) => {
    setDate(event);
  };

  return (
    <div>
      날짜입력
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer>
            <DatePicker
              label="날짜 선택"
              format={datePickerFormat}
              onChange={handleDateChange}
            ></DatePicker>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}
