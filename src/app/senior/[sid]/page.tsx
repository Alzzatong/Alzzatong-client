'use client';
import { useState } from "react";
import SeniorSearch from "@/components/Senior/Search";
import SeniorRegister from "@/components/Senior/Register";
import SidebarNav from "@/components/SidebarNav";

export default function Senior(props: any) {
    const [currentTab, setCurrentTab] = useState("조회");
    // 초기상태 조회
    const handleSidebarClick = (componentName: string) => {
      setCurrentTab(componentName);
    };

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