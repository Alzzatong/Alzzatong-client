"use client";

import { useState } from "react";
import "@/styles/globals.css";
import SidebarNav from "@/components/SidebarNav";
import SeniorSearch from "@/components/Senior/Search";
import SeniorRegister from "@/components/Senior/Register";
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import BigTitle from "@/components/Template/LabelText/BigTitle";

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
export default function Senior(props: any) {
  const [currentTab, setCurrentTab] = useState("조회"); // 상태를 'Company' 컴포넌트로 이동
  // 초기상태 조회

  // const detail = props.params.cid;
  // console.log(detail);

  return (
    <div className="sidebarContainer">
      <div className="sidebarContent">
        <SidebarNav
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          navigationList={navigation}
        />
      </div>
      <div className="pageContent">
        <div className="bg-gray-50">
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
            {currentTab === "조회" ? (
              <main>
                <BigTitle
                  text="조회"
                  className="text-4xl font-bold text-gray-900"
                />
                <SeniorSearch />
              </main>
            ) : (
              <main>
                <BigTitle
                  text="구직자 등록"
                  className="text-4xl font-bold text-gray-900"
                />
                <SeniorRegister />
              </main>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
