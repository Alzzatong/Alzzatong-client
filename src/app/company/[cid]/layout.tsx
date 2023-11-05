"use client";
import CompanyDetail from "@/components/Company/Detail";
import CompanyConsult, { ConsultData } from "@/components/Company/Consult";
import TabNavigation from "@/components/Company/TabNav/TabNavigation";
import { use, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { CompanyData, RecruitData, initialCompanyData } from "@/components/Company/Interface/CompanyInterface";
import { getDetailServerSideProps } from "@/services/supabase/companySelect";

export default function DetailPage(props: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("구직자 상세정보");
  const [companyData, setCompanyData] = useState<CompanyData>(initialCompanyData);
  const [recruits, setRecruits] = useState<RecruitData[]>([]);
  
  const addRecruit = (recruit : RecruitData) =>{
    setRecruits([...recruits, recruit]); // 인자로 받은 recruit을 추가합니다.
  }
 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      getDetailServerSideProps({id: props.params.cid, setCompanyData: setCompanyData, addRecruit: addRecruit});
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function handleClick(name: string) {
    setCurrentTab(name); // 클릭된 탭으로 currentTab 상태를 변경합니다.
  }

  if (isLoading) {
    return <Loading/>;
  } else {
    return (
      <div className="sidebarContainer">
        <div className="sidebarContent"></div>
        <div className="pageContent">
          <div className="whiteSpace" />

          <div className=" text-black text-xl font-medium font-['Pretendard'] ">
            <TabNavigation handleClick={handleClick} currentTab={currentTab} />
          </div>
          <div className="className= mt-10">
            {currentTab == "구직자 상세정보" ? (
              <CompanyDetail companyInfo={companyData} recruitsInfo={recruits}/>
            ) : (
              <CompanyConsult company_id={props.params.cid}/>
            )}
          </div>
        </div>
        <div className="sidebarContent"></div>
      </div>
    );
  }
}
