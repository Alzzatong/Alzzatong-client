"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabase/supabase";
import PhoneNumberInput from "@/components/Template/Input/PhoneInput";
import SeniorNameInput from "../Template/SeniorNameInput";
import SearchButton from "@/components/Template/Button/Search";
import NameInput from "@/components/Template/Input/NameInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import RadioButton from "@/components/Template/Button/RadioButton";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import DropBox from "@/components/Template/SelectBox/DropBox";
import {
  Location,
  LocationDetail,
  SeniorCareer,
  SeniorData,
  SeniorJoinWishCareer,
  SeniorWishList,
  initialSeniorCareerData,
  initialSeniorData,
  initialSeniorWishListData,
} from "@/components/Senior/Interface/SeniorInterface";
import {
  BigJobCode,
  SmallJobCode,
} from "@/components/Senior/Interface/SeniorInterface";
import ControlWishList from "../Template/ControlWishList";
import CalculateAge from "../Template/CalculateAge";
import RegiNumberInput from "../Template/RegiNumberInput";
import {
  GenderItem,
  HealthStatusItem,
  ScheduleItem,
  WorkHourItem,
} from "@/components/Senior/Interface/SeniorInterface";
import { SearchSeniorListBox } from "../Template/SearchSeniorListBox";
import StringInput from "@/components/Template/Input/StringInput";
import RadioNumberButton from "@/components/Template/Button/RadioNumberButton";
import AgreementButton from "../Template/AgreementButton";
import AddButton from "@/components/Template/Button/Add";
import CustomButton from "@/components/Template/Button/CustomButton";
import NumberInput from "@/components/Template/Input/NumberInput";
import UncontrolledStringInput from "@/components/Template/Input/UncontrolledStringInput";
import UncontrolledDropbox from "@/components/Template/SelectBox/UncontrolledDropbox";

interface SeniorDetailProps {
  sidData: SeniorJoinWishCareer[];
}

