import { supabase } from "@/lib/supabase/supabase";

export async function getSeniorWishCareerSelect(sid: number) {
  //supabase connect (`table:foreignTable(columns)`)
  const { data: joinData, error } = await supabase
    .from("senior")
    .select(`*, senior_wishlist:senior_wishlist(*), career:career(*)`)
    .eq("senior_id", sid);
  if (error) {
    console.log("callSeniorWishCareerData has connect error", error);
    return [];
  }
  return joinData;
}

export async function getSeniorConsultSelect(sid: number) {
  //supabase connect (`table:foreignTable(columns)`)
  const { data: consultData, error } = await supabase
    .from("consult_senior")
    .select(`*`)
    .eq("senior_id", sid);
  if (error) {
    console.log("getSeniorConsultSelect has connect error", error);
    return [];
  }
  return consultData || [];
}

export async function getSeniorLightSearch(senior_id: number) {
  //supabase connect (`table:foreignTable(columns)`)
  const { data: seniorlightData, error } = await supabase
    .from("senior")
    .select(`name, regi_first_num, regi_second_num, phone_num, address, senior_wishlist:senior_wishlist(location, job_code_number, job_type_name, priority)`)
    .eq("senior_id", senior_id);
  if (error) {
    console.log("getSeniorLightSearch has connect error", error);
    return [];
  }
  console.log("getSeniorLightSearch 진행");
  return seniorlightData || [];
}

export async function getAllRecruitByLocation(recruitByLocation: string[]) {
  //supabase connect (`table:foreignTable(columns)`)
  // const locations = recruitByLocation.join(',');
  // let locations = recruitByLocation[0][0]; //임시로 첫번째만 진행
  let locations = recruitByLocation; //임시로 진행
  console.log(recruitByLocation, "getAllRecruitByLocation가 recruitByLocation을 받음")

  const { data: byLocationData, error } = await supabase
    .from("company")
    .select(`id, company_name, manager_name, manager_phone, region, address, recruit:recruit(id, job_type, number_of_hires, working_type, work_start_hour, work_end_hour, job_availablility, salary)`)
    // .ilike("region", `%${locations}%`)
    .ilike("region", `%인천%`)
    .filter("recruit.job_availablility", "eq", true);
  if (error) {
    console.log("getSeniorLightSearch has connect error", error);
    return [];
  }
  console.log("getRecruitLocation - 지역으로 회사 검색 진행");
  return byLocationData || [];
}