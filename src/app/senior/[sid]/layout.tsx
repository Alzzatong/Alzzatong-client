"use client";
import { useEffect, useState } from "react";
import SeniorDetail from "@/components/Senior/Detail";
import SeniorConsult from "@/components/Senior/Consult";
import TabNavigation from "@/components/Senior/TabNav/TabNavigation";
// import BigTitle from "@/components/Template/LabelText/BigTitle";
import {
  SeniorConsultJoinAdmin,
  SeniorJoinWishCareer,
} from "@/components/Senior/Interface/SeniorInterface";
import {
  getSeniorConsultSelect,
  getSeniorWishCareerSelect,
} from "@/queries/SelectSenior";
import { ConvertToIdType } from "@/components/Senior/Template/ConvertToIdType";

interface IdParams {
  sid: number;
}
interface IdType {
  children: React.ReactNode;
  params: IdParams;
}
interface sidProps {
  sid: IdType;
}

export default function DetailPage(sid: IdType) {
  const [currentTab, setCurrentTab] = useState("구직자 상세조회");
  const [joinData, setJoinData] = useState<
    SeniorJoinWishCareer[] | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);
  const [consultField, setConsultField] = useState<
    SeniorConsultJoinAdmin[] | undefined
  >();

  useEffect(() => {
    setIsLoading(true);
    getSeniorWishCareerSelect(sid.params.sid).then((data) => setJoinData(data));
    getSeniorConsultSelect(sid.params.sid).then((data) =>
      setConsultField(data)
    );
    setIsLoading(false);
  }, [sid]);

  if (isLoading) {
    console.log("isLoading");
    return <div>Loading...</div>;
  }

  // const idTypeData = ConvertToIdType(joinData);
  // if (!idTypeData) {
  //   return null;
  // }

  function handleClick(name: string) {
    setCurrentTab(name);
  }

  return (
    <div>
      <div className="w-full relative bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="sidebarContent"></div>
          <div className="whiteSpace" />
          <TabNavigation handleClick={handleClick} currentTab={currentTab} />
          <div className="pageContent">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
              {currentTab == "구직자 상세조회" ? (
                <main>
                  {/* <BigTitle
                text="구직자 상세조회"
                className="text-4xl font-bold text-gray-900"
              /> */}
                  <div className="text-4xl font-bold text-gray-900 font-['Pretendard'] ">
                    구직자 상세조회
                  </div>
                  {joinData && <SeniorDetail sidData={joinData}></SeniorDetail>}
                </main>
              ) : (
                <main>
                  {/* <BigTitle
                text="상담내역"
                className="text-4xl font-bold text-gray-900"
              /> */}
                  <div className="text-4xl font-bold text-gray-900 font-['Pretendard'] ">
                    상담내역
                  </div>
                  {consultField && (
                    <SeniorConsult sidData={consultField}></SeniorConsult>
                  )}
                </main>
              )}
            </div>
          </div>
          <div className="sidebarContent"></div>
        </div>
      </div>
    </div>
  );
}
