import Link from "next/link";
import ManAgeCalculate from "../Template/ManAgeCalculate";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SeniorSearch({ data }: { data: any }) {
  return (
    <div className="bg-gray-50">
      <h2 className="mt-10 text-xl	font-medium text-gray-900">
        검색결과:{data?.length}
      </h2>
      {data?.map((senior: any) => (
        <div key={senior.senior_id}>
          <Link href={`/senoir/${senior.senior_id}/detail`}>
            {senior.name}
            <ManAgeCalculate
              firstPart={senior.regi_first_num}
              secondPart={senior.regi_second_num}
            />
            세(만)
            {senior.senior_id}
            {senior.regi_first_num}-{senior.regi_second_num}
          </Link>
        </div>
      ))}
    </div>
  );
}
