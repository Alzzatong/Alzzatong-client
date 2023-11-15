import Image from "next/image";

export default function Example() {
  return (
    <div className=" relative flex w-full h-[480px] bg-[#72aff4]">
      {/* mainbanner.png 파일띄우기 */}
      <Image
        src="/images/mainbanner.png"
        alt="mainbanner"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
