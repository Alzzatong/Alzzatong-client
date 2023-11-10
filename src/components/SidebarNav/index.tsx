"use client";
import React, { useState, useEffect } from "react";
import "@/styles/globals.css";

interface navigation{
  name: string;
  href: string;
  icon: any;

}
interface props {
  currentTab: string;
  setCurrentTab: any;
  navigationList: navigation[];
}

export default function SidebarNav({
  currentTab,
  setCurrentTab,
  navigationList,
}: props) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex">
      <div className="w-[300px] mt-10">
        <div className="h-full flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigationList.map((item) => (
                    <li key={item.name}>
                      <a
                        onClick={() => setCurrentTab(item.name)} // 클릭 시 현재 탭을 업데이트
                        href={item.href}
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
    </div>
  );
}
