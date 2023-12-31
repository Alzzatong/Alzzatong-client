"use client";

import "@/styles/globals.css";
import { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import {
  UserIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UsersIcon,
  PaperClipIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { AppProps } from "next/app";

const navigation = [
  {
    name: "구직자",
    href: "/matching/senior",
    icon: UserIcon,
  },
  {
    name: "구인처",
    href: "/matching/company",
    icon: BriefcaseIcon,
  },
  {
    name: "면접관리",
    href: "/matching/meeting_manage",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
];

function MatchingLayout({ children }: { children: React.ReactNode }) {
  const [currentTab, setCurrentTab] = useState("조회");

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
        {children}
        {/* <Component {...pageProps} /> */}
      </div>
    </div>
  );
}

export default MatchingLayout;
