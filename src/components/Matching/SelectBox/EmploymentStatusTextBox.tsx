interface EmploymentTextBox{
    job_type: string;
    job_availablility: boolean;
}
interface EmploymentStatusTextBoxProps{ 
    employmentTextBox: EmploymentTextBox;
}
export default function EmploymentStatusTextBox({employmentTextBox}: EmploymentStatusTextBoxProps) {
  return (
    <>
      <div className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight mr-1">
        {employmentTextBox.job_type}
      </div>
      <div className="text-blue-500  text-sm font-medium font-['Pretendard'] leading-tight mr-1">
        |
      </div>
      <div className="text-blue-500 text-sm font-medium font-['Pretendard'] leading-tight mr-3">
        {employmentTextBox.job_availablility ? "구인중" : "구인마감"}
      </div>
    </>
  );
}
