type MajorJobCategory = {
    id: string;
    title: string;
  };
  type SubJobCategory = {
    [key: string]: { id: number, title: string }[];
  };
  
  export const majorJobCode: MajorJobCategory[] = [
    { title: "농업, 임업 및 어업", id: "A" },
    { title: "광업", id: "B" },
    { title: "제조업", id: "C" },
    { title: "전기, 가스, 증기 및 공기 조절 공급업", id: "D" },
    { title: "수도, 하수 및 폐기물 처리, 원료 재생업", id: "E" },
    { title: "건설업", id: "F" },
    { title: "도매 및 소매업", id: "G" },
    { title: "운수 및 창고업", id: "H" },
    { title: "숙박 및 음식점업", id: "I" },
    { title: "정보통신업", id: "J" },
    { title: "금융 및 보험업", id: "K" },
    { title: "부동산업", id: "L" },
    { title: "전문, 과학 및 기술 서비스업", id: "M" },
    { title: "사업시설 관리, 사업 지원 및 임대 서비스업", id: "N" },
    { title: "공공 행정, 국방 및 사회보장 행정", id: "O" },
    { title: "교육서비스업", id: "P" },
    { title: "보건업 및 사회복지 서비스업", id: "Q" },
    { title: "예술, 스포츠 및 여가관련 서비스업", id: "R" },
    { title: "협회 및 단체, 수리 및 기타 개인 서비스업", id: "S" },
    {
      title: "가구 내 고용활동 및 달리 분류되지 않은 자가 소비 생산활동",
      id: "T",
    },
    { title: "국제 및 외국기관", id: "U" },
];
  
export const subJobCode: SubJobCategory = {
  A : [
      { title : '농업', id : 1},
      { title : '임업', id : 2},
      { title : '어업', id : 3},
  ],
  B : [
      { title : '석탄, 원유 및 천연가스 광업', id : 1},
      { title : '금속 광업', id : 2},
      { title : '비금속광물 광업; 연료용 제외', id : 3},
  ],
};

  
  /* 업종코드-10차 표준산업분류 연계표:대분류
  농업, 임업 및 어업
  광업
  제조업
  전기, 가스, 증기 및 공기 조절 공급업
  수도, 하수 및 폐기물 처리, 원료 재생업
  건설업
  도매 및 소매업
  운수 및 창고업
  숙박 및 음식점업
  정보통신업
  금융 및 보험업
  부동산업
  전문, 과학 및 기술 서비스업
  사업시설 관리, 사업 지원 및 임대 서비스업
  공공 행정, 국방 및 사회보장 행정
  교육서비스업
  보건업 및 사회복지 서비스업
  예술, 스포츠 및 여가관련 서비스업
  협회 및 단체, 수리 및 기타 개인 서비스업
  가구 내 고용활동 및 달리 분류되지 않은 자가 소비 생산활동
  국제 및 외국기관
    */
  