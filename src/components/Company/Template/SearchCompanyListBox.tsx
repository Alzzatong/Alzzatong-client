import MoneyIcon from "@/styles/svgs/moneyIcon";
import Link from "next/link";

//   interface SearchListBoxProps {
//     data: SeniorJoinWish[] | null | undefined;
//   }

export const SearchCompanyListBox: React.FC<any> = ({ data, sid }) => {
  const senior_id = sid;
  console.log(data, "recruitLocation를 SearchCompanyListBox가 전달받음");
  return (
    <div>
      {data &&
        data.map((company: any) => {
          return company.recruit.map((list: any, index: number) => {
            return (
              <div
                key={index}
                className="flex w-full mt-2 items-center justify-between space-x-6 p-6 bg-gray-100 shadow rounded-lg"
              >
                <Link href={`/matching/senior/${senior_id}/${company.id}/`}>
                  <div className="truncate">
                    <div className="flex-1 gap-1">
                      <div className="mt-1 space-x-3">
                        <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                          {company.company_name}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                      <div className="mt-4 flex col-span-1">
                        <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                            엄무 담당자
                          </div>
                        </div>
                        <div className="px-2 py-0.5 text-black text-sm font-medium font-['Pretendard']">
                          {company.manager_name}
                        </div>
                      </div>
                      <div className="mt-4 flex col-span-2">
                        <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                            담당자 연락처
                          </div>
                        </div>
                        <div className="px-2 py-0.5 text-black text-sm font-medium font-['Pretendard']">
                          {company.manager_phone}
                        </div>
                      </div>
                      <div className="mt-4 flex col-span-3">
                        <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                          <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                            주소
                          </div>
                        </div>
                        <div className="px-2 py-0.5 text-black text-sm font-medium font-['Pretendard']">
                          {company.address}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex pt-0.5 gap-2.5 -mb-4">
                      <div className="flex-1">
                        <div className="grid grid-cols-4 gap-8">
                          <div className="grid grid-rows-2">
                            <div className="grid grid-cols-2 gap-2 py-2 text-left text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              <div>구인 직무1</div>
                              <div className="text-blue-500 font-semibold">
                                {list.job_type}
                              </div>
                            </div>
                            <div className="grid grid-rows-2">
                              <div className="grid grid-cols-2 gap-2 pt-0.5 text-left text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                <div>근무형태</div>
                                <div className="font-semibold">
                                  {list.working_type}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-rows-2">
                            <div className="grid grid-cols-2 gap-2 py-2 text-left text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              <div>구인 인원</div>
                              <div className="font-semibold">
                                {list.number_of_hires}명
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-0.5 text-left text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                              <div>일 근로시간</div>
                              <div className="font-semibold">
                                {list.work_start_hour}시~{list.work_end_hour}시
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-blue-500 pt-8">
                        <MoneyIcon></MoneyIcon>
                      </div>
                      <div className="justify-end pt-8 mr-4 text-right">
                        <div className="text-lg font-extrabold font-['Pretendard'] leading-tight">
                          <span className="mr-2">급여</span>
                          <span className="text-blue-500 mr-1">100</span>
                          <span>만원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          });
        })}
    </div>
  );
};
