import { supabase } from "@/lib/supabase/supabase";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

interface saveMeetingTimeServerSideProps {
  senior_id: number;
  company_id: number;
  meeting_date: Date | null;
  meeting_time: Dayjs | null;
  content: string;
  status: number; // 미팅 상태  0(면접예정), 1(면접완료), 2(면접취소)
}

export async function saveMeetingTimeServerSide({
  senior_id,
  company_id,
  meeting_date,
  meeting_time,
  content,
  status,
}: saveMeetingTimeServerSideProps) {
  console.log("date: ", meeting_date);
  console.log("time: ", meeting_time);
  const kstDate = dayjs.utc(meeting_date).utcOffset(9).format("YYYY-MM-DD");
  const kstTime = dayjs.utc(meeting_time).utcOffset(9).format("HH:mm:ss");


  const { data, error } = await supabase
    .from("meeting")
    .insert([
      {
        admin_id: 1, // 임시 관리자 아이디
        senior_id: senior_id,
        company_id: company_id,
        date: kstDate,
        time: kstTime,
        content: content,
        status: status,
      },
    ])
    .select("*")
    .single();
  if (error) {
    console.error("Error inserting data: ", error);
  } else {
    // console.log("Date: ", data.date);
    // console.log("Time: ", data.time);
  }
}
