"use client";
import { GetRecruitData } from "@/components/Company/Interface/CompanyInterface";
import Loading from "@/components/Loading";
import RecruitBox from "@/components/Matching/SelectBox/RecruitBox";
import MatchingTabRecuruitSeniorSearch from "@/components/Matching/Search/MatchingTabRecuruitSeniorSearch";
import { supabase } from "@/lib/supabase/supabase";
import {
  getRegionAndLocationJobTypeConsultServerSideProps,
  getServerSideCompanyName,
  getServerSideRecruit,
} from "@/services/supabase/companySelectAPI";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function CompanyMatchingRecruitsSeniorPage(props: any) {
  const company_id = props.params.cid;
  const recruit_id = props.params.rid;
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [recruit, setRecruit] = useState<GetRecruitData>(); //(보여줄 데이터로 interface를 만들어야 함)

  const setRegionLocation = (region: string, location: string) => {
    setRegion(region);
    setLocation(location);
  };

  // 조회한 값으로 하위 컴포넌트에 전달
  useEffect(() => {
    const fetchData = async () => {
      getRegionAndLocationJobTypeConsultServerSideProps({
        company_id: company_id,
        recruit_id: recruit_id,
        setRegionLocation: setRegionLocation,
        setJobType: setJobType,
      });
    };
    fetchData();
  }, [company_id, recruit_id]);
  useEffect(() => {
    getServerSideCompanyName({
      id: company_id,
      setCompanyName: setCompanyName,
      setAddress: setAddress,
    });

    getServerSideRecruit({
      recruit_id: recruit_id,
      setRecruit: setRecruit,
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">구인처 매칭</h1>
        <div className="mx-2 mt-11 grid grid-cols-2 gap-2 mb-3">
          <div className="flex justify-start gap-2">
            <div className=" text-black text-xl font-medium font-['Pretendard'] leading-7">
              회사명 |
            </div>
            <div className="text-black text-xl font-medium font-['Pretendard'] leading-7">
              {companyName}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <div className="mt-2 text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              주소
            </div>
            <div className="mt-2 text-black text-sm font-medium font-['Pretendard'] leading-tight">
              {address}
            </div>
          </div>
        </div>
        {recruit && (
          <Link href={`/matching/company/${company_id}`}>
            <RecruitBox recruit={recruit} />
          </Link>
        )}
        <MatchingTabRecuruitSeniorSearch
          company_id={company_id}
          recruit_id={recruit_id}
          region={region}
          location={location}
          job_type={jobType}
        />
      </div>
    </div>
  );
}
