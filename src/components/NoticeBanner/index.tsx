import ServiceNameText from "@/styles/svgs/ServiceNameText";
import CircleL from "@/styles/svgs/circleL";
import CircleM from "@/styles/svgs/circleM";
import CircleSmall from "@/styles/svgs/circleS";
import MainBanner from "@/styles/svgs/mainBanner";
import People1 from "@/styles/svgs/people1";
import People2 from "@/styles/svgs/people2";

export default function Example() {
  return (
    <div className=" relative flex w-full h-[480px] bg-[#72aff4] z-0">
      <div className="absolute top-2/2 right-3/4 translate-y-10">
        <People1></People1>
      </div>
      <div>
        <CircleM className="z-10"></CircleM>
      </div>
      <div className="">
        <CircleSmall className="" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ServiceNameText className="" />
      </div>
      {/* 왼쪽에 하나 */}
      <div className="absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
        <People2 />
      </div>
      <div className="absolute top-2/4 left-3/4 -translate-y-10">
        <CircleL></CircleL>
      </div>
    </div>
  );
}
