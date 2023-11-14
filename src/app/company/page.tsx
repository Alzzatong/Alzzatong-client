"use client";
import CompanySearch from "@/components/Company/Search";
import SidebarNav from "@/components/SidebarNav";
import "@/styles/globals.css";
import { useState } from "react";
import CompanyRegister from "@/components/Company/Register";
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "조회",
    href: "#search",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "등록",
    href: "#register",
    icon: PencilSquareIcon,
  },
];
export default function Company(props: any) {
  const [currentTab, setCurrentTab] = useState("조회"); // 상태를 'Company' 컴포넌트로 이동
  // 초기상태 조회

  // const detail = props.params.cid;
  // console.log(detail);

  return (
    <div className="sidebarContainer">
      <div className="sidebarContent">
        <SidebarNav currentTab={currentTab} setCurrentTab={setCurrentTab} navigationList={navigation}/>
      </div>
      <div className="pageContent border-l border-gray-300">
      {(currentTab === "조회")? <CompanySearch /> :<CompanyRegister />}
      </div>
    </div>
  );
}
