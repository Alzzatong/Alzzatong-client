export interface SeniorData {
  [key: string]: string | number | Date ;
  name: string;
  regi_first_num: string;
  regi_second_num: string;
  gender: number
  address: string;
  health_status: number;
  phone_num: string;
  agreement_link: string;
}

export interface GetSeniorData extends SeniorData {
  created_at: Date;
  senior_id: number;
}

export const initialSeniorData: SeniorData = {
name: "",
regi_first_num: "",
regi_second_num: "",
gender: 1,
address: "",
health_status: 0,
phone_num: "",
agreement_link: "",
}

export interface SeniorWishList {
  [key: string]: string | number ;
  location: string;
  location_detail: string;
  job_code_number: number;
  job_type_name: string;
  priority: number;
  salary: number;
  work_hour: number
  work_type: number;
  etc: string;
}

export interface GetSeniorWishList extends SeniorWishList {
wish_list_id: number;
senior_id: number;
}

export const initialSeniorWishListData:SeniorWishList = 
{
  location: "",
  location_detail: "",
  job_code_number: 100,
  job_type_name: "",
  priority: 1,
  salary: 0,
  work_hour: 0,
  work_type: 0,
  etc: "",
}

export interface SeniorCareer {
[key: string]: string | number | Date;
company_name: string;
start_period: Date;
end_period: Date;
task_type: string;
}

export const initialSeniorCareerData:SeniorCareer = 
{
  company_name: "",
  start_period: new Date(),
  end_period: new Date(),
  task_type: "",
}

export interface GetSeniorCareer extends SeniorCareer {
senior_id: number;
career_id: number;
}

export interface SaveSeniorCareer extends SeniorCareer {
senior_id: number;
}

export interface SeniorJoinWish {
  senior_id: number;
  created_at: Date;
  name: string;
  regi_first_num: string;
  regi_second_num: string;
  gender: number
  address: string;
  health_status: number;
  phone_num: string;
  agreement_link: string;
  senior_wishlist: GetSeniorWishList[];
}

export interface SeniorJoinWishCareer {
  senior_id: number;
  created_at: Date;
  name: string;
  regi_first_num: string;
  regi_second_num: string;
  gender: number
  address: string;
  health_status: number;
  phone_num: string;
  agreement_link: string;
  senior_wishlist: GetSeniorWishList[];
  career: GetSeniorCareer[];
}

export interface ConsultSenior {
  consult_senior_id: number;
  senior_id: number;
  created_at: Date;
  score: number;
  job_availability: boolean;
  admin_id: number;
  content: string;
}

export interface SeniorConsultJoinAdmin {
  consult_senior_id: number;
  senior_id: number;
  created_at: Date;
  score: number;
  job_availability: boolean;
  admin_id: number;
  content: string;
  admin: GetAdmin;
}

export interface GetAdmin {
  admin_id: number;
  name: string;
}

export interface MatchingLightSearch {
  senior_id: number;
  name: string;
  regi_first_num: string;
  address: string;
}

export interface SearchSeniorSingleBox {
  name: string;
  regi_first_num: string;
  regi_second_num: string;
  phone_num: string;
  address: string;
  senior_wishlist: GetSingleWishList[];
}

export interface GetSingleWishList {
  location: string;
  job_code_number: number;
  job_type_name: string;
  priority: number;
}

export const Priority = [
{ id: 1, title: "1" },
{ id: 2, title: "2" },
{ id: 3, title: "1" },
];

export const HealthStatusItem = [
{ id: 1, title: "좋은편" },
{ id: 2, title: "보통" },
{ id: 3, title: "나쁜편" },
];

export const GenderItem = [
{ id: "1", title: "남성" },
{ id: "2", title: "여성" },
];

export const WorkHourItem = [
{ id: "0", title: "선택" },
{ id: "4", title: "일/4시간" },
{ id: "5", title: "일/5시간" },
{ id: "6", title: "일/6시간" },
{ id: "7", title: "일/7시간" },
{ id: "8", title: "일/9시간" },
];

