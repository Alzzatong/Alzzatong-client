import { ConsultData } from "@/components/Company/Consult";
import {
  CompanyData,
  RecruitData,
} from "@/components/Company/Interface/CompanyInterface";
import { supabase } from "@/lib/supabase/supabase";

interface CompanyDataProps {
  id: number;
  setCompanyData: (data: CompanyData) => void;
  addRecruit: (recruit: RecruitData) => void;
}
interface ConsultDataProps {
  id: number;
  setConsultList: (data: ConsultData[]) => void;
}
interface DeleteConsultDataProps {
  id: number;
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
    data.recruit.forEach((recruit: RecruitData) => {
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
