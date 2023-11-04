import YearInput from "@/components/Template/Input/YearInput";
import NameInput from "@/components/Template/Input/NameInput";
import SearchButton from "@/components/Template/Button/Search";
import Link from "next/link";
import NumberInput from "@/components/Template/Input/NumberInput";
import ManAgeCalculate from "../Template/ManAgeCalculate";
import AgreementButton from "../Template/AgreementButton";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const senior = [
  {
    senior_id: 1,
    name: "홍길동",
    regi_first_num: "901010",
    regi_second_num: "1234567",
    address: "서울특별시 서울구 서울동",
    health_status: 2,
    phone_num: "01011112222",
    agreement_link: "link...",
  },
  {
    senior_id: 2,
    name: "김이환",
    regi_first_num: "881010",
    regi_second_num: "1234567",
    address: "서울특별시 서울구 서울동",
    health_status: 2,
    phone_num: "01011112222",
    agreement_link: "link...",
  },
  {
    senior_id: 3,
    name: "임꺽정",
    regi_first_num: "771010",
    regi_second_num: "1234567",
    address: "서울특별시 서울구 서울동",
    health_status: 2,
    phone_num: "01011112222",
    agreement_link: "link...",
  },
  //테스트용 더미 데이터
];

const seniorWishList = [
  {
    wish_list_id: 1,
    senior_id: 1,
    location: "서울",
    location_detail: "강남구",
    job_code_number: 11,
    job_code_name: "농업",
    priority: 1,
    salary: 800,
    work_hour: 8,
    work_type: 1,
    etc: "없음",
  },
  {
    wish_list_id: 2,
    senior_id: 1,
    location: "서울",
    location_detail: "동대문구",
    job_code_number: 12,
    job_code_name: "임업",
    priority: 3,
    salary: 800,
    work_hour: 8,
    work_type: 1,
    etc: "없음",
  },
  {
    wish_list_id: 3,
    senior_id: 1,
    location: "경기도",
    location_detail: "수원시",
    job_code_number: 13,
    job_code_name: "제조업",
    priority: 2,
    salary: 800,
    work_hour: 8,
    work_type: 1,
    etc: "없음",
  },
];

export default function SeniorSearch() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">조회</h1>

        <div className="mt-4 grid grid-cols-4 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
          <YearInput id="business-year" holder="사업년도"></YearInput>
          <NameInput id="senior-name" holder="구직자명 입력"></NameInput>
          <NumberInput
            id="senior-resident-number"
            holder="앞 6자리 입력"
          ></NumberInput>
          <div className="relative flex items-end">
            <SearchButton></SearchButton>
          </div>
        </div>

        <h2 className="mt-10 text-l	font-semibold text-gray-900">
          검색 결과
          <span className="text-xl  text-blue-500 text-l font-bold font-['Pretendard'] leading-tight">{senior.length}</span>
        </h2>
        <div className="min-h-[560px]">
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1"
          >
            {senior.map((senior: any) => (
              <li
                key={senior.senior_id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <Link href={`/senoir/${senior.senior_id}/detail`}>
                  <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
                    <div className="flex-1 truncate">
                      <div className="gap-1">
                        <div className="mt-1 flex flex-row items-center space-x-3">
                          <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
                            {senior.name}
                          </div>
                          <div className="text-blue-500 text-l font-medium font-['Pretendard'] leading-tight">
                            <ManAgeCalculate
                              firstPart={senior.regi_first_num}
                              secondPart={senior.regi_second_num}
                            />
                            세(만)
                          </div>
                          <div className="mt-1 flex justify-end items-center space-x-3">
                            <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                              hoho
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
                        {seniorWishList.map((wishList: any) => (
                          <div className="mt-4 flex pr-8 py-0.5 gap-2.5">
                            <div
                              key={wishList.wish_list_id}
                              className="grid grid-rows-2"
                            >
                              <div className="col-span-1">
                                <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                {/* <div className="inline-flex"> */}
                                  희망직종 {wishList.priority}
                                  <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                    &nbsp;|&nbsp;
                                  </div>
                                  {wishList.job_code_name}
                                </div>
                              </div>
                              <div className="col-span-1">
                                <div className="inline-flex py-2 text-right text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
                                  희망근무지 {wishList.priority}
                                  <div className="text-zinc-300 text-sm font-medium font-['Pretendard'] leading-tight">
                                    &nbsp;|&nbsp;
                                  </div>{" "}
                                  {wishList.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                            <div className="col-start-5 mt-5">
                              <AgreementButton></AgreementButton>
                              {/* {senior.agreement_link} */}
                            </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
