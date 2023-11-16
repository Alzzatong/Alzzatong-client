import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import DropBox from "@/components/Template/SelectBox/DropBox";
import {
  Score,
  JobAvailability,
  SeniorConsultJoinAdmin,
  ConsultSenior,
  InsertSeniorConsultJoinAdmin,
} from "@/components/Senior/Interface/SeniorInterface";
import LabelText from "@/components/Template/LabelText/LabelText";
import CustomButton from "@/components/Template/Button/CustomButton";
import ConsultList from "../Template/ConsultList";
import UncontrolledDropbox from "@/components/Template/SelectBox/UncontrolledDropbox";
import { deleteSeniorConsultSelect, insertSeniorConsultSelect } from "@/queries/SelectSenior";
import { supabase } from "@/lib/supabase/supabase";

interface SeniorDetailProps {
  sidData: SeniorConsultJoinAdmin[];
}

export default function SeniorConsult(sidData: SeniorDetailProps) {
  const [joinData, setJoinData] = useState<SeniorConsultJoinAdmin[] | null>(
    null
  );
  const [consultData, setConsultData] = useState<InsertSeniorConsultJoinAdmin[]>([]);
  const [date, setDate] = useState<string>("");
  const [reload, setReload] = useState(false);

  const datePickerFormat = "YYYY-MM-DD";

  useEffect(() => {
    if (sidData && sidData.sidData) {
      setJoinData(sidData.sidData);
    }
  }, []);

  const handleScoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setScore(Number(e.target.id));
    setConsultData({
      ...consultData,
      [e.target.id]: e.target.value,
    })
  };

  const handleJobAvailability = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConsultData({
      ...consultData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDateChange = (e: string | null, context: any) => {
    if (e) {
      const create:string = "created_at"
      setConsultData({
        ...consultData,
        [create]: new Date(e),
      });
    }
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConsultData({
      ...consultData,
      [e.target.id]: e.target.value,
    })
  };

  const validateData = (consultData: any): string|null => {
    // consultData 검사
    if (consultData.score ===  undefined || consultData.score === null ) {
      return "참여점수를 선택해주세요.";
    }
    if (consultData.job_availability === null || consultData.job_availability === undefined ) {
      return "구직상태를 선택해주세요.";
    }
    if (consultData.content === "" || consultData.content === undefined || consultData.content.lenght === 0 ) {
      return "상담내용을 적어주세요.";
    }
    return null;
  }

  const handleAddButton = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (joinData) {
      if (joinData.map((item) => {return item.senior_id})[0] !== undefined && 
          joinData.map((item) => {return item.admin_id})[0] !== undefined ) {
        let seniorId:number = joinData.map((item) => {return item.senior_id})[0];
        let adminId = joinData.map((item) => {return item.admin_id})[0];

        const senior_id:string = "senior_id";
        const admin_id:string = "admin_id";
  
        const newConsultData = {
          ...consultData,
          [senior_id]: seniorId,
          [admin_id]: adminId,
        }
        const errorMessage = validateData(newConsultData);
        console.log(errorMessage);

        if (errorMessage) {
          alert(errorMessage);
        } else {
          const answer = await insertSeniorConsultSelect(newConsultData, seniorId);
          if ( answer === undefined ){
            alert("등록되었습니다.");
            window.scrollTo({ top: 0, behavior: "smooth" });
            fetchData(seniorId);
          }
        }
      }  

    }  
  };

  const handleRetouchButton = (e: React.MouseEvent<HTMLElement>) => {
    alert("수정되었습니다.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  const handleRemoveConsult = async (e: React.MouseEvent<HTMLElement>, consultId:number, seniorId:number) => {
    if (consultId) {
        alert("삭제되었습니다.");
        const bool = await deleteSeniorConsultSelect(consultId);
        console.log(bool);
      }

    fetchData(seniorId);
  }
  
  const fetchData = async (senirId:number) => {
    const { data: newData, error } = await supabase
      .from("consult_senior")
      .select(`*`)
      .eq("senior_id", senirId);
    if (error) {
      console.error('Error fetching data', error);
    } else {
      const updatedData = newData;
      setJoinData(updatedData);
    }
  };
  

  return (
    <div>
      <div className="mt-10">
        <div>
          <div className="mx-auto max-w-2xl grid grid-cols-4 gap-4 px-4 pb-14 sm:px-6 lg:max-w-7xl lg:px-8">
            <div>
              <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                <div>상담일자</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="mt-2">
                    <DatePicker
                      label=""
                      format={datePickerFormat}
                      defaultValue={date}
                      onChange={handleDateChange}
                      className="border-gray-300"
                    ></DatePicker>
                  </div>
                </LocalizationProvider>
              </div>
            </div>

            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              <div>
              참여점수
              </div>
              <div className="mt-2">
              <UncontrolledDropbox
                id="score"
                itemList={Score}
                groupName="근무지 대분류"
                defaultValue={""}
                onBlur={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleScoreChange(e)
                }
              />
              </div>
            </div>

            <div className="mt-4 min-w-[120px] text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
              <div>구직상태</div>
              <div className="mt-2">
              <UncontrolledDropbox
                id="job_availability"
                itemList={JobAvailability}
                groupName="구직 상태"
                onBlur={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleJobAvailability(e)
                }
              />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              {/* <ChatingIcon className="w-10 h-10" /> */}
              <div className="mb-2 ml-2 text-zinc-500 text-base font-bold font-['Pretendard'] leading-normal">
                상담내용
              </div>
            </div>
            <div className="mt-2 flex">
              <textarea
                rows={4}
                name="content"
                id="content"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                onBlur={(e:React.ChangeEvent<HTMLTextAreaElement>) => handleContent(e)}
              />
            </div>
              <div className="flex flex-row-reverse ">
                  <div>
                  <CustomButton
                    label="등록"
                    onClick={(e:React.MouseEvent<HTMLElement>) => handleAddButton(e)}
                    className="mt-4 rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  />
                  {/* <CustomButton
                    label="수정"
                    onClick={(e:React.MouseEvent<HTMLElement>) => handleRetouchButton(e)}
                    className="mt-4 mr-4 rounded-md bg-gray-100 px-3 py-2 text-center text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                  /> */}
                  </div>
              </div>
          </div>
          <div className="mt-8 w-100% bg-white rounded-md border border-neutral-200" />
          <div className="flex justify-end  sm:ml-16 sm:mt-0 sm:flex-none"></div>
          <div className="mt-10">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-bold leading-6 text-gray-900">
                  최신순
                </h1>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                {/* <div className="inline min-w-full py-2 align-middle sm:px-6 lg:px-8"> */}
                {/* <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"> */}
                <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="table-auto min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-0.5 pl-4 py-3.5 text-center text-xs font-semibold text-gray-900"
                        >
                          순번
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-0.5 py-3.5 text-center text-xs  font-semibold text-gray-900"
                        >
                          상담자
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 text-center text-xs  font-semibold text-gray-900"
                        >
                          상담일자
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 min-w-200 text-center text-xs  font-semibold text-gray-900"
                        >
                          참여점수
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-xs  font-semibold text-gray-900"
                        >
                          상담내용
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 pr-6 text-center text-xs  font-semibold text-gray-900"
                        >
                          삭제
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                      {joinData?.map((consult:SeniorConsultJoinAdmin, index:number) => {
                        let create_date = consult.created_at.toString();
                        let con_date = create_date.substring(0, 10);
                        return (
                          <tr key={consult.consult_senior_id}>
                            <td className="whitespace-nowrap text-center sm:pl-6 py-2 pr-3 text-sm font-medium text-gray-900 ">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                              {/* {consult.admin_name} */}
                              김상담
                            </td>
                            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                              {con_date}
                            </td>
                            <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                              {consult.score}
                            </td>
                            {/* <td className="break-words text-center whitespace-nowrap px-3 py-4 text-sm text-gray-500"> */}
                            <td className="whitespace-normal text-center px-3 py-4 text-sm text-gray-500">
                              {consult.content}
                            </td>

                            <td className="relative whitespace-nowrap text-center pl-2 py-4 text-xl sm:pr-6">
                              <button
                                id="remove"
                                name="remove"
                                onClick={(e:React.MouseEvent<HTMLElement>) => handleRemoveConsult(e, consult.consult_senior_id, consult.senior_id)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                x
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
