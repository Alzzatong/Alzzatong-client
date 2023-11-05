import { ConsultData } from "@/components/Company/Consult";
import {
  MinusCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { ChangeEvent } from "react";

interface ConsultListProps {
  consults: ConsultData[];
  checkConsult: (consult: ConsultData) => void;
  deleteConsult: (consult: ConsultData) => void;
}

export default function TableList({ consults, checkConsult, deleteConsult}: ConsultListProps) {

  return (
    <div className="mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-bold leading-6 text-gray-900">
            최신순
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      순번
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"
                    >
                      상담일자
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      담당자
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      담당자 연락처
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      담당자 이메일
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      구인 유무
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      상담 내용
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      삭제
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">삭제</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {consults.map((consult, index) => (
                    <tr key={index} onClick={() => checkConsult(consult)}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {consult.created_at.slice(0, 10)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {consult.manager_name || "미등록"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {consult.manager_phone||  "미등록"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {consult.manager_email|| "미등록"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex justify-center items-center">
                        {consult.employ_status == "true" ? (
                          // 가운데 정렬을 위해 div로 감싸줍니다.
                          // <div className="w-5 h-5 bg-blue-500 rounded" />
                          <CheckCircleIcon 
                          className="w-8 h-8 text-blue-600"/>
                        ) : (
                          <MinusCircleIcon
                          className="w-8 h-8 text-gray-600"/>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {consult.content}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6 ">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                          onClick={(e) => {
                            e.stopPropagation(); // tr의 onClick 이벤트 방지
                            deleteConsult(consult); // 삭제 함수 호출
                          }}
                    
                        >
                          삭제<span className="sr-only"></span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
