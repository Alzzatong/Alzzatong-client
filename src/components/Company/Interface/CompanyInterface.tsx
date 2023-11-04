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
    // 초기 상태 정의
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