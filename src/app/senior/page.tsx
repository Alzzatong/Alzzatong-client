"use client";
import SeniorSearch from "@/components/Senior/Search";
import SidebarNav from "@/components/SidebarNav";
import "@/styles/globals.css";
import { useState } from "react";
import SeniorRegister from "@/components/Senior/Register";

export default function Senior(props: any) {
  const [currentTab, setCurrentTab] = useState("조회"); // 상태를 'Company' 컴포넌트로 이동
  // 초기상태 조회
  const handleSidebarClick = (componentName: string) => {
    setCurrentTab(componentName);
  };
  // const detail = props.params.cid;
  // console.log(detail);

  return (
    <div className="sidebarContainer">
      <div className="sidebarContent">
        <SidebarNav onClick={handleSidebarClick} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      </div>
      <div className="pageContent">
      {(currentTab === "조회")? <SeniorSearch /> :<SeniorRegister />}
      </div>
    </div>
  );
}
