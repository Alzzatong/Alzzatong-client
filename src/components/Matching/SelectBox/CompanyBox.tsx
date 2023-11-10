import EmploymentStatusTextBox from "./EmploymentStatusTextBox";

export interface CompanyBoxType {
  recruit: any;
  id: number;
  created_at: Date;
  job_type: string;
  job_availablility: boolean;
  company_name: string;
  business_number: string;
  manager_name: string;
  manager_phone: string;
  manager_email: string;
  address: string;
}

interface CompanyBoxProps {
  companyBox: CompanyBoxType;
}

export default function CompanyBox({ companyBox }: CompanyBoxProps) {
  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100 hover:bg-white shadow rounded">
      <div className="flex-1 truncate">
        <div className="flex">
          {companyBox.recruit.map(
            (recruit: { job_type: string; job_availablility: boolean }) => (
              <EmploymentStatusTextBox employmentTextBox={recruit} />
            )
          )}
        </div>
        <div className="mt-1 flex items-center space-x-3">
          <div className="text-black text-xl font-bold font-['Pretendard'] leading-7">
            {companyBox.company_name}
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              번호
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {companyBox.business_number}
          </div>
          <div className="w-20 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              업무 담당자
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {companyBox.manager_name}
          </div>
          <div className="w-24 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              담당자 연락처
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {companyBox.manager_phone}
          </div>
        </div>
        <div className="mt-2 flex gap-4">
          <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              이메일
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {companyBox.manager_email}
          </div>
          <div className="w-10 h-6 px-2 py-0.5 bg-neutral-200 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-500 text-sm font-medium font-['Pretendard'] leading-tight">
              주소
            </div>
          </div>
          <div className="mt-1 text-black text-sm font-medium font-['Pretendard'] leading-tight">
            {companyBox.address}
          </div>
        </div>
      </div>
    </div>
  );
}
