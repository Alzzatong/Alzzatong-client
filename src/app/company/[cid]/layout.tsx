"use client";
import CompanyDetail from "@/components/Company/Detail";
import CompanyConsult from "@/components/Company/Consult";
import TabNavigation from "@/components/Company/TabNav/TabNavigation";
import { useState } from "react";


export default function DetailPage(props: any) {
  const [currentTab, setCurrentTab] = useState("구직자 상세정보"); // 초기 상태를 첫번째 탭으로 설정

  function handleClick(name: string) {
    setCurrentTab(name); // 클릭된 탭으로 currentTab 상태를 변경합니다.
  }

  return (
    <div className="sidebarContainer">
      <div className="sidebarContent"></div>
      <div className="pageContent">
        <div className="whiteSpace" />

        <div className=" text-black text-xl font-medium font-['Pretendard'] ">
          <TabNavigation handleClick={handleClick} currentTab={currentTab} />
        </div>
        <div className="className= mt-10">
          {currentTab=="구직자 상세정보" ? <CompanyDetail/>:<CompanyConsult/>}</div>
      </div>
      <div className="sidebarContent"></div>
    </div>

  );
}
