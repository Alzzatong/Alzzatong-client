import {
  UserIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UsersIcon,
  ArrowRightCircleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ShortCut() {
  return (
    <div className="flex flex-row gap-8 items-center justify-center w-full h-[650px] bg-white py-24">
      <Link
        href={"/senior"}
        className="w-72 h-72 bg-gray-50 rounded-2xl shadow"
      >
        <div>
          <div className=" mt-12 ml-10 text-black text-2xl font-bold font-['Pretendard'] leading-10">
            구직자 페이지
          </div>
          <div className="flex flex-row">
            <UserIcon className="w-24 h-24 ml-10 mt-10 text-gray-400"></UserIcon>

            <ArrowRightCircleIcon className="w-16 h-16  text-blue-400 ml-16 mt-20"></ArrowRightCircleIcon>
          </div>
        </div>
      </Link>
      <Link
        href={"/company"}
        className="w-72 h-72 bg-gray-50 rounded-2xl shadow"
      >
        <div>
          <div className=" mt-12 ml-10 text-black text-2xl font-bold font-['Pretendard'] leading-10">
            구인처 페이지
          </div>
          <div className="flex flex-row">
            <BriefcaseIcon className="w-24 h-24 ml-10 mt-10 text-gray-400"></BriefcaseIcon>
            <ArrowRightCircleIcon className="w-16 h-16  text-blue-400 ml-16 mt-20"></ArrowRightCircleIcon>
          </div>
        </div>
      </Link>
      <Link
        href={"/matching"}
        className="w-72 h-72 bg-gray-50 rounded-2xl shadow"
      >
        <div>
          <div className=" mt-12 ml-10 text-black text-2xl font-bold font-['Pretendard'] leading-10">
            매칭 페이지
          </div>
          <div className="flex flex-row">
            <UsersIcon className="w-24 h-24 ml-10 mt-10 text-gray-400"></UsersIcon>
            <ArrowRightCircleIcon className="w-16 h-16  text-blue-400 ml-16 mt-20"></ArrowRightCircleIcon>
          </div>
        </div>
      </Link>
      <div className="w-72 h-72 bg-gray-50 rounded-2xl shadow">
        <div className=" mt-12 ml-10 text-black text-2xl font-bold font-['Pretendard'] leading-10">
          알림 페이지
        </div>
        <div className="flex flex-row">
          <BellIcon className="w-24 h-24 ml-10 mt-10 text-gray-400"></BellIcon>
          <ArrowRightCircleIcon className="w-16 h-16  text-blue-400 ml-16 mt-20"></ArrowRightCircleIcon>
        </div>
      </div>
    </div>
  );
}
