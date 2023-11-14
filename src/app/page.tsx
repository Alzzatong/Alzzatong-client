import NoticeBanner from "@/components/NoticeBanner";
import ShortCut from "@/components/ShortCut/ShortCut";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <NoticeBanner />
      </div>
      <div>
        <ShortCut />
      </div>

      <ul></ul>
    </>
  );
}