export default function SeniorDetail(sidData: SeniorDetailProps) {
  const [joinData, setJoinData] = useState<SeniorJoinWishCareer[] | null>(null);
  const [reset, setReset] = useState(false);
  const [seniorData, setSeniorData] = useState<SeniorData>(initialSeniorData);
  const [wishlistData, setWishlistData] = useState<SeniorWishList[]>([]);
  const [careerData, setCareerData] = useState<SeniorCareer[]>([]);
  
  const [firstReginum, setFirstReginum] = useState<string>("");
  const [secondReginum, setSecondReginum] = useState<string>("");
  const [health, setHealth] = useState<number>(0);
  
  const [firstLocation, setFirstLocation] = useState<string[]>([""]);
  const [secondLocation, setSecondLocation] = useState<string>("");
  
  const [bigJobCode, setBigJobCode] = useState<{ id: number; title: string }[]>(
    []
  );
  const [smallJobCode, setSmallJobCode] = useState<string[]>([""]);

  useEffect(() => {
    if (sidData && sidData.sidData) {
      setJoinData(sidData.sidData);
    }
  }, []);


  const handleSeniorTableInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSeniorData({
      ...seniorData,
      [e.target.id]: e.target.value,
    }); console.log("handleSeniorTableInputChange");
  };

  const handleSeniorWishListTableInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const updateWishlistData = [...wishlistData];
    updateWishlistData[index] = {
      ...updateWishlistData[index],
      [e.target.id]: e.target.value,
    };
    setWishlistData(updateWishlistData);
  };

  const handleCareerTableInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    entryindex: number
  ) => {
    const updateCareerData = [...careerData];
    updateCareerData[entryindex] = {
      ...updateCareerData[entryindex],
      [e.target.id]: e.target.value,
    };
    setCareerData(updateCareerData);
  };

  //선택항목 파트 추가
  const handleOptionAdd = () => {
    if (careerData.length >= 5) {
      alert("더 이상 선택항목을 추가할 수 없습니다.");
    } else {
      setCareerData([
        ...careerData,
        {
          company_name: "",
          start_period: new Date(),
          end_period: new Date(),
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
      const updatedCareerData = [...careerData];
      const resultCareerData = updatedCareerData.filter((_, i) => i !== index);
      setCareerData(resultCareerData);
    }
  };

  //희망근무지 파트 추가
  const handleAdd = () => {
    if (wishlistData.length >= 3) {
      alert("더 이상 추가할 수 없습니다!");
    } else {
      if (wishlistData.length === 1) {
        setWishlistData([
          ...wishlistData,
          {
            location: "",
            location_detail: "",
            job_code_number: 100,
            job_type_name: "",
            priority: 2,
            salary: 0,
            work_hour: 0,
            work_type: 0,
            etc: "",
          },
        ]);
      }
      if (wishlistData.length === 2) {
        setWishlistData([
          ...wishlistData,
          {
            location: "",
            location_detail: "",
            job_code_number: 100,
            job_type_name: "",
            priority: 3,
            salary: 0,
            work_hour: 0,
            work_type: 0,
            etc: "",
          },
        ]);
      }
    }
  };

  //희망근무지 파트 제거
  const handleRemove = (index: number) => {
    if (wishlistData.length === 1) {
      alert("삭제 불가. 최소 희망근무지 '1개'가 입력되어야 합니다.");
    } else {
      const updateWishlistData = [...wishlistData];
      const resultWishlistData = updateWishlistData.filter(
        (_, i) => i !== index
      );
      setWishlistData(resultWishlistData);
    }
  };

  const handleSubmitTest = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("handleSubmitTest");
    console.log(seniorData, wishlistData, careerData);
    const errorMessage = validateData(seniorData, wishlistData, careerData);
    if (errorMessage) {
      alert(errorMessage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(seniorData, wishlistData, careerData);
    const errorMessage = validateData(seniorData, wishlistData, careerData);
    console.log(errorMessage);
    if (errorMessage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      alert(errorMessage);
    } else {
      let seniorId; //FK인 senior_id 설정

      // Insert into senior Table
      const { data: senior_data, error: senior_error } = await supabase
        .from("senior")
        .insert([seniorData])
        .select("senior_id");
      if (senior_error) {
        console.log("Error inserting data into Senior table:", senior_error);
      } else {
        seniorId = senior_data[0].senior_id;
      }

      // Insert into senior_wishlist Table
      for (let i = 0; i < wishlistData.length; i++) {
        const wishlistDataWithId = { ...wishlistData[i], senior_id: seniorId };
        const { data: wishlist_data, error: wishlist_error } = await supabase
          .from("senior_wishlist")
          .insert([wishlistDataWithId])
          .select("priority");
        if (wishlist_error) {
          console.log(
            `Error inserting ${i}'st data into SeniorWishList table:`,
            wishlist_error
          );
        }
      }

      // Insert into career Table
      for (let i = 0; i < careerData.length; i++) {
        if (
          careerData[i]["company_name"] !== "" ||
          careerData[i]["task_type"] !== ""
        ) {
          const careerDataWithId = { ...careerData[i], senior_id: seniorId };
          const { data: career_data, error: career_error } = await supabase
            .from("career")
            .insert([careerDataWithId])
            .select("task_type");
          if (career_error) {
            console.log(
              `Error inserting ${i}'st data into Career table:`,
              career_error
            );
          }
        }
      }

      if (window.confirm("저장되었습니다.")) {
        window.location.href = "/senior";
      }
    }
  };

  const handleCancel = (e: FormEvent) => {
    e.preventDefault();

    // form 초기화
    setSeniorData(initialSeniorData);
    setFirstReginum("");
    setSecondReginum("");
    setReset(!reset);
    setWishlistData([initialSeniorWishListData]);
    setBigJobCode([]);
    setSmallJobCode([]);
    setFirstLocation([""]);
    setSecondLocation("");
    setCareerData([initialSeniorCareerData]);
    // 페이지 최상단으로 이동
    alert("취소되었습니다.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const updateWishlistData = [...wishlistData];
    updateWishlistData[index] = {
      ...updateWishlistData[index],
      [e.target.id]: e.target.value,
    };
    setWishlistData(updateWishlistData);
  };

  const handleDateTableInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updateCareerData = [...careerData];
    updateCareerData[index] = {
      ...updateCareerData[index],
      [e.target.id]: new Date(e.target.value),
    };
    setCareerData(updateCareerData);
  };

  const handleDropBoxSeniorTableChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSeniorData({
      ...seniorData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHealth(Number(e.target.value));
    setSeniorData({
      ...seniorData,
      [e.target.name]: e.target.value,
    });
  };

  const selectFirstReginumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstReginum(e.target.value);
    setSeniorData({
      ...seniorData,
      [e.target.name]: e.target.value,
    });
  };

  const selectSecondReginumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondReginum(e.target.value);
    setSeniorData({
      ...seniorData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setSeniorData({
      ...seniorData,
      phone_num: newPhoneNumber,
    });
  };

  // 첫번째 지역 선택
  const selectFirstLocation = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newFirstLocation = [...firstLocation];
    newFirstLocation[index] = e.target.value;
    setFirstLocation(newFirstLocation);

    const updateWishlistData = [...wishlistData];
    updateWishlistData[index] = {
      ...updateWishlistData[index],
      [e.currentTarget.id]: e.currentTarget.value,
    };
    setWishlistData(updateWishlistData);
  };
  // 두번째 지역 선택
  const selectSecondLocation = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    setSecondLocation(e.target.value);
    const updateWishlistData = [...wishlistData];
    updateWishlistData[index] = {
      ...updateWishlistData[index],
      [e.currentTarget.id]: e.currentTarget.value,
    };
    setWishlistData(updateWishlistData);
  };

  // 직업 대분류 선택
  const selectBigJobCode = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newBigJobCode = [...bigJobCode];
    newBigJobCode[index] = {
      id: Number(e.target.value),
      title: e.target.options[e.target.selectedIndex].text,
    };
    setBigJobCode(newBigJobCode);

    const updateWishlistData = [...wishlistData];
    updateWishlistData[index] = {
      ...updateWishlistData[index],
      [e.currentTarget.id]: e.currentTarget.value,
    };
    setWishlistData(updateWishlistData);
  };
  // 직업 소분류 선택
  const selectSamllJobCode = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newSmallJobCode = [...smallJobCode];
    newSmallJobCode[index] = e.target.value;
    setSmallJobCode(newSmallJobCode);

    const updateWishlistData = [...wishlistData];
    updateWishlistData[index] = {
      ...updateWishlistData[index],
      [e.currentTarget.id]: e.currentTarget.value,
    };
    setWishlistData(updateWishlistData);
  };

  // 파일 제공 동의서 저장 handler 필요
  const handleAggrementLink = async (fileUrl: string) => {
    const file = fileUrl;
    console.log(file);
    if (file) {
      console.log("file is 정상");
    } else {
      console.log("file is error...");
    }
    setSeniorData({
      ...seniorData,
      ["agreement_link"]: fileUrl,
    });
    console.log(setSeniorData, "handler 동의서");
  };

  const validateData = (
    seniorData: SeniorData,
    wishlistData: SeniorWishList[],
    careerData: SeniorCareer[]
  ): string | null => {
    const missingFields1 = [];
    const missingFields2 = [];

    // SeniorData 객체에 대한 필드
    const seniorDataFields = [
      "name",
      "regi_first_num",
      "regi_second_num",
      "gender",
      "address",
      "health_status",
      "phone_num",
      // "agreement_link", Null 가능
    ];

    // SeniorWishList 객체에 대한 필드
    const wishlistDataFields = [
      "location",
      "location_detail",
      "job_code_number",
      "job_type_name",
      "priority",
      "salary",
      "work_hour",
      "work_type",
      // "etc", Null 가능
    ];

    // SeniorCareer 객체에 대한 필드 << 선택사항
    const careerDataFields = [
      "company_name",
      "start_period",
      "end_period",
      "task_type",
    ];

    // seniorData 검사
    for (let field of seniorDataFields) {
      if (seniorData[field] === "" || seniorData[field] === 0) {
        missingFields1.push(field);
      }
    }

    // if (missingFields1.length > 0) {
    //   return `${missingFields1.join(", ")}는 필수 입력 사항입니다.`;
    // }

    if (seniorData.name.length === 0) {
      return "성함이 필요합니다.";
    }
    if (seniorData.regi_first_num.length !== 6) {
      return "주민번호 앞자리는 6자리여야 합니다.";
    }
    if (seniorData.regi_second_num.length !== 7) {
      return "주민번호 뒷자리는 7자리여야 합니다.";
    }
    if (seniorData.address.length === 0) {
      return "주소가 필요합니다.";
    }
    if (seniorData.health_status === 0) {
      return "건강상태의 표시가 필요합니다.";
    }
    if (seniorData.phone_num.length <= 10) {
      return "전화번호의 바른 입력이 필요합니다.";
    }
    // if (seniorData.agreement_link.length === 0) {
    //   return "개인정보동의서 첨부가 필요합니다.";
    // }

    // wishlistData 검사
    for (let i = 0; i < wishlistData.length; i++) {
      for (let field of wishlistDataFields) {
        if (wishlistData[i][field] === "" || wishlistData[i][field] === 0) {
          missingFields2.push({ [i]: [field] });
        }
      }
      if (
        wishlistData[i].location.length >= 5 ||
        wishlistData[i].location === ""
      ) {
        return `${i + 1}번째 희망근무지의 특별시/도 선택이 필요합니다.`;
      }
      if (
        wishlistData[i].location_detail.length >= 6 ||
        wishlistData[i].location_detail === ""
      ) {
        return `${i + 1}번째 희망근무지의 시/구/군 선택이 필요합니다.`;
      }
      if (wishlistData[i].job_code_number >= 10) {
        return `${i + 1}번째 희망직종의 선택이 필요합니다.`;
      }
      if (
        wishlistData[i].job_type_name === "선택" ||
        wishlistData[i].job_type_name === ""
      ) {
        return `${i + 1}번째 희망직종의 구체적인 선택이 필요합니다.`;
      }
      if (wishlistData[i].salary === 0 || wishlistData[i].salary >= 1000000) {
        return `${i + 1}번째 희망보수(만원/월) 입력이 필요합니다.`;
      }
      if (wishlistData[i].work_hour === 0) {
        return `${i + 1}번째 희망 근무 시간의 선택이 필요합니다.`;
      }
      if (wishlistData[i].work_type === 0) {
        return `${i + 1}번째 희망 근무 형태의 선택이 필요합니다.`;
      }
    }

    // 모든 데이터가 유효하면 null 반환
    return null;
  };

  return (
    <div>
      <SearchSeniorListBox data={joinData} />
      {joinData &&
        joinData.map((senior_data) => (
          <form
            key={senior_data.senior_id}
            className="lg:grid lg:gap-x-12 xl:gap-x-16"
          >
            <div className="pb-10">
              <div className="mt-20">
                <h2 className="text-lg font-medium text-gray-900">필수 항목</h2>
                <div className="mt-2 border-t border-gray-200"></div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="성명"></LabelText>
                    <UncontrolledStringInput
                      id="name"
                      holder="성명"
                      defaultValue={senior_data.name}
                      onBlur={handleSeniorTableInputChange}
                    />
                  </div>
                  <div>
                    <LabelText text="성별"></LabelText>
                    <UncontrolledDropbox
                      id="gender"
                      itemList={GenderItem}
                      groupName="성별"
                      defaultValue={senior_data.gender}
                      onBlur={(e) => handleDropBoxSeniorTableChange(e)}
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
                      initialFirstPart={senior_data.regi_first_num}
                      initialSecondPart={senior_data.regi_second_num}
                    />
                  </div>
                  <div>
                    <LabelText text="만 나이"></LabelText>
                    <div className="mt-1 flex justify-between">
                      <div className="mt-1 block w-full p-2 rounded-md bg-white shadow-sm sm:text-sm">
                        <CalculateAge
                          regiNumFirst={senior_data.regi_first_num}
                          regiNumSecond={senior_data.regi_second_num}
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
                    phone1={senior_data.phone_num.slice(0, 3)}
                    phone2={senior_data.phone_num.split("-")[1]}
                    phone3={senior_data.phone_num.split("-")[2]}
                  ></PhoneNumberInput>
                </div>
                <div className="mt-4">
                  <div>
                    <LabelText text="주소"></LabelText>
                    <UncontrolledStringInput
                      id="address"
                      holder="주소를 입력하세요"
                      defaultValue={senior_data.address}
                      onBlur={handleSeniorTableInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <LabelText text="건강상태"></LabelText>
                    <RadioNumberButton
                      id="health_status"
                      itemList={HealthStatusItem}
                      groupName="건강상태"
                      value={senior_data.health_status}
                      onChange={handleRadioInputChange}
                    />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText text="개인정보동의서 첨부" />
                    <div className="mt-1">
                      {/* <input
                        type="file"
                        name="agreement_link"
                        id="agreement_link"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={handlerSeniorAggrementLink}
                      /> */}
                      <AgreementButton
                        key="agreement_link"
                        onfileUrlChange={handleAggrementLink}
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
                  <ul className="mt-6 p-3 bg-gray-200 rounded-md grid grid-cols-9 gap-x-4 gap-y-6 justify-items-center">
                    <li className="col-span-2">
                      <LabelText text="경력사항" />
                    </li>
                    <li className="col-span-2">
                      <LabelText text="직장명" />
                    </li>
                    <li className="col-span-2">
                      <LabelText text="근무기간" />
                    </li>
                    <li className="col-span-2">
                      <LabelText text="업무내용" />
                    </li>
                  </ul>
                  {senior_data.career.map((data, i) => (
                    <ul
                      key={i}
                      className="grid grid-cols-9 gap-x-4 gap-y-6 mt-3 justify-items-center"
                    >
                      <li className="col-span-2">{i + 1}</li>
                      <li className="col-span-2">
                        <UncontrolledStringInput
                          id="company_name"
                          holder="회사명"
                          defaultValue={data.company_name}
                          onBlur={(e) => handleCareerTableInputChange(e, i)}
                        />
                      </li>
                      <li className="col-span-2 flex">추후 추가</li>
                      <li className="col-span-2">
                        <UncontrolledStringInput
                          id="task_type"
                          holder="업무 내용"
                          defaultValue={data.task_type}
                          onBlur={(e) => handleCareerTableInputChange(e, i)}
                        />
                      </li>
                      <li className="col-span-1 justify-items-end mt-4">
                        <CustomButton
                          label="X"
                          onClick={() => handleOptionRemove(i)}
                          className="rounded px-2 py-1 text-xs font-semibold text-gray-600 shadow-sm hover:bg-slate-300"
                        />
                      </li>
                    </ul>
                  ))}
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
                    {senior_data.senior_wishlist.map((wishlist, i) => (
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
                            <LabelText text="희망근무지" />
                            <DropBox
                              id="location"
                              itemList={Location}
                              groupName="근무지 대분류"
                              onSelect={(e:React.ChangeEvent<HTMLSelectElement>) => selectFirstLocation(e, i)}
                            />
                            {firstLocation[i] && (
                              <DropBox
                                id="location_detail"
                                itemList={LocationDetail[firstLocation[i]]}
                                groupName="근무지 중분류"
                                onSelect={(e:React.ChangeEvent<HTMLSelectElement>) => selectSecondLocation(e, i)}
                              />
                            )}
                          </div>

                          <div className="mt-4">
                            <LabelText text="희망직종" />
                            <DropBox
                              id="job_code_number"
                              itemList={BigJobCode}
                              groupName="직종 대분류"
                              onSelect={(e:React.ChangeEvent<HTMLSelectElement>) => selectBigJobCode(e, i)}
                            />
                            {bigJobCode[i] && (
                              <DropBox
                                id="job_type_name"
                                itemList={SmallJobCode[bigJobCode[i].id]}
                                groupName="직종 중분류"
                                onSelect={(e:React.ChangeEvent<HTMLSelectElement>) => selectSamllJobCode(e, i)}
                              />
                            )}
                          </div>

                          <div>
                            <div className="mt-4">
                              <LabelText text="희망보수 (만원/월)"></LabelText>
                              <NumberInput
                                id="salary"
                                holder="만원/월"
                                value={wishlist.salary}
                                onChange={(e) =>
                                  handleSeniorWishListTableInputChange(e, i)
                                }
                              />
                            </div>
                            <div className="mt-4">
                              <LabelText text="근무 시간"></LabelText>
                              <DropBox
                                id="work_hour"
                                itemList={WorkHourItem}
                                groupName="근무 시간"
                                onSelect={(e:React.ChangeEvent<HTMLSelectElement>) =>
                                  handleSeniorWishListTableInputChange(e, i)
                                }
                              />
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-1 gap-y-2">
                            <div>
                              <LabelText text="근무 형태"></LabelText>
                              {ScheduleItem.map((list) => {
                                return (
                                  <span
                                    key={list.id}
                                    className="flex items-center"
                                  >
                                    <input
                                      id="work_type"
                                      name={`${i}`}
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      defaultValue={list.id}
                                      onBlur={(e) =>
                                        handleSeniorWishListTableInputChange(
                                          e,
                                          i
                                        )
                                      }
                                    ></input>
                                    <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                      {list.title}
                                    </label>
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          <div className="mt-4 mb-8">
                            <div>
                              <LabelText text="특이사항/자격사항" />
                              <div className="mt-2">
                                <TextAreaBox
                                  id="etc"
                                  holder="기타사항"
                                  value={wishlist.etc || ""}
                                  onBlur={(e:React.ChangeEvent<HTMLTextAreaElement>) => handleTextAreaChange(e, i)}
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
          </form>
        ))}
    </div>
  );
}
