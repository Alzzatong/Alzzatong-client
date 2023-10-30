import RadioButton from "@/components/Template/Button/RadioButton";
import TableList from "@/components/Template/List/TableList";
import ChatingIcon from "../../../../public/svgs/chatingIcon";

const employMethods = [
  { id: "yes", title: "본기관" },
  { id: "no", title: "타기관" },
  { id: "no", title: "자가 취업" },
];
const employStatus = [
  { id: "yes", title: "구인중" },
  { id: "no", title: "구인완료" },
];

export default function CompanyConsult() {
  return (
    <div className="bg-white">
      <h2 className="sr-only">상담내역</h2>
      <h1 className="text-4xl	font-medium text-gray-900">상담내역</h1>
      <div className="mt-10 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 pb-14 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 flex gap-x-4 gap-y-6">
            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              구인방법
            </div>
            <RadioButton
              itemList={employMethods}
              groupName={"구인방법"}
            ></RadioButton>
          </div>
          <div className="mt-6 flex  gap-x-4 gap-y-6">
            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              구인상태
            </div>
            <RadioButton
              itemList={employStatus}
              groupName={"구인상태"}
            ></RadioButton>
          </div>
        </div>
      </div>
      <ChatingIcon className="w-10 h-10" />
  
      <div className="mt-8 text-black text-base font-bold font-['Pretendard'] leading-normal">상담내용</div>
      <div className="mt-2 w-100% h-44 bg-white rounded-md border border-neutral-200" />
      <div className="flex justify-end  sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          className="mt-4 block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          저장
        </button>
      </div>
      <div className="mt-10 border-t border-gray-200 pt-10">
      </div>
      <TableList />
    </div>
  );
}
