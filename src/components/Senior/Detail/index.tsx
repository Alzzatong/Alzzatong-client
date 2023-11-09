"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/services/SupabaseClient";
import PhoneNumberInput from "@/components/Template/Input/PhoneInput";
import SeniorNameInput from "../Template/SeniorNameInput";
import SearchButton from "@/components/Template/Button/Search";
import NameInput from "@/components/Template/Input/NameInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import RadioButton from "@/components/Template/Button/RadioButton";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import DropBox from "@/components/Template/SelectBox/DropBox";
import DropBox from "@/components/Template/SelectBox/DropBox";
import { Location, LocationDetail } from "@/components/Senior/Interface/SeniorInterface";
import { BigJobCode, SmallJobCode } from "@/components/Senior/Interface/SeniorInterface";
import ControlWishList from "../Template/ControlWishList";
import CalculateAge from "../Template/CalculateAge";
import RegiNumberInput from "../Template/RegiNumberInput";
import {
  genderItem,
  healthStatusItem,
  scheduleItem,
  workHourItem,
} from "@/components/Senior/Interface/SeniorInterface";

interface DataType {
  senior_id: number;
  name: string;
  gender: number;
  regi_first_num: string;
  regi_second_num: string;
  address: string;
  health_status: number;
  phone_num: string;
  agreement_link: string;
  created_at: Date;
}

interface IdParams {
  sid: number;
}
interface IdType {
  children: React.ReactNode;
  params: IdParams;
}
interface sidProps {
  sid: IdType;
}

