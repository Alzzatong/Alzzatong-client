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

interface getSeniorInfoListProps {
  region: string;
  location: string;
  job_type: string;
  setSeniors: ([]) => void;
}

interface MeetingBoxType {
  year: string;
  companyName: string;
  seniorName: string;
  status: number;
  setMeetingBoxs: ([]) => void;
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

// 희망 근무지와 희망 직종에 맞는 구직자조회
export const getSeniorInfoList = async ({
  region,
  location,
  job_type,
  setSeniors,
}: getSeniorInfoListProps) => {
  let { data, error } = await supabase
    .from("senior_wishlist")
    .select(`senior_id`)
    .eq("location", region)
    .eq("location_detail", location)
    .eq("job_type_name", job_type);

  if (error) console.error("Error loading data: ", error);
  else {
    if (data && data.length > 0) {
      let tempSenior = []; // 임시 배열 생성
      console.log("data: ", data);
      for (let i = 0; i < data.length; i++) {
        let { data: seniorData, error: seniorError } = await supabase
          .from("senior")
          .select(`*`)
          .eq("senior_id", data[i].senior_id)
          .single();
        if (seniorError) console.error("Error loading data: ", seniorError);
        else {
          // console.log("seniorData: ", seniorData);
          tempSenior.push(seniorData);
        }
      }
      setSeniors(tempSenior);
    }
  }
};

export const getMeetingList = async ({
  year,
  companyName,
  seniorName,
  status,
  setMeetingBoxs,
}: MeetingBoxType) => {
  let query = supabase
    .from("meeting")
    // 면접 날짜, 회사이름, 주소, 담당자명, 담당자 연락처, 구직자 명, 면접 상태
    .select(
      `id, date, status, company(company_name, address, manager_name, manager_phone), senior(name)`
    )
    // 사업년도 빈칸이면 1960보다 큰 수 검색
    .gte("company.business_year", year === "" ? 1960 : year)
    // 회사이름도 포함으로 검색, 만약 빈칸이면 모든 회사 검색
    .ilike(
      "company.company_name",
      companyName === "" ? "*" : `%${companyName}%`
    )
    // 시니어 이름은 포함으로 검색
    .ilike("senior.name", seniorName === "" ? "*" : `%${seniorName}%`);
  // 대기 0, 완료 1, 취소 2, 만약 3이라면 전체검색
  if (status !== 3) {
    query = query.filter("status", "eq", status);
  }
  let { data, error } = await query;

  if (error) console.error("Error loading data: ", error);
  if (data && data.length > 0) {
    setMeetingBoxs(data);
  }
};
