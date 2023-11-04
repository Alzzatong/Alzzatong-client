"use client";
import { useState } from "react";
import PhoneInput from "@/components/Template/Input/PhoneInput";
import ResidentNumberInput from "../Template/RegiNumberInput";
import SeniorNameInput from "../Template/SeniorNameInput";
import SearchButton from "@/components/Template/Button/Search";
import NameInput from "@/components/Template/Input/NameInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import RadioButton from "@/components/Template/Button/RadioButton";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import DropBox from "@/components/Template/SelectBox/DropBox";
import MultiDropBox from "@/components/Template/SelectBox/MultiDropBox";
import { BigDistrict, SmallDistrict } from "@/components/Dummy/District";
import { BigJobCode, SmallJobCode } from "@/components/Dummy/JobCode";
import ControlWishList from "../Template/ControlWishList";
import CalculateAge from "../Template/CalculateAge";
import { RegiNumberContext } from "../Template/RegiNumberInput";

const healthStatus = [
  { id: "1", title: "좋은편" },
  { id: "2", title: "보통" },
  { id: "3", title: "나쁜편" },
];

const genderItem = [
  { id: "1", title: "남성" },
  { id: "2", title: "여성" },
];

const workHour = [
  { id: "4", title: "일/4시간" },
  { id: "5", title: "일/5시간" },
  { id: "6", title: "일/6시간" },
  { id: "7", title: "일/7시간" },
  { id: "8", title: "일/9시간" },
];

const schedule = [
  { id: "주5일", title: "주5일" },
  { id: "주3~4일", title: "주3~4일" },
  { id: "주3일 미만", title: "주3일 미만" },
  { id: "종일제", title: "종일제" },
  { id: "격일제", title: "격일제" },
  { id: "시간제", title: "시간제" },
  { id: "관계없음", title: "관계없음" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SeniorRegister() {
  const { fields, handleRemove, handleAdd } = ControlWishList();
  const [firstPart, setFirstPart] = useState<string>("");
  const [secondPart, setSecondPart] = useState<string>("");

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">구직자 등록</h2>

        <form className="lg:grid lg:gap-x-12 xl:gap-x-16">
          <div>
            <div className="pb-10">
              <h1 className="text-4xl	font-medium text-gray-900">구직자 등록</h1>

              <div className="mt-20">
                <h2 className="text-lg font-medium text-gray-900">필수항목</h2>
                <div className="mt-2 border-t border-gray-200"></div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <SeniorNameInput></SeniorNameInput>
                  <div>
                    <LabelText id={"gender"} text="성별"></LabelText>
                    <DropBox itemList={genderItem} groupName="성별"></DropBox>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  {/* - 주민번호가 중복되지 않는지 확인 버튼 추가 필요 */}
                  <RegiNumberContext.Provider
                    value={{
                      firstPart,
                      secondPart,
                      setFirstPart,
                      setSecondPart,
                    }}
                  >
                    <ResidentNumberInput></ResidentNumberInput>
                    <div>
                      <LabelText id={"age"} text="만 나이"></LabelText>
                      <div className="mt-1 flex justify-between">
                        <div className="mt-1 block w-full p-2 rounded-md bg-white shadow-sm sm:text-sm">
                          <CalculateAge></CalculateAge>
                        </div>
                      </div>
                    </div>
                  </RegiNumberContext.Provider>
                </div>
                <div>
                  <PhoneInput></PhoneInput>
                </div>
                <div className="mt-4">
                  <div>
                    <LabelText id={"address"} text="주소"></LabelText>
                    <NameInput
                      id={"address"}
                      holder="주소를 입력하세요"
                    ></NameInput>
                  </div>
                  <div className="mt-4">
                    <LabelText id={"healthStatus"} text="건강상태"></LabelText>
                    <RadioButton
                      itemList={healthStatus}
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
              <h2 className="text-lg font-medium text-gray-900">선택 항목</h2>

              <div className="bg-gray-200 mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div>
                  <LabelText id={"job-type1"} text="경력사항" />
                  {/* <NameInput id={"job-type1"}></NameInput> */}
                </div>
                <div>
                  <LabelText id={"NumberOfHires"} text="직장명" />
                  {/* <NameInput id={"NumberOfHires"}></NameInput> */}
                </div>
                <div>
                  {/* 급여 */}
                  <LabelText id={"salary"} text="근무기간" />
                  {/* <NameInput id={"salary"}></NameInput> */}
                </div>
                <div>
                  {/* 근무형태 */}
                  <LabelText id={"working-type"} text="업무내용" />
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
                  <div className="mt-2 border-t border-gray-200 pt-7">
                    <div className="flex justify-start">
                      <div className="p-2 bg-white rounded-full border border-blue-500">
                        <div
                          key={i}
                          className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight"
                        >
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
                        <LabelText id={"company-location"} text="희망근무지" />
                        <MultiDropBox
                          itemList1={BigDistrict}
                          itemList2={SmallDistrict}
                          groupName="근무지 분류"
                        />
                        <div className="mt-4">
                          <LabelText id={"company-address"} text="희망직종" />
                          <MultiDropBox
                            itemList1={BigJobCode}
                            itemList2={SmallJobCode}
                            groupName="근무지 분류"
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
                          <DropBox
                            itemList={workHour}
                            groupName="근무 시간"
                          ></DropBox>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-1 gap-y-2">
                        <div>
                          <LabelText
                            id={"work-type"}
                            text="근무 형태"
                          ></LabelText>
                          <RadioButton
                            itemList={schedule}
                            groupName="근무 형태"
                          ></RadioButton>
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
        </form>
      </div>
    </div>
  );
}