export const ScheduleItem = [
{ id: 1, title: "주5일" },
{ id: 2, title: "주3~4일" },
{ id: 3, title: "주3일 미만" },
{ id: 4, title: "종일제" },
{ id: 5, title: "격일제" },
{ id: 6, title: "시간제" },
{ id: 7, title: "관계없음" },
];

interface BigJobCode {
id: number;
title: string;
}
interface SmallJobCode {
[key: number]: { id: string; title: string }[];
}

export const BigJobCode: BigJobCode[] = [
{ id: 100, title: "선택" },
{ id: 0, title: "경영·사무·금융·보험" },
{ id: 1, title: "연구 및 공학 기술" },
{ id: 2, title: "교육·법률·사회복지·경찰·소방·군인" },
{ id: 3, title: "보건·의료" },
{ id: 4, title: "예술·디자인·방송·스포츠" },
{ id: 5, title: "미용·여행·숙박·음식·경비·청소" },
{ id: 6, title: "영업·판매·운전·운송" },
{ id: 7, title: "건설·채굴" },
{ id: 8, title: "설치·정비·생산" },
{ id: 9, title: "농림어업" },
];

export const SmallJobCode: SmallJobCode = {
0: [
  { id: "0", title: "선택" },
  { id: "01", title: "관리 (임원·부서장)" },
  { id: "02", title: "경영·행정· 사무" },
  { id: "021", title: "정부·공공행정 전문가" },
  { id: "03", title: "금융·보험" },
],
1: [
  { id: "1", title: "선택" },
  { id: "11", title: "인문·사회과학 연구" },
  { id: "12", title: "자연·생명과학 연구" },
  { id: "13", title: "정보통신 연구개발 및 공학기술" },
  { id: "14", title: "건설·채굴 연구개발 및 공학기술" },
  { id: "15", title: "제조 연구개발 및 공학기술" },
],
2: [
  { id: "2", title: "선택" },
  { id: "21", title: "교육" },
  { id: "22", title: "법률" },
  { id: "23", title: "사회복지·종교" },
  { id: "24", title: "경찰·소방·교도" },
  { id: "25", title: "군인" },
],
3: [
  { id: "3", title: "선택" },
  { id: "30", title: "보건·의료" }
],
4: [
  { id: "4", title: "선택" },
  { id: "41", title: "예술·디자인·방송" },
  { id: "42", title: "스포츠·레크리에이션" },
],
5: [
  { id: "5", title: "선택" },
  { id: "51", title: "미용·예식 서비스" },
  { id: "52", title: "여행·숙박·오락 서비스" },
  { id: "53", title: "음식 서비스" },
  { id: "54", title: "경호·경비" },
  { id: "55", title: "돌봄 서비스 (간병·육아)" },
  { id: "56", title: "청소 및 기타 개인서비스" },
],
6: [
  { id: "6", title: "선택" },
  { id: "61", title: "영업·판매" },
  { id: "62", title: "운전·운송" },
],
7: [
  { id: "7", title: "선택" }, 
  { id: "70", title: "건설·채굴" }
],
8: [
  { id: "8", title: "선택" },
  { id: "81", title: "기계 설치·정비·생산" },
  { id: "82", title: "금속·재료 설치·정비·생산" },
  { id: "83", title: "전기·전자 설치·정비·생산" },
  { id: "84", title: "정보통신 설치·정비" },
  { id: "85", title: "화학·환경 설치·정비·생산" },
  { id: "86", title: "섬유·의복 생산" },
  { id: "87", title: "식품 가공·생산" },
  { id: "88", title: "인쇄·목재·공예 및 기타" },
  { id: "89", title: "제조 단순" },
],
9: [
  { id: "9", title: "선택" }, 
  { id: "90", title: "농림어업" }],
};

interface Location {
id: string;
title: string;
}

interface LocationDetail {
[key: string]: Location[];
}

export const Location: Location[] = [
{ id: "특별시/도", title: "특별시/도" },
{ id: "서울", title: "서울" },
{ id: "인천", title: "인천" },
{ id: "경기도", title: "경기도" },
];

