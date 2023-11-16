import { MeetingBoxType } from "@/app/matching/meeting_manage/page";

interface MeetingBoxTypeProps {
  meetingBox: MeetingBoxType;
}

export default function MeetingBox({ meetingBox }: MeetingBoxTypeProps) {
  let date = new Date(meetingBox.date);
  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
      <div className="flex-1 truncate">
        <div className="mt-1 flex items-center space-x-3">
          <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
            {meetingBox.company.company_name}
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              주소
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {meetingBox.company.address}
          </div>
          <div className="w-20 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              담당자명
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {meetingBox.company.manager_name}
          </div>
          <div className="w-24 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              담당자 연락처
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {meetingBox.company.manager_phone}
          </div>
        </div>
        {/* 밑줄 하나 */}
        <div className="mt-5 border-b"></div>
        <div className="mt-4 flex justify-between">
          <div className="flex gap-4 ">
            <div className="w-auto h-6 px-2 py-0.5bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-500 text-sm font-normal  font-['Pretendard'] leading-tight">
                면접날짜
              </div>
            </div>
            <div className="mt-1 text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
              {/* 2023.01.01 */}
              {date.getFullYear()}.{date.getMonth()}.{date.getDate()}
            </div>
          </div>
          <div className="flex gap-4">
            {/* 왼쪽으로 정렬 */}
            <div className="w-10 h-6 px-2 py-0.5  bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                구직자명
              </div>
            </div>
            <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
              {meetingBox.senior.name}
            </div>

            <div className="">
              {meetingBox.status === 2 && (
                <div className="w-16 h-7 bg-rose-200 rounded">
                  <div className="px-2 py-1 text-red-500 text-sm font-medium font-['Pretendard'] leading-tight">
                    면접취소
                  </div>
                </div>
              )}
              {meetingBox.status === 1 && (
                <div className="w-16 h-7 bg-indigo-50 rounded">
                  <div className="px-2 py-1 text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
                    면접완료
                  </div>
                </div>
              )}
              {meetingBox.status === 0 && (
                <div className="w-16 h-7 bg-emerald-100 rounded">
                  <div className="px-2 py-1 text-green-400 text-sm font-medium font-['Pretendard'] leading-tight">
                    면접대기
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
