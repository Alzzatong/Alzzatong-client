import DoubleCheckButton from "@/components/Template/Button/DoubleCheck";
import BusinessNumberInput from "../Template/BusinessNumberInput";
import BusinessYearInput from "../Template/BusinessYearInput";
import CeoNameInput from "../Template/CeoNameInput";
import CompanyNameInput from "../Template/CompanyNameInput";
import JobCodeInput from "../Template/JobCodeInput";
import PhoneInput from "@/components/Template/Input/PhoneInput";
import FaxNumberInput from "../Template/FaxNumberInput";
import LabelText from "@/components/Template/LabelText/LabelText";
import NameInput from "@/components/Template/Input/NameInput";
import RadioButton from "@/components/Template/Button/RadioButton";
import SearchButton from "@/components/Template/Button/Search";
import TextAreaBox from "@/components/Template/Input/TextAreaBox";
import EmailInput from "@/components/Template/Input/EmailInput";
import StringInput from "@/components/Template/Input/StringInput";

const fourinsureMethods = [
  { id: "yes", title: "가입" },
  { id: "no", title: "미가입" },
];
const dummy = {
  businessYear: "2021",
  businessNumber: "123456789",
  companyName: "우리회사",
  ceoName: "김대표",
  jobCode: "123456",
  phoneNumber: "01012345678",
  faxNumber: "01012345678",
  managerName: "홍길동",
  managerEmail: "manager@gmail.com",
  companyLocation: "서울",
  companyAddress: "관악구 관악로 1",
  companyEstablishmentYear: "2021",
  fourinsure: "yes",
  companyRegistration: "123456789",
  mainBusiness: "입력한 아무내용이 노출됩니다.",
  jobContent: [
    {
      id: "1",
      jobType: "테스트",
      NumberOfHires: "1",
      salary: "200",
      workingType: "주 5일",
      workStartHour: "9",
      workEndHour: "18",
      lunchTime: "12",
      etc: "비고 입력란, 점심미지급 등 입력한 아무내용이 노출됩니다.",
    },
    {
      id: "2",
      jobType: "테스트2",
      NumberOfHires: "2",
      salary: "300",
      workingType: "주 5일",
      workStartHour: "9",
      workEndHour: "18",
      lunchTime: "12",
      etc: "비고 입력란, 점심미지급 등 입력한 아무내용이 노출됩니다.",
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CompanyDetail() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">구인처 상세조회</h2>

        <form className="lg:grid lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h1 className="text-4xl	font-medium text-gray-900">구인처 상세조회</h1>

              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">기업정보</h2>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <BusinessYearInput></BusinessYearInput>
                  <BusinessNumberInput></BusinessNumberInput>
                  {/* 중복 확인 버튼 */}
                  <div className="mt-6 flex justify-between">
                    <DoubleCheckButton></DoubleCheckButton>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <CompanyNameInput></CompanyNameInput>
                  <CeoNameInput></CeoNameInput>
                </div>

                <div className="mt-4">
                  <JobCodeInput></JobCodeInput>
                </div>
                <div className="mt-4">
                  <PhoneInput></PhoneInput>
                  <FaxNumberInput></FaxNumberInput>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">상세정보</h2>
              </div>
              <div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <LabelText id={"manager-name"} text="담당자명"></LabelText>
                    <NameInput
                      id={"manager-name"}
                      holder={dummy.managerName}
                    ></NameInput>
                  </div>

                  <div>
                    <LabelText id={"manager-email"} text="이메일"></LabelText>
                    <EmailInput
                      id={"manager-email"}
                      holder={dummy.managerEmail}
                    ></EmailInput>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText id={"company-location"} text="기업소재지" />
                    <NameInput
                      id={"company-location"}
                      holder={dummy.companyLocation}
                    ></NameInput>
                  </div>
                  <div>
                    <LabelText id={"company-address"} text="기업주소" />
                    <NameInput
                      id={"company-address"}
                      holder={dummy.companyAddress}
                    ></NameInput>
                  </div>
                  <div>
                    <LabelText
                      id={"company-establishment-year"}
                      text="기업설립연도"
                    />
                    <NameInput
                      id={"company-establishment-year"}
                      holder={dummy.companyEstablishmentYear}
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <LabelText id={"fourinsure"} text="4대보험가입" />
                    <RadioButton
                      itemList={fourinsureMethods}
                      groupName={"4대보험가입내역"}
                    ></RadioButton>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <div>
                    <LabelText
                      id={"company-registration"}
                      text="사업자등록증"
                    />
                    <div className="mt-1">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <SearchButton></SearchButton>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <LabelText id={"main-business"} text="주요사업" />
                    <TextAreaBox></TextAreaBox>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">구인내용</h2>
              {dummy.jobContent.map((job, index) => (
                <div key={job.id}>
                  <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                    <div>
                      <LabelText
                        id={`job-type${index + 1}`}
                        text={`구인직무${index + 1}`}
                      />
                      <NameInput
                        id={`job-type${index + 1}`}
                        holder={job.jobType}
                      ></NameInput>
                    </div>
                    <div>
                      <LabelText
                        id={`NumberOfHires${index + 1}`}
                        text="구인인원"
                      />
                      <NameInput
                        id={`NumberOfHires${index + 1}`}
                        holder={job.NumberOfHires}
                      ></NameInput>
                    </div>
                    <div>
                      {/* 급여 */}
                      <LabelText id={`salary${index + 1}`} text="급여" />
                      <NameInput
                        id={`salary${index + 1}`}
                        holder={job.salary}
                      ></NameInput>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                    <div>
                      {/* 근무형태 */}
                      <LabelText
                        id={`working-type${index + 1}`}
                        text="근무형태"
                      />
                      <NameInput
                        id={`working-type${index + 1}`}
                        holder={job.workingType}
                      ></NameInput>
                    </div>
                    <div>
                      {/* 근무시간 */}
                      <LabelText
                        id={`working-time${index + 1}`}
                        text="근무시간"
                      />
                      <div className="flex gap-3">
                        {/* 시작시간, 종료시간 */}
                        <NameInput
                          id={`work-start-hour${index + 1}`}
                          holder={job.workStartHour}
                        ></NameInput>
                        <NameInput
                          id={`work-end-hour${index + 1}`}
                          holder={job.workEndHour}
                        ></NameInput>
                      </div>
                    </div>
                    <div>
                      {/* 주 소정근로시간 계싼 */}
                      <div className="mt-6">
                        <div className="text-zinc-500 text-sm font-normal font-['Pretendard'] leading-tight">
                          주 소정근로시간 : 40시간
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* 점심시간 */}
                      <LabelText
                        id={`lunch-time${index + 1}`}
                        text="점심시간"
                      />
                      <NameInput
                        id={`lunch-time${index + 1}`}
                        holder={job.lunchTime}
                      ></NameInput>
                    </div>
                  </div>
                  <div className="mt-4">
                    <LabelText id={`etc${index + 1}`} text="비고" />
                    <StringInput id={`etc${index + 1}`} holder={job.etc} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
