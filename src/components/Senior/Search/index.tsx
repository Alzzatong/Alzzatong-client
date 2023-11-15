"use client";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import NumberInput from "@/components/Template/Input/NumberInput";
import { SeniorJoinWish } from "@/components/Senior/Interface/SeniorInterface";
import { supabase } from "@/lib/supabase/supabase";
import { useEffect, useState } from "react";
import { SearchSeniorListBox } from "../Template/SearchSeniorListBox";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SeniorSearch() {

  const [joinData, setJoinData] = useState<SeniorJoinWish[] | null>();
  const [name, setName] = useState<string>("");
  const [firstReginum, setFirstReginum] = useState<string>("");

  //supabase connect (`table:foreignTable(columns)`)
  const callJoinedData = async () => {
    let { data, error } = await supabase
      .from("senior")
      .select(`*, senior_wishlist:senior_wishlist(*)`);
    if (error) console.log(error);
    else setJoinData(data); console.log("search all");
  };

  useEffect(() => {
    callJoinedData();
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

  };
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstReginum(e.target.value);
  };
  

  const handleSearch = async () => {
    let query = supabase.from("senior").select(`*, senior_wishlist:senior_wishlist(*)`);
    // 주민번호 앞6자리로 검색
    if (firstReginum !== "") {
      query = query.eq("regi_first_num", firstReginum);
    }
    // 이름은 포함으로 검색
    if (name !== "") {
      query = query.ilike("name", `%${name}%`);
    }
    let { data, error } = await query;
    if (error) console.error("Error loading data: ", error);
    else setJoinData(data || []); console.log("search 구체적", data);
  };

  return (
    <form className="search-area">
        <div className="mt-4 grid grid-cols-4 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
          {/* <YearInput id="business-year" holder="사업년도"></YearInput> */}
          <NameInput id="name" holder="구직자명 입력" onChange={handleNameChange} value={name} ></NameInput>
          <NumberInput
            id="regi_first_num"
            holder="앞 6자리 입력"
            value={firstReginum}
            onChange={handleYearChange}
          ></NumberInput>
          <div className="relative flex items-end">
            {/* <SearchButton onClick={handleSearch()}></SearchButton> */}
            <SearchButton onClick={handleSearch}></SearchButton>
          </div>
        </div>

        <h2 className="mt-10 text-l	font-semibold text-gray-900">
          검색 결과&nbsp;
          <span className="text-xl  text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">
            {joinData?.length}
          </span>
        </h2>
        <div className="min-h-[560px]">
          <SearchSeniorListBox data={joinData}/>
        </div>
    </form>
  );
}
