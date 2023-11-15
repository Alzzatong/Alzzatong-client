"use client";
import { SmallJobCode } from "@/components/Senior/Interface/SeniorInterface";
import CalculateAge from "@/components/Senior/Template/CalculateAge";
import CancelButton from "@/components/Template/Button/CancelButton";
// import BigTitle from "@/components/Template/LabelText/BigTitle";
import {
  getAllRecruitByLocation,
  getSeniorLightSearch,
} from "@/queries/SelectSenior";
import { useEffect, useState } from "react";
import { SearchCompanyListBox } from "@/components/Company/Template/SearchCompanyListBox";

export default function SeniorMatchingCampanyPage(props: any) {
  const [seniorDetail, setSeniorDetail] = useState<any>();
  const [recruitLocation, setRecruitLocation] = useState<any>();
  const senior_id = props.params.sid;

  useEffect(() => {
    getSeniorLightSearch(senior_id).then((data) => setSeniorDetail(data));
  }, []);

  useEffect(() => {
    if (!seniorDetail) {
      // The state hasn't been updated yet, so we return early
      return console.log("we try so early");
    }
    if (seniorDetail) {
      const location: string[] = seniorDetail?.map((data: any) => {
        return data.senior_wishlist.map((item: any) => {
          return item.location;
        });
      });
      console.log(location, "location은??");
      getAllRecruitByLocation(location).then((data) => setRecruitLocation(data));
    }
  }, [seniorDetail]);

  //url /matching/senior/으로 이동
  function onButtonClick() {
    console.log("뒤로가기");
    window.location.href = "/matching/senior/";
  }

  const handleLocationCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("추후 추가");
  };

  return (
    <div className="bg-gray-50" style={{ maxHeight: "800px" }}>
      <div className="mx-auto max-w-2xl px-4  pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <BigTitle
          text="구직자 매칭"
          className="mt-2 mb-4 text-4xl font-bold text-gray-900"
        ></BigTitle> */}
        <div className="mt-2 mb-4 text-4xl font-bold text-gray-900">구직자 매칭</div>
        <div>
          <div
            role="list"
            className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
          >
            <div className="col-span-1  divide-gray-200 rounded-lg">
              <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 shadow rounded-lg">
                {seniorDetail &&
                  seniorDetail.map((data: any) => {
                    return (
                      <div key={data.senior_id} className="flex-1 truncate">
                        <div className="gap-1">
                          <div className="mt-1 flex flex-row items-center space-x-3">
                            <div className="text-black text-xl font-bold font-['Pretendard'] leading-tight">
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
                             
                          </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4 pb-5 border-b-2 border-gray-200 ">
                          <div className="mt-4 flex col-span-1">
                            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                                번호
                              </div>
                            </div>
                            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
                              {senior_id}
                            </div>
                          </div>
                          <div className="mt-4 flex col-span-2">
                            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                                전화번호
                              </div>
                            </div>
                            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
                              {data.phone_num}
                            </div>
                          </div>
                          <div className="mt-4 flex col-span-3">
                            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                                주소
                              </div>
                            </div>
                            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
                              {data.address}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {data.senior_wishlist.map(
                            (wishList: any, i: number) => (
                              <div
                                key={wishList.wish_list_id}
                                className="mt-4 flex pr-8 py-0.5 gap-2.5"
                              >
                                <div className="grid grid-rows-1">
                                  <div className="col-span-1">
                                    <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                      <input
                                        type="checkbox"
                                        className="relative w-5 h-5 left-0 top-0 bg-blue-500 mr-2"
                                        onChange={handleLocationCheck}
                                      ></input>
                                      희망근무지 {wishList.priority}
                                      <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                        &nbsp;|&nbsp;
                                      </div>
                                      {wishList.location}
                                    </div>
                                  </div>
                                  <div className="col-span-1">
                                    <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                      <input
                                        type="checkbox"
                                        className="relative w-5 h-5 left-0 top-0 bg-blue-500 mr-2"
                                      ></input>
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
                                            )
                                              return (
                                                <div key={item.id}>
                                                  {item.title}
                                                </div>
                                              );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div>
              <div className="mt-8">
                <div className="inline">
                  <span className="text-black text-xl font-medium font-['Pretendard'] leading-7 mr-1">
                    매칭
                  </span>
                  <span className="text-blue-500 text-xl font-medium font-['Pretendard'] leading-7">
                    3
                  </span>
                </div>
              </div>
              <div>
                {recruitLocation && <SearchCompanyListBox data={recruitLocation}></SearchCompanyListBox>}
              </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center bg-gray-50 pb-24">
            <CancelButton text="뒤로" onClose={onButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
