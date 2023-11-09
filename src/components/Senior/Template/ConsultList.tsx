const consults = [
  {
    consult_senior_id: 1,
    senior_id: 1,
    score: 5,
    job_availability: false,
    admin_id: 1,
    admin_name: "이상담",
    senior_content:
      "이사람은 아주 좋은 경기도에서 아주 좋은 일자리를 원함. 상담내용이 노출됩니다. 상담내용이 노출됩니다. 상담내용이 노출됩니다. 상담내용이 노출됩니다.",
    created_at: "2022-09-01",
  },
  {
    consult_senior_id: 2,
    senior_id: 1,
    score: 5,
    job_availability: false,
    admin_id: 1,
    admin_name: "이상담",
    senior_content:
      "이사람은 아주 좋은 경기도에서 아주 좋은 일자리를 원함. 상담내용이 노출됩니다. 상담내용이 노출됩니다. 상담내용이 노출됩니다. 상담내용이 노출됩니다.",
    created_at: "2021-02-01",
  },
  {
    consult_senior_id: 3,
    senior_id: 1,
    score: 5,
    job_availability: false,
    admin_id: 1,
    admin_name: "이상담",
    senior_content:
      "이사람은 아주 좋은 경기도에서 아주 좋은 일자리를 원함. 상담내용이 노출됩니다. 상담내용이 노출됩니다. 상담내용이 노출됩니다. 상담내용이 노출됩니다.",
    created_at: "2021-03-01",
  },
];

export default function ConsultList() {
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
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          {/* <div className="inline min-w-full py-2 align-middle sm:px-6 lg:px-8"> */}
            {/* <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"> */}
            <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="table-auto min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-0.5 pl-4 py-3.5 text-center text-xs font-normal text-gray-900"
                    >
                      순번
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-0.5 py-3.5 text-center text-xs  font-normal text-gray-900"
                    >
                      상담자
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-xs  font-normal text-gray-900"
                    >
                      상담일자
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 min-w-200 text-center text-xs  font-normal text-gray-900"
                    >
                      참여점수
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-xs  font-normal text-gray-900"
                    >
                      상담내용
                    </th>
                   
                    <th
                      scope="col"
                      className="px-3 py-3.5 pr-6 text-center text-xs  font-normal text-gray-900"
                    >
                      삭제
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {consults.map((consult, index) => (
                    <tr key={consult.consult_senior_id}>
                      <td className="whitespace-nowrap text-center sm:pl-6 py-2 pr-3 text-sm font-medium text-gray-900 ">
                        {index+1}
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                        {consult.admin_name}
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                        {consult.created_at}
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-500">
                        {consult.score}
                      </td>
                      {/* <td className="break-words text-center whitespace-nowrap px-3 py-4 text-sm text-gray-500"> */}
                      <td className="whitespace-normal text-center px-3 py-4 text-sm text-gray-500">
                        {consult.senior_content}
                      </td>
                      
                      <td className="relative whitespace-nowrap text-right py-4 pl-3 pr-4 text-sm font-thin sm:pr-6">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          삭제<span className="sr-only"></span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
