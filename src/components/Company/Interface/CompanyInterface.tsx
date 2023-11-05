// id모음
export const idCollection = {
  businessYearId: "business_year",
  businessNumberId: "business_number",
  companyNameId: "company_name",
  ceoNameId: "ceo_name",
  businessCodeId: "business_code",
  mainPhoneId: "main_phone",
  secondPhoneId: "second_phone",
  faxId: "fax",
  addressId: "address",
  regionId: "region",
  localDetailId: "local_detail",
  foundationYearId: "foundation_year",
  typeId: "type",
  isInsuranceId: "is_insurance",
  managerNameId: "manager_name",
  managerEmailId: "manager_email",
  managerPhoneId: "manager_phone",
  certificationLinkId: "certification_link",
  contentId: "content",
};

export const fourinsureMethods = [
  { id: "true", title: "가입" },
  { id: "false", title: "미가입" },
];

export interface CompanyData {
  created_at: Date;
  business_year: string;
  business_number: string;
  company_name: string;
  ceo_name: string;
  business_code: string;
  main_phone: string;
  second_phone: string;
  fax: string;
  address: string;
  region: string;
  local_detail: string;
  foundation_year: string;
  type: string;
  is_insurance: boolean;
  manager_name: string;
  manager_email: string;
  manager_phone: string;
  certification_link: string;
  content: string;
  // employee_list: object[];
}

// 초기 상태 정의
export const initialCompanyData: CompanyData = {
  created_at: new Date(),
  business_year: "",
  business_number: "",
  company_name: "",
  ceo_name: "",
  business_code: "",
  main_phone: "",
  second_phone: "",
  fax: "",
  address: "",
  region: "",
  local_detail: "",
  foundation_year: "",
  type: "",
  is_insurance: false,
  manager_name: "",
  manager_email: "",
  manager_phone: "",
  certification_link: "",
  content: "",
  // employee_list: [],
};

// 구인정보
export interface RecruitData {
  created_at: Date;
  company_id: number;
  job_type: string;
  number_of_hires: string;
  salary: string;
  working_type: string;
  work_start_hour: string;
  work_end_hour: string;
  lunch_hour: string;
  job_availablility: boolean;
  etc: string;
}
export const initialRecruitData: RecruitData = {
  created_at: new Date(),
  company_id: 0,
  job_type: "",
  number_of_hires: "",
  salary: "",
  working_type: "",
  work_start_hour: "",
  work_end_hour: "",
  lunch_hour: "",
  etc: "",
  job_availablility: false,
};

// 조인테이블
export interface JoinData {
  created_at: Date;
  business_year: string;
  business_number: string;
  company_name: string;
  ceo_name: string;
  business_code: string;
  main_phone: string;
  second_phone: string;
  fax: string;
  address: string;
  region: string;
  local_detail: string;
  foundation_year: string;
  type: string;
  is_insurance: boolean;
  manager_name: string;
  manager_email: string;
  manager_phone: string;
  certification_link: string;
  content: string;
  recruit: RecruitData[];
}

export const initialJoinData: JoinData = {
  created_at: new Date(),
  business_year: "",
  business_number: "",
  company_name: "",
  ceo_name: "",
  business_code: "",
  main_phone: "",
  second_phone: "",
  fax: "",
  address: "",
  region: "",
  local_detail: "",
  foundation_year: "",
  type: "",
  is_insurance: false,
  manager_name: "",
  manager_email: "",
  manager_phone: "",
  certification_link: "",
  content: "",
  recruit: [], // 초기화용 RecruitData 배열을 추가해야 할 수도 있습니다.
};

export const dummy: JoinData = {
  business_year: "2021",
  business_number: "123456789",
  company_name: "우리회사",
  ceo_name: "김대표",
  business_code: "123456",
  main_phone: "01012345678",
  fax: "01012345678",
  manager_name: "홍길동",
  manager_email: "manager@gmail.com",
  address: "서울시 강남구",
  foundation_year: "2021",
  is_insurance: true,
  content: "입력한 아무내용이 노출됩니다.",
  created_at: new Date(),
  second_phone: "",
  region: "",
  local_detail: "",
  type: "",
  manager_phone: "",
  certification_link: "",
  recruit: [
    {
      created_at: new Date(),
      company_id: 1,
      job_type: "테스트",
      number_of_hires: "1",
      salary: "200",
      working_type: "주 5일",
      work_start_hour: "9",
      work_end_hour: "18",
      lunch_hour: "12",
      job_availablility: true,
      etc: "비고 입력란, 점심미지급 등 입력한 아무내용이 노출됩니다.",
    },
    {
      created_at: new Date(),
      company_id: 2,
      job_type: "테스트2",
      number_of_hires: "2",
      salary: "300",
      working_type: "주 5일",
      work_start_hour: "9",
      work_end_hour: "18",
      lunch_hour: "12",
      job_availablility: true,
      etc: "비고 입력란, 점심미지급 등 입력한 아무내용이 노출됩니다.",
    },
  ],

};
