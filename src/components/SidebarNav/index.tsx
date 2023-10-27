"use client";
import React, { useState, useEffect } from "react";
import SearchComponent from "@/components/Company/Search";
import RegisterComponent from "@/components/Company/Register";
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

export default function SidebarNav() {
  const [currentTab, setCurrentTab] = useState(navigation[0].name); // 상태 초기값을 '조회'로 설정

  // 현재 선택된 탭에 따라 다른 컴포넌트를 렌더링하는 함수
  const renderComponent = () => {
    switch (currentTab) {
      case "조회":
        return <SearchComponent />;
      case "등록":
        return <RegisterComponent />;
      default:
        return null;
    }
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="sidebarContainer">
      <div className="sidebarContent">
        <div className="h-full flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-300 bg-white px-6">
          
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setCurrentTab(item.name)} // 클릭 시 현재 탭을 업데이트
                        className={classNames(
                          currentTab === item.name
                            ? "bg-gray-50 text-blue-600"
                            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            currentTab === item.name
                              ? "text-indigo-600"
                              : "text-gray-400 group-hover:text-indigo-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
          {/* 여기에서 현재 선택된 탭에 따라 다른 컴포넌트를 렌더링 */}
        </div>
      </div>
      <div className="pageContent">
        {renderComponent()}
      </div>
    </div>
  );
}
