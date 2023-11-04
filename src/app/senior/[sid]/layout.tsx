"use client";
import { useState } from "react";
import SeniorDetail from "@/components/Senior/Detail";
import SeniorConsult from "@/components/Senior/Consult";
import TabNavigation from "@/components/Senior/TabNav/TabNavigation";


interface IdParams {
  id: number;
}

export default function DetailPage(props: any) {
  const [currentTab, setCurrentTab] = useState("구직자 상세조회");

  function handleClick(name: string) {
    setCurrentTab(name);
  }

  return (
    <div>
      <TabNavigation handleClick={handleClick} currentTab={currentTab} />
      <div>
        {currentTab == "구직자 상세조회" ? <SeniorDetail sid={props} /> : <SeniorConsult />}
      </div>
    </div>
  );
}
