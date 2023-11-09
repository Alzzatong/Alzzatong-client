"use client";
import { useState, useRef, FormEvent } from "react";
import PhoneNumberInput from "@/components/Template/Input/PhoneInput";
import RegiNumberInput from "../Template/RegiNumberInput";
import SeniorNameInput from "../Template/SeniorNameInput";
import SearchButton from "@/components/Template/Button/Search";
import NameInput from "@/components/Template/Input/NameInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import RadioButton from "@/components/Template/Button/RadioButton";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import DropBox from "@/components/Template/SelectBox/DropBox";
import {
  healthStatusItem,
  genderItem,
  scheduleItem,
  workHourItem,
  Location,
  LocationDetail,
  BigJobCode,
  SmallJobCode,
  initialSeniorData,
  initialSeniorWishList,
  SeniorData,
  SeniorWishList,
  SeniorCareer,
} from "@/components/Senior/Interface/SeniorInterface";
import ControlWishList from "../Template/ControlWishList";
import ControlOptionalList from "../Template/ControlOptionalList";
import CalculateAge from "../Template/CalculateAge";
import {} from "@/components/Senior/Interface/SeniorInterface";
import TextInput from "../Template/TextInput";
import CustomButton from "@/components/Template/Button/CustomButton";
import AddButton from "@/components/Template/Button/Add";
import { supabase } from "@/lib/supabase/supabase";
import StringInput from "@/components/Template/Input/StringInput";
import NumberInput from "@/components/Template/Input/NumberInput";
import RadioNumberButton from "@/components/Template/Button/RadioNumberButton";
import FileInputButton from "@/components/Template/Button/FileBtn";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SeniorRegister() {
  // const [form, setForm] = useState([{}]);
  const { fields, handleAdd, handleRemove } = ControlWishList();
  // const { optionFields, handleOptionAdd, handleOptionRemove } =
  //   ControlOptionalList();
  const [reset, setReset] = useState(false);
  const [seniorData, setSeniorData] = useState<SeniorData>({
    name: "",
    regi_first_num: "",
    regi_second_num: "",
    gender: 1,
    address: "",
    health_status: 1,
    phone_num: "",
    agreement_link: "",
  });
  const [wishlistData, setWishlistData] = useState<SeniorWishList>({
    location: "",
    location_detail: "",
    job_code_number: 1,
    job_code_name: "",
    priority: 1,
    salary: 0,
    work_hour: 8,
    work_type: 1,
    etc: "",
  });

  const [careerData, setCareerData] = useState<SeniorCareer[]>([
    {
      company_name: "",
      start_period: new Date("2020-01-01"),
      end_period: new Date("2020-12-31"),
      task_type: "",
    },
  ]);

  // const [optionFields, setOptionFields] = useState([""]);

  const [firstReginum, setFirstReginum] = useState<string>("");
  const [secondReginum, setSecondReginum] = useState<string>("");

  const [firstLocation, setFirstLocation] = useState<string>("서울");
  const [secondLocation, setSecondLocation] = useState<string>("강남구");

  const [bigJobCode, setBigJobCode] = useState<number>(1);
  const [smallJobCode, setSmallJobCode] = useState<string>("01");

  const handleCancel = (e: FormEvent) => {
    e.preventDefault();
    // 페이지 최상단으로 이동
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSeniorTableInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSeniorData({
      ...seniorData,
      [e.target.name]: e.target.value,
    });
    console.log(setSeniorData, "handle Senior Table InputChange");
  };

  const handleSeniorWishListTableInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWishlistData({
      ...wishlistData,
      [e.target.name]: e.target.value,
    });
    console.log(setWishlistData, "handle SeniorWishList Table InputChange");
  };

  const [optionFields, setOptionFields] = useState<number[]>();

  const handleCareerTableInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    entryindex: number
  ) => {
    const updateCareerData = [...careerData];
    updateCareerData[entryindex] = {
      ...updateCareerData[entryindex],
      [e.target.id]: [e.target.value],
    };
    setCareerData(updateCareerData);
    console.log(setCareerData, "handle Career Table InputChange");
  };

  // const handleOptionAdd = () => {
  //       if (optionFields.length >= 5) {
  //         alert("더 이상 선택항목을 추가할 수 없습니다.");
  //       } else {
  //           setOptionFields([...optionFields, ""]);
  //       }
  // };
  const handleOptionAdd = () => {
    if (careerData.length >= 5) {
      alert("더 이상 선택항목을 추가할 수 없습니다.");
    } else {
      setCareerData([
        ...careerData,
        {
          company_name: "",
          start_period: new Date("2020-01-01"),
          end_period: new Date("2020-12-31"),
          task_type: "",
        },
      ]);
    }
  };

  //선택항목 파트 제거
  const handleOptionRemove = (index: number) => {
    if (careerData.length === 1) {
      alert("더 이상 삭제할 수 없습니다.");
    } else {
      // const updateCareerData = [...careerData];
      // updateCareerData.filter(index);
      const updatedCareerData = careerData.filter((_, i) => i !== index);
      setCareerData(updatedCareerData);
      console.log(setCareerData, "handleOptionRemove");
    }
  };
  // const handleOptionRemove = (index: number) => {
  //       if (optionFields.length === 1) {
  //         alert("더 이상 삭제할 수 없습니다.");
  //       } else {
  //           setOptionFields(optionFields.filter((_, i) => i !== index));
  //       }
  // };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWishlistData({
      ...wishlistData,
      [e.target.name]: e.target.value,
    });
    console.log(setWishlistData, "handle -wishlistData- TextArea Change");
  };

  const handleDropBoxSeniorTableChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSeniorData({
      ...seniorData,
      [e.target.id]: e.target.value,
    });
    console.log(setWishlistData, "handle -SeniorTable- DropBox Change");
  };

  const handleDateCareerTableChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCareerData({
      ...careerData,
      [e.target.id]: e.target.value,
    });
    console.log(setWishlistData, "handle -SeniorTable- DropBox Change");
  };

  const handleSubmitTest = async (e: React.FormEvent<HTMLButtonElement>) => {
    console.log("handleSubmitTest");
    console.log(seniorData, wishlistData, careerData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("handleSubmit");

    // Insert senior Table to supabase
    const { data: senior_data, error: senior_error } = await supabase
      .from("senior")
      .insert([seniorData]);
    if (senior_error) {
      console.log("handleSubmit=insert data fail. Error.", senior_error);
    } else {
      console.log("handleSubmit=insert Success.");
    }

    // Insert senior_wishlist Table to supabase
    const { data: wishlist_data, error: wishlist_error } = await supabase
      .from("senior_wishlist")
      .insert([seniorData]);
    if (wishlist_error) {
      console.log("handleSubmit=insert data fail. Error.", wishlist_error);
    } else {
      console.log("handleSubmit=insert Success.");
    }

    alert("저장되었습니다.");
  };

  // const [workHourValue, setWorkHourValue] = useState<number>(4);

  // const [name, setName] = useState<string>("홍길동");
  // const [gender, setGender] = useState<number>();
  // const [address, setAddress] = useState<string>("");

  // const [healthStatus, setHealthStatus] = useState<number>(1);
  // const [aggrementLink, setAggrementLink] = useState<string>("");
  // const [companyName, setCompanyNameName] = useState<string>("");
  // const [startPeriod, setStartPeriod] = useState<Date>();
  // const [endPeriod, setEndPeriod] = useState<Date>();
  // const [taskType, setTaskType] = useState<string>("");
  // const [jobCodeBig, setJobCodeBig] = useState<number>(0);
  // const [jobCodeSmall, setJobCodeSmall] = useState<string>("");
  // const [priority, setPriority] = useState<number>(1);
  // const [salary, setSalary] = useState<number>();
  // const [workType, setWorkType] = useState<number>();
  // const [etc, setEtc] = useState<string>("");

  // const selectFirstLocation = (e: string) => {
  //   setFirstLocation(e);
  //   console.log(setFirstLocation, "selectFirstLocation");
  // };

  // const selectSecondLocation = (e: string) => {
  //   setSecondLocation(e);
  //   console.log(setSecondLocation, "selectSecondLocation");
  // };

  const selectFirstReginumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstReginum(e.target.value);
    setSeniorData({
      ...seniorData,
      [e.target.name]: e.target.value,
    });
    console.log(setSeniorData, "selectFirstReginumber InputChange");
  };

  const selectSecondReginumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondReginum(e.target.value);
    setSeniorData({
      ...seniorData,
      [e.target.name]: e.target.value,
    });
    console.log(setSeniorData, "selectFirstReginumber InputChange");
  };

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setSeniorData({
      ...seniorData,
      phone_num: newPhoneNumber,
    });
    console.log(setSeniorData, "handle PhoneNumber Change");
  };

  // 동의서 저장 handler 필요
  const handlerSeniorAggrementLink = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.value;
    console.log(file);
    if (file) {
      console.log("file is 정상");
    } else {
      console.log("file is error...");
    }
    setSeniorData({
      ...seniorData,
      [e.target.name]: e.target.value,
    });
    console.log(setSeniorData, "handler Senior AggrementLink");
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">구직자 등록</h2>

        <form className="lg:grid lg:gap-x-12 xl:gap-x-16">
          <div>
            <div className="pb-10">
              <h1 className="text-4xl	font-medium text-gray-900">구직자 등록</h1>

              <div className="mt-20">
                <h2 className="text-lg font-medium text-gray-900">필수 항목</h2>
                <div className="mt-2 border-t border-gray-200"></div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="성명"></LabelText>
                    <StringInput
                      id="name"
                      holder="성명"
                      value={seniorData.name}
                      onChange={handleSeniorTableInputChange}
                    />
                  </div>
                  <div>
                    <LabelText text="성별"></LabelText>
                    <DropBox
                      id="gender"
                      itemList={genderItem}
                      groupName="성별"
                      onSelect={handleDropBoxSeniorTableChange}
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    {/* - 주민번호가 중복되지 않는지 확인 버튼 추가 필요 */}
                    <LabelText text="주민번호"></LabelText>
                    <RegiNumberInput
                      firstSelect={selectFirstReginumber}
                      secondSelect={selectSecondReginumber}
                    />
                  </div>
                  <div>
                    <LabelText text="만 나이"></LabelText>
                    <div className="mt-1 flex justify-between">
                      <div className="mt-1 block w-full p-2 rounded-md bg-white shadow-sm sm:text-sm">
                        <CalculateAge
                          regiNumFirst={firstReginum}
                          regiNumSecond={secondReginum}
                        />
                        세
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <LabelText text="전화번호"></LabelText>
                  <PhoneNumberInput
                    onPhoneNumberChange={handlePhoneNumberChange}
                    reset={reset}
                    setReset={setReset}
                  ></PhoneNumberInput>
                </div>
                <div className="mt-4">
                  <div>
                    <LabelText text="주소"></LabelText>
                    <StringInput
                      id="address"
                      holder="주소를 입력하세요"
                      value={seniorData.address}
                      onChange={handleSeniorTableInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <LabelText text="건강상태"></LabelText>
                    <RadioNumberButton
                      itemList={healthStatusItem}
                      groupName="건강상태"
                      onChange={handleSeniorTableInputChange}
                      value={seniorData.health_status}
                    />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="개인정보동의서 첨부" />
                    <div className="mt-1">
                      <input
                        type="file"
                        name="agreement_link"
                        id="agreement_link"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={handlerSeniorAggrementLink}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="flex text-lg font-medium text-gray-900">
                선택 항목
              </h2>
              <div className="flex justify-end">
                <AddButton addItem={handleOptionAdd} />
              </div>
              <div className="">
                <div className="mt-5 border-t">
                  <div className="mt-6 bg-gray-200 grid grid-cols-9 gap-x-4 gap-y-6 justify-items-center">
                    <div className="col-span-2">
                      <LabelText text="경력사항" />
                    </div>
                    <div className="col-span-2">
                      <LabelText text="직장명" />
                    </div>
                    <div className="col-span-2">
                      <LabelText text="근무기간" />
                    </div>
                    <div className="col-span-2">
                      <LabelText text="업무내용" />
                    </div>
                  </div>
                  {careerData.map((data, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-9 gap-x-4 gap-y-6 mt-3 justify-items-center"
                    >
                      <div className="col-span-2">{i}</div>
                      <div className="col-span-2">
                        <StringInput
                          id="company_name"
                          holder="회사명"
                          value={data.company_name}
                          onChange={(e) => handleCareerTableInputChange(e, i)}
                        />
                      </div>
                      <div className="col-span-2">
                        {/* <StringInput 
                          id=""
                          holder=""
                          value={careerData.start_period}
                          onChange={(e) => handleCareerTableInputChange(e, i+1)}
                        /> */}
                        2020.01.01~2023.12.31
                      </div>
                      <div className="col-span-2">
                        <StringInput
                          id="task_type"
                          holder="업무 내용"
                          value={data.task_type}
                          onChange={(e) => handleCareerTableInputChange(e, i)}
                        />
                      </div>
                      <div className="col-span-1 justify-items-end mt-4">
                        <CustomButton
                          label="X"
                          onClick={() => handleOptionRemove(i)}
                          className="rounded px-2 py-1 text-xs font-semibold text-gray-600 shadow-sm hover:bg-slate-300"
                        />
                      </div>
                    </div>
                  ))}
                  {/* {optionFields.map((_, i) => (
                    // 리스트형식으로 변경예정. li, ul.
                    <div
                      key={i + 1}
                      className="grid grid-cols-9 gap-x-4 gap-y-6 mt-3 justify-items-center"
                    >
                      <div className="col-span-2">{i + 1}</div>
                      <div className="col-span-2">
                        <StringInput 
                          id="company_name"
                          holder="회사명"
                          value={careerData.company_name}
                          onChange={(e) => handleCareerTableInputChange(e, i+1)}
                        />
                      </div>
                      <div className="col-span-2">
                        2020.01.01~2023.12.31
                      </div>
                      <div className="col-span-2">
                        <StringInput 
                          id="task_type"
                          holder="업무 내용"
                          value={careerData.task_type}
                          onChange={(e) => handleCareerTableInputChange(e, i+1)}
                        />
                      </div>
                      <div className="col-span-1 justify-items-end mt-4">
                        <CustomButton
                          label="X"
                          onClick={() => handleOptionRemove(i)}
                          className="rounded px-2 py-1 text-xs font-semibold text-gray-600 shadow-sm hover:bg-slate-300"
                        />
                      </div>
                    </div>
                  ))} */}
                </div>

                <div className="mt-12">
                  <div>
                    <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <h2 className="flex text-lg font-medium text-gray-900">
                        필수 항목
                      </h2>
                      <div className="flex justify-end">
                        <CustomButton
                          label="+ 추가하기"
                          onClick={handleAdd}
                          className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-indigo-100"
                        />
                      </div>
                    </div>
                    {fields.map((_, i) => (
                      <div
                        key={i + 1}
                        className="mt-2 border-t border-gray-200 pt-7"
                      >
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
                            <LabelText text="희망근무지" />
                            {/* <DropBox
                              itemList={Location}
                              groupName="근무지 대분류"
                              onSelect={selectFirstLocation}
                              className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {firstLocation && (
                              <DropBox
                                itemList={LocationDetail[firstLocation]}
                                groupName="근무지 중분류"
                                onSelect={selectSecondLocation}
                                className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            )} */}
                          </div>

                          <div className="mt-4">
                            <LabelText text="희망직종" />
                            {/* <DropBox
                              itemList={BigJobCode}
                              groupName="직종 대분류"
                              onSelect={selectBigJobCode}
                              className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {bigJobCode && (
                              <DropBox
                                itemList={SmallJobCode[bigJobCode]}
                                groupName="직종 중분류"
                                onSelect={selectSmallJobCode}
                                className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            )} */}
                          </div>

                          <div>
                            <div className="mt-4">
                              <LabelText text="희망 보수"></LabelText>
                              {/* <TextInput
                                inputName="wish-salary"
                                holder="만원/월"
                                onClick={selectSalary}
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              /> */}
                              <NumberInput
                                id="salary"
                                holder="만원/월"
                                value={wishlistData.salary}
                                onChange={handleSeniorWishListTableInputChange}
                              />
                            </div>
                            <div className="mt-4">
                              <LabelText text="근무 시간"></LabelText>
                              {/* <DropBox
                                id="wish-workHour"
                                itemList={workHourItem}
                                groupName="근무 시간"
                                onSelect={handleSeniorWishListTableInputChange}
                                // className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              /> */}
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-1 gap-y-2">
                            <div>
                              <LabelText text="근무 형태"></LabelText>
                              <RadioNumberButton
                                itemList={scheduleItem}
                                groupName="근무 형태"
                                value={wishlistData.work_type}
                                onChange={handleSeniorWishListTableInputChange}
                              />
                              {/* <Radio
                                itemList={scheduleItem}
                                groupName="근무 형태"
                                onClick={selectWorkType}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              /> */}
                            </div>
                          </div>

                          <div className="mt-4 mb-8">
                            <div>
                              <LabelText text="특이사항/자격사항" />
                              {/* <TextAreaBox></TextAreaBox> */}
                              {/* <TextInput
                                inputName="senior-etc"
                                holder="특이사항/자격사항"
                                onClick={selectEtc}
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              /> */}
                              <div className="mt-2">
                                {/* <textarea
                                  rows={4}
                                  name="senior-etc"
                                  id="senior-etc"
                                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                  onBlur={selectEtc}
                                /> */}
                                <TextAreaBox
                                  id="etc"
                                  holder="기타사항"
                                  value={wishlistData.etc}
                                  onChange={handleTextAreaChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-20 ">
              <button
                type="button"
                className="h-14 w-64 relative bg-blue-500 rounded-full text-center text-white text-xl font-semibold leading-7 hover:bg-blue-600"
                onClick={handleSubmitTest}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  저장
                </div>
              </button>
              <button
                type="button"
                className="h-14 w-64 relative bg-white rounded-full border border-neutral-200 text-center text-zinc-500 text-xl font-semibold leading-7 ml-4 hover:bg-gray-200"
                onClick={handleCancel}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  취소
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
