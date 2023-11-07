"use client";
import MatchingTabRecuruitSearch from "@/components/Mating/SelectRecruit";
import { getServerSideCompanyName } from "@/services/supabase/companySelect";
import { useState } from "react";

export default function CompanyMatchingRecruitsPage(props: any) {
  // 회사 이름만 조회하기
  const company_id = props.params.cid;
  const [companyName, setCompanyName] = useState<string>();
  const [address, setAddress] = useState<string>();

  getServerSideCompanyName({
    id: company_id,
    setCompanyName: setCompanyName,
    setAddress: setAddress,
  });

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl	font-bold text-gray-900">구인처 매칭</h1>
        <div className="mx-2 mt-11 grid grid-cols-2 gap-2">
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
        <MatchingTabRecuruitSearch company_id={company_id} />
      </div>
    </div>
  );
}