export const LocationDetail: LocationDetail = {
"특별시/도": [
  { id: "시/구/군", title: "시/구/군" },
],
"인천": [
  { id: "인천의 구/군", title: "인천의 시/구/군" },
  { id: "강화군", title: "강화군" },
  { id: "계양구", title: "계양구" },
  { id: "남동구", title: "남동구" },
  { id: "동구", title: "동구" },
  { id: "미추홀구", title: "미추홀구" },
  { id: "부평구", title: "부평구" },
  { id: "서구", title: "서구" },
  { id: "연수구", title: "연수구" },
  { id: "옹진군", title: "옹진군" },
  { id: "중구", title: "중구" },
],
"서울": [
  { id: "서울의 구/군", title: "서울의 시/구/군" },
  { id: "강남구", title: "강남구" },
  { id: "강동구", title: "강동구" },
  { id: "강북구", title: "강북구" },
  { id: "강서구", title: "강서구" },
  { id: "관악구", title: "관악구" },
  { id: "광진구", title: "광진구" },
  { id: "구로구", title: "구로구" },
  { id: "금천구", title: "금천구" },
  { id: "노원구", title: "노원구" },
  { id: "도봉구", title: "도봉구" },
  { id: "동대문구", title: "동대문구" },
  { id: "동작구", title: "동작구" },
  { id: "마포구", title: "마포구" },
  { id: "서대문구", title: "서대문구" },
  { id: "서초구", title: "서초구" },
  { id: "성동구", title: "성동구" },
  { id: "성북구", title: "성북구" },
  { id: "송파구", title: "송파구" },
  { id: "양천구", title: "양천구" },
  { id: "영등포구", title: "영등포구" },
  { id: "용산구", title: "용산구" },
  { id: "은평구", title: "은평구" },
  { id: "종로구", title: "종로구" },
  { id: "중랑군", title: "중랑군" },
],
"경기도": [
  { id: "경기도의 시/군", title: "경기도의 시/구/군" },
  { id: "수원시", title: "수원시" },
  { id: "성남시", title: "성남시" },
  { id: "용인시", title: "용인시" },
  { id: "고양시", title: "고양시" },
  { id: "부천시", title: "부천시" },
  { id: "안산시", title: "안산시" },
  { id: "남양주시", title: "남양주시" },
  { id: "화성시", title: "화성시" },
  { id: "안양시", title: "안양시" },
  { id: "평택시", title: "평택시" },
  { id: "의정부시", title: "의정부시" },
  { id: "시흥시", title: "시흥시" },
  { id: "파주시", title: "파주시" },
  { id: "광명시", title: "광명시" },
  { id: "김포시", title: "김포시" },
  { id: "군포시", title: "군포시" },
  { id: "광주시", title: "광주시" },
  { id: "이천시", title: "이천시" },
  { id: "양주시", title: "양주시" },
  { id: "오산시", title: "오산시" },
  { id: "구리시", title: "구리시" },
  { id: "안성시", title: "안성시" },
  { id: "포천시", title: "포천시" },
  { id: "의왕시", title: "의왕시" },
  { id: "하남시", title: "하남시" },
  { id: "여주시", title: "여주시" },
  { id: "양평군", title: "양평군" },
  { id: "과천시", title: "과천시" },
  { id: "가평군", title: "가평군" },
  { id: "연천군", title: "연천군" },
  { id: "동두천시", title: "동두천시" },
],
};

interface Score {
id: number;
title: string;
}

interface JobAvailability {
id: boolean;
title: string;
}

export const Score: Score[] = [
{ id: 1, title: "★☆☆☆☆" },
{ id: 2, title: "★★☆☆☆" },
{ id: 3, title: "★★★☆☆" },
{ id: 4, title: "★★★★☆" },
{ id: 5, title: "★★★★★" },
];

export const JobAvailability: JobAvailability[] = [
{ id: true, title: "구직 완료" },
{ id: false, title: "구직중" },
];

