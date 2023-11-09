"use client";
import { supabase } from "@/lib/supabase/supabase";
import { use, useEffect, useState } from "react";

interface MatchingTabRecuruitSeniorSearchProps {
  company_id: number;
  recruit_id: number;
}

export default function MatchingTabRecuruitSeniorSearch({
  company_id,
  recruit_id,
}: MatchingTabRecuruitSeniorSearchProps) {
  const [region, setRegion] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [jobType, setJobType] = useState<string>();

  // 구인처의 직무 위치 및 타입 조회
  const locationAndJobType = async () => {
    let { data: companyData, error: companyError } = await supabase
      .from("company")
      .select(`region, local_detail`)
      .eq("id", company_id);

    if (companyError)
      console.error("Error loading company data: ", companyError);

    let { data: recruitData, error: recruitError } = await supabase
      .from("recruit")
      .select(`id, job_type`)
      .eq("id", recruit_id);

    if (recruitError)
      console.error("Error loading recruit data: ", recruitError);
    setRegion(companyData![0].region);
    setLocation(companyData![0].local_detail);
    setJobType(recruitData![0].job_type);
    handleSearch();

  };

  // 해당 직무와 희망직종이 같고, 희망 근무지도 같은 경우만 조회
  const handleSearch = async () => {
      let { data, error } = await supabase
        .from("senior_wishlist")
        .select(`*`) //recruit 테이블과 조인
        .eq("location", region)
        .eq("location_detail", location);

      if (error) console.error("Error loading data: ", error);
      console.log(data);
  };

  useEffect(() => {
    locationAndJobType();
  }, []);

  return <div>구직자 조회</div>;
}
