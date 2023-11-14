"use client";
import MeetingSchedule from "@/components/Matching/Detail/MeetingSchedule";
import MatchingTabCompanySearch from "@/components/Matching/Search/MatchingTabCompanySearch";
import { saveMeetingTimeServerSide } from "@/services/supabase/matchingCompanyAPI";
import { Dayjs } from "dayjs";
import React, { Dispatch, FormEvent, SetStateAction, use } from "react";
import { useState } from "react";

export default function CompanyMatchingRecruitsSeniorDetailPage(props: any) {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = React.useState<Dayjs | null>(null);
  const [content, setContent] = useState<string>("");

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  console.log("date: ", date);
  console.log("value: ", time);
  //supabase에 저장

  const handleSubmit = (event: FormEvent) => {
    console.log(props.params.cid);
    event.preventDefault();
    saveMeetingTimeServerSide({
      senior_id: props.params.sid,
      company_id: props.params.cid,
      meeting_date: date,
      meeting_time: time,
      content: content,
      status: 0,
    });
  };

  const handleCancel = (event: FormEvent) => {
    event.preventDefault();
    //초기화
    setDate(null);
    setTime(null);
    setContent("");
    // 페이지 최상단으로 이동
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <form className="lg:grid lg:gap-x-12 xl:gap-x-16">
          <div>
            <h1 className="text-4xl	font-medium text-gray-900">상세조회</h1>
            {/* // 시니어 파트 컴포넌트 되면 적용 */}
            <MeetingSchedule
              date={date}
              value={time}
              etc={content}
              setDate={setDate}
              setTime={setTime}
              onBlur={onBlur}
            />
          </div>
          <div className="mt-20 flex justify-center">
            <button
              className="h-14 w-64 relative bg-blue-500 rounded-full text-center text-white text-xl font-semibold leading-7 hover:bg-blue-600"
              type="button"
              onClick={handleSubmit}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                저장
              </div>
            </button>
            <button
              className="h-14 w-64 relative bg-white rounded-full border border-neutral-200 text-center text-zinc-500 text-xl font-semibold leading-7 ml-4 hover:bg-gray-200"
              type="button"
              onClick={handleCancel}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                취소
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
