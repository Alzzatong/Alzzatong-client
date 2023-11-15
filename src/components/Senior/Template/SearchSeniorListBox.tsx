import {
  GetSeniorWishList,
  SeniorJoinWish,
  SmallJobCode,
} from "../Interface/SeniorInterface";
import Link from "next/link";
import CalculateAge from "./CalculateAge";

interface SearchListBoxProps {
  data: SeniorJoinWish[] | null | undefined; // replace 'any' with the type of your data
}

export const SearchSeniorListBox: React.FC<SearchListBoxProps> = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((data: SeniorJoinWish) => {
          let dateObject = new Date(data.created_at);
          let dateString = dateObject.toISOString();
          let createDate = dateString.slice(0, 10);
          return (
            <div
              key={data.senior_id}
              role="list"
              className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
            >
              <div
                key={data.senior_id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <Link href={`/senior/${data.senior_id}/detail`}>
                  <ul className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded-lg">
                    <li className="flex-1 truncate">
                      <div className="gap-1">
                        <div className="mt-1 flex flex-row items-center space-x-3">
                          <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                            {data.name}
                          </div>
                          <div className="flex text-blue-500 text-xl font-bold font-['Pretendard'] leading-tight">
                              <CalculateAge
                                regiNumFirst={data.regi_first_num}
                                regiNumSecond={data.regi_second_num}
                              />
                              <div className="text-black text-xl ml-0.5 font-bold font-['Pretendard'] leading-tight">
                                세(만)
                              </div>
                          </div>
                          <div className="mt-1 items-center space-x-3">
                            <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                              등록일: {createDate}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-4">
                        <div className="mt-4 flex col-span-1">
                          <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                            <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                              번호
                            </div>
                          </div>
                          <div className="px-2 py-0.5 text-black text-sm font-medium font-['Pretendard']">
                            {data.senior_id}
                          </div>
                        </div>
                        <div className="mt-4 flex col-span-2">
                          <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                            <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                              주민번호
                            </div>
                          </div>
                          <div className="px-2 py-0.5 text-black text-sm font-medium font-['Pretendard']">
                            {data.regi_first_num}-{data.regi_second_num}
                          </div>
                        </div>
                        <div className="mt-4 flex col-span-3">
                          <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                            <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                              주소
                            </div>
                          </div>
                          <div className="px-2 py-0.5 text-black text-sm font-medium font-['Pretendard']">
                            {data.address}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {data.senior_wishlist.map(
                          (wishList: GetSeniorWishList) => (
                            <div
                              key={wishList.wish_list_id}
                              className="mt-4 flex pr-8 py-0.5 gap-2.5"
                            >
                              <div className="grid grid-rows-1">
                                <div className="col-span-1">
                                  <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                    <div className="inline-flex">
                                      희망직종 {wishList.priority}
                                      <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                        &nbsp;|&nbsp;
                                      </div>
                                      <div>
                                        {SmallJobCode[
                                          wishList.job_code_number
                                        ].map((item) => {
                                          if (
                                            item.id === wishList.job_type_name
                                          ) {
                                            return (
                                              <div key={item.id}>
                                                {item.title}
                                              </div>
                                            );
                                          }
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-span-1">
                                    <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                      희망근무지 {wishList.priority}
                                      <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                        &nbsp;|&nbsp;
                                      </div>
                                      {wishList.location}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </li>
                  </ul>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};
