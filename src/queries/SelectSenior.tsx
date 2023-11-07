import { supabase } from "@/services/supabaseClient";
import SeniorSearch from "@/components/Senior/Search";

interface DataType {
  senior_id: number;
  name: string;
  regi_first_num: string;
  regi_second_num: string;
  address: string;
  health_status: number;
  phone_num: string;
  agreement_link: string;
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("Senior").select();

  console.log(data);

  if (error) {
    console.error(error);
    return { props: {} };
  }

  return { props: { data } };
}

export default function SelectSenior({ data }: {data:DataType[]}) {
  return <SeniorSearch data={data} />;
}
