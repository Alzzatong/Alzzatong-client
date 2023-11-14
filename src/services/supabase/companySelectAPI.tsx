import { ConsultData } from "@/components/Company/Consult";
import {
  CompanyData,
  GetCompanyData,
  GetRecruitData,
  RecruitData,
} from "@/components/Company/Interface/CompanyInterface";
import { supabase } from "@/lib/supabase/supabase";

// interface CompanyNameAndAddressProps {
//   company_name: string;
//   address: string;
// }
interface CompanyNameProps {
  id: number;
  setCompanyName: (data: string) => void;
  setAddress: (data: string) => void;
}

interface CompanyDataProps {
  id: number;
  setCompanyData: (data: GetCompanyData) => void;
  addRecruit: (recruit: GetRecruitData) => void;
}
interface ConsultDataProps {
  id: number;
  setConsultList: (data: ConsultData[]) => void;
}
interface DeleteConsultDataProps {
  id: number;
}
interface matchingDataProps {
  company_id: number;
  recruit_id: number;
  setRegionLocation: (region: string, location: string) => void;
  setJobType: (data: string) => void;
}
interface GetRecruitDataProps {
  recruit_id: number;
  setRecruit: (data: GetRecruitData) => void;
}

export async function getServerSideCompanyName({
  id,
  setCompanyName,
  setAddress,
}: CompanyNameProps) {
  const { data, error } = await supabase
    .from("company")
    .select(`company_name, address`) //recruit 테이블과 조인
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching company data:", error);
  } else {
    setCompanyName(data.company_name);
    setAddress(data.address);
  }
}
export async function getServerSideRecruit({
  recruit_id,
  setRecruit,
}: GetRecruitDataProps) {
  const { data, error } = await supabase
    .from("recruit")
    .select(`*`) //recruit 테이블과 조인
    .eq("id", recruit_id)
  if (error) {
    console.error("Error fetching company data:", error);
  } else {
    data.forEach((recruit: GetRecruitData) => {
      setRecruit(recruit);
    });
  }
}



export async function getDetailServerSideProps({
  id,
  setCompanyData,
  addRecruit,
}: CompanyDataProps) {
  const { data, error } = await supabase
    .from("company")
    .select(`*, recruit (*)`) //recruit 테이블과 조인
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching company data:", error);
  } else {
    setCompanyData(data);
    data.recruit.forEach((recruit: GetRecruitData) => {
      addRecruit(recruit);
    });
  }
}

export async function getConsultServerSideProps({
  id,
  setConsultList,
}: ConsultDataProps) {
  const { data, error } = await supabase
    .from("consult_company")
    .select("*")
    .eq("company_id", id);
  if (error) {
    console.error("Error fetching company data:", error);
  } else {
    console.log("getConsultServerSideProps에서 data: ", data);
    setConsultList(data);
  }
}
export async function deleteConsultServerSideProps({
  id,
}: DeleteConsultDataProps) {
  //supabse에서 삭제
  const { error } = await supabase
    .from("consult_company")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error fetching company data:", error);
  } else {
    alert("삭제되었습니다.");
  }
}
export async function getRegionAndLocationJobTypeConsultServerSideProps({
  company_id,
  recruit_id,
  setRegionLocation,
  setJobType,
}: matchingDataProps) {
  const { data: companyData, error: companyError } = await supabase
    .from("company")
    .select(`region, local_detail`)
    .eq("id", company_id)
    .single();

  if (companyError) {
    console.error("Error loading company data: ", companyError);
  } else {
    setRegionLocation(companyData.region, companyData.local_detail);
  }

  const { data: recruitData, error: recruitError } = await supabase
    .from("recruit")
    .select(`job_type`)
    .eq("id", recruit_id)
    .single();

  if (recruitError) console.error("Error loading recruit data: ", recruitError);
  else {
    setJobType(recruitData.job_type);
  }
}