export default function SeniorDetail(sid: sidProps) {
  const [callData, setCallData] = useState<DataType[] | null>(null);
  const { fields, handleRemove, handleAdd } = ControlWishList();
  const [firstReginum, setFirstReginum] = useState<string>("");
  const [secondReginum, setSecondReginum] = useState<string>("");

  const call = async () => {
    const { data, error } = await supabase
      .from("senior")
      .select()
      .eq("senior_id", sid.sid.params.sid);

    if (error) {
      console.log(error);
      return;
    }
    setCallData(data);
    // console.log(data);
  };

  useEffect(() => {
    call();
  }, []);

  const selectedData = callData?.map((item) => {
    const senior_id = item.senior_id;
    const name = item.name;
    const gender = item.gender;
    const regi_first_num = item.regi_first_num;
    const regi_second_num = item.regi_second_num;
    const address = item.address;
    const health_status = item.health_status;
    const phone_num = item.phone_num;
    const agreement_link = item.agreement_link;
    const created_at = item.created_at;

    return {
      senior_id,
      name,
      gender,
      regi_first_num,
      regi_second_num,
      address,
      health_status,
      phone_num,
      agreement_link,
      created_at,
    };
  });

  console.log(selectedData);

  return (
    <div>
      <div className="w-full relative bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8 text-black text-4xl font-bold font-['Pretendard'] leading-10">
            <h2 className="">구직자 상세조회</h2>
          </div>
          {callData &&
            callData.map((senior: DataType) => (
              <form
                key={senior.senior_id}
                className="lg:grid lg:gap-x-12 xl:gap-x-16"
              >
                <div className="mt-10 bg-gray-50 rounded-xl">
                  <div>
                    <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100">
                      <div className="flex-1 truncate">
                        <div className="gap-1">
                          <div className="mt-1 flex flex-row items-center space-x-3">
                            <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                              {senior.name}
                            </div>
                            <div className="text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">
                              <CalculateAge
                                regiNumFirst={senior.regi_first_num}
                                regiNumSecond={senior.regi_second_num}
                              />
                              세(만)
                            </div>
                            <div className="mt-1 flex justify-end items-center space-x-3">
                              <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                                등록일&nbsp;|&nbsp;
                                {/* {senior.created_at.slice(0, 10)} */}
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
                            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
                              {senior.senior_id}
                            </div>
                          </div>
                          <div className="mt-4 flex col-span-2">
                            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                                주민번호
                              </div>
                            </div>
                            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
                              {senior.regi_first_num}-{senior.regi_second_num}
                            </div>
                          </div>
                          <div className="mt-4 flex col-span-3">
                            <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                              <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                                주소
                              </div>
                            </div>
                            <div className="mt-1 ml-2 text-black text-sm font-medium font-['Pretendard']">
                              {senior.address}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-5 gap-4">
                          {/* {senior_wishlist&& senior_wishlist.map((wishList: WishListType) => ( */}
                          <div className="mt-4 flex pr-8 py-0.5 gap-2.5">
                            <div
                              //   key={wishList.wish_list_id}
                              className="grid grid-rows-2"
                            >
                              <div className="col-span-1">
                                <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                  {/* <div className="inline-flex"> */}
                                  희망직종
                                  {/* {wishList.priority} */}
                                  <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                    &nbsp;|&nbsp;
                                  </div>
                                  {/* {wishList.job_code_name} */}
                                </div>
                              </div>
                              <div className="col-span-1">
                                <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                  희망근무지
                                  {/* {wishList.priority} */}
                                  <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                    &nbsp;|&nbsp;
                                  </div>{" "}
                                  {/* {wishList.location} */}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ))} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50">
                    <div className="pb-10">
                      <div className="pt-8 ">
                        <h2 className="text-lg font-medium text-gray-900">
                          필수항목
                        </h2>
                        <div className="mt-2 border-t border-gray-200"></div>
                        <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                          <SeniorNameInput></SeniorNameInput>
                          <div>
                            <LabelText gender"} text="성별"></LabelText>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                          {/* - 주민번호가 중복되지 않는지 확인 버튼 추가 필요 */}
                          <RegiNumberInput
                            firstSelect={senior.regi_first_num}
                            secondSelect={senior.regi_second_num}
                          />
                          <div>
                            <LabelText age"} text="만 나이"></LabelText>
                            <div className="mt-1 flex justify-between">
                              <div className="mt-1 block w-full p-2 rounded-md bg-white shadow-sm sm:text-sm"></div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <PhoneInput></PhoneInput>
                        </div>
                        <div className="mt-4">
                          <div>
                            <LabelText address"} text="주소"></LabelText>
                            <NameInput
                              id={"address"}
                              holder="주소를 입력하세요"
                            ></NameInput>
                          </div>
                          <div className="mt-4">
                            <LabelText
                              id={"healthStatus"}
                              text="건강상태"
                            ></LabelText>
                            <RadioButton
                              itemList={healthStatusItem}
                              groupName="상태"
                            ></RadioButton>
                          </div>
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                          <div>
                            <LabelText
                              id={"senior-aggrementLink"}
                              text="개인정보동의서 첨부"
                            />
                            <div className="mt-1">
                              <input
                                type="file"
                                name="file"
                                id="file"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                          <div className="mt-6">
                            <SearchButton></SearchButton>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h2 className="text-lg font-medium text-gray-900">
                        선택 항목
                      </h2>

                      <div className="bg-gray-200 mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                        <div>
                          <LabelText job-type1"} text="경력사항" />
                          {/* <NameInput id={"job-type1"}></NameInput> */}
                        </div>
                        <div>
                          <LabelText NumberOfHires"} text="직장명" />
                          {/* <NameInput id={"NumberOfHires"}></NameInput> */}
                        </div>
                        <div>
                          {/* 급여 */}
                          <LabelText salary"} text="근무기간" />
                          {/* <NameInput id={"salary"}></NameInput> */}
                        </div>
                        <div>
                          {/* 근무형태 */}
                          <LabelText working-type"} text="업무내용" />
                          {/* <NameInput id={"working-type"}></NameInput> */}
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <div>
                        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                          <h2 className="flex text-lg font-medium text-gray-900">
                            필수 항목
                          </h2>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
                              onClick={handleAdd}
                            >
                              + 추가하기
                            </button>
                          </div>
                        </div>
                        {fields.map((_, i) => (
                          <div
                            key={i}
                            className="mt-2 border-t border-gray-200 pt-7"
                          >
                            <div className="flex justify-start">
                              <div className="p-2 bg-white rounded-full border border-blue-500">
                                <div className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                  희망근무지{i + 1}
                                  <button
                                    type="button"
                                    className="px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
                                    onClick={() => handleRemove(i)}
                                  >
                                    <span className="relative">X</span>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="mt-4">
                                <LabelText
                                  id={"company-location"}
                                  text="희망근무지"
                                />

                                <div className="mt-4">
                                  <LabelText
                                    id={"company-address"}
                                    text="희망직종"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="mt-4">
                                  <LabelText
                                    id={"wish-salary"}
                                    text="희망 보수"
                                  ></LabelText>
                                  <NameInput
                                    id={"wish-salary"}
                                    holder="만원/월"
                                  ></NameInput>
                                </div>
                                <div className="mt-4">
                                  <LabelText
                                    id={"work-hour"}
                                    text="근무 시간"
                                  ></LabelText>
                                </div>
                              </div>

                              <div className="mt-6 grid grid-cols-1 gap-y-2">
                                <div>
                                  <LabelText
                                    id={"work-type"}
                                    text="근무 형태"
                                  ></LabelText>
                                </div>
                              </div>
                              <div className="mt-4 mb-8">
                                <div>
                                  <LabelText
                                    id={"senior-etc"}
                                    text="특이사항/자격사항"
                                  />
                                  <TextAreaBox></TextAreaBox>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ))}
        </div>
      </div>
    </div>
  );
}
