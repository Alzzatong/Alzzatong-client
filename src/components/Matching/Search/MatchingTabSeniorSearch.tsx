"use client";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import NumberInput from "@/components/Template/Input/NumberInput";
import {
  MatchingLightSearch,
  SeniorJoinWish,
} from "@/components/Senior/Interface/SeniorInterface";
import { supabase } from "@/lib/supabase/supabase";
import { useEffect, useRef, useState } from "react";
import BigTitle from "@/components/Template/LabelText/BigTitle";
import Link from "next/link";
import ReadingGlassIcon from "@/styles/svgs/ReadingGlassIcon";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MatchingTabSeniorSearch() {
  const [joinData, setJoinData] = useState<MatchingLightSearch[] | null>();
  const [name, setName] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSearch = async () => {
    let query = supabase
      .from("senior")
      .select(`senior_id, name, regi_first_num, address`);
    // 이름으로 검색
    if (name !== "") {
      query = query.ilike("name", `%${name}%`);
    }
    let { data, error } = await query;
    if (error) console.error("Error loading data: ", error);
    else setJoinData(data || []);
    console.log("search 구체적", data);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  // 자동완성 기능 - 수정 중
  const [isAutoSearch, setIsAutoSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [autoSearchKeyword, setAutoSearchKeyword] = useState("");
  const [focusIndex, setFocusIndex] = useState(-1);
  const focusRef = useRef(null);
  const scrollRef = useRef(null);

  // const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //     if (isAutoSearch) {
  //      const enteredValue =
  //      e.nativeEvent.inputType === "deleteContentBackward"
  //       ? ""
  //       : e.nativeEvent.data;
  //      focusIndex >= 0 && setSearchKeyword(autoSearchKeyword + enteredValue);
  //      setIsAutoSearch(false);
  //      setFocusIndex(-1);
  //      return;
  //     }

  //     setSearchKeyword(e.target.value);
  //    };

  //    const handleKeyUp = (e:React.KeyboardEvent) => {
  //     if(KeyEvent[e.key]) KeyEvent[e.key]();
  //   };

  //   const KeyEvent = {
  //     Enter: () => {
  //       goToSearchPage();
  //     },
  //     ArrowDown: () => {
  //       if (autoSearchList.length === 0) {
  //         return;
  //       }
  //       if (listRef.current.childElementCount === focusIndex + 1) {
  //         setFocusIndex(() => 0);
  //         return;
  //       }
  //       if (focusIndex === -1) {
  //         setIsAutoSearch(true);
  //       }
  //       setFocusIndex((index) => index + 1);
  //       setAutoSearchKeyword(autoSearchList.results[focusIndex + 1].title);
  //     },
  //     ArrowUp: () => {
  //       if (focusIndex === -1) {
  //         return;
  //       }
  //       if (focusIndex === 0) {
  //         setAutoSearchKeyword("");
  //         setFocusIndex((index) => index - 1);
  //         setIsAutoSearch(false);
  //         return;
  //       }

  //       setFocusIndex((index) => index - 1);
  //       setAutoSearchKeyword(autoSearchList.results[focusIndex - 1].title);
  //     },
  //     Escape: () => {
  //       setAutoSearchKeyword("");
  //       setFocusIndex(-1);
  //       setIsAutoSearch(false);
  //     },
  //   };

  //   const KeyEvent = {
  //     Enter: () => {
  //       goToSearchPage();
  //     }
  //   };

  //   const goToSearchPage = () => {
  //     if (isNull()) return;
  //     navigate(
  //       `/search?query=${isAutoSearch ? autoSearchKeyword : searchKeyword}`
  //     );
  //   };

  return (
    <form className="search-area">
      <div className="bg-slate-50 mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <BigTitle
          text="구직자 매칭"
          className="mt-2 mb-4 text-4xl font-bold text-gray-900"
        ></BigTitle>
        <div className="flex mt-4 gap-3 h-15">
          <input
            type="text"
            id="name"
            name="search"
            value={name}
            onChange={handleNameChange}
            autoComplete="off"
            placeholder="성명 검색"
            maxLength={10}
            className="flex-1 p-4 bg-white rounded-full border border-blue-500 ring-1 ring-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></input>
          <div className="block items-end">
            <button
                type="button"
                className="m-2 rounded-md p-4 bg-white py-1 text-sm font-normal text-blue-400 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-gray-100"
                onClick={handleSearch}
            >
                <ReadingGlassIcon />
            </button>
          </div>
        </div>
        {/* <input
            type="text"
            placeholder="성명 검색"
            title="검색"
            name="검색"
            value={isAutoSearch ? autoSearchKeyword : searchKeyword}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            /> */}

        <h2 className="mt-10 text-l	font-semibold text-gray-900">
          검색 결과&nbsp;
          <span className="text-xl  text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">
            {joinData?.length}
          </span>
        </h2>
        <div className="min-h-[560px]">
          <div>
          {joinData &&
            joinData.map((data:any) => {
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
                    <Link href={`/matching/senior/${data.senior_id}`}>
                      <ul className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
                        <li className="flex-1 truncate">
                          <div className="gap-1">
                            <div className="mt-1 flex flex-row items-center space-x-3">
                              <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                                {data.name}
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-5 gap-4">
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
                            
                            <div className="mt-4 flex col-span-1">
                              <div className="px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-zinc-500 text-sm font-medium font-['Pretendard']">
                                  주민번호
                                </div>
                              </div>
                              <div className="px-2 py-0.5 text-black text-sm font-medium font-['Pretendard']">
                                {data.regi_first_num}
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
                          
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        </div>
      </div>
    </form>
  );
}
