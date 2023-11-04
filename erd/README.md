# 알짜통 ERD 설계 버전 관리하는 곳 

> Rule : 업데이트된 최신순이 가장 상단으로 올라온다.   
기능이 추가되거나 변경될 시 ERD도 업데이트를 진행하며,   
 아래 필수항목은 무조건 입력하며, 그외 추가사항은 옵션으로 입력한다.   
> CreateDate : 2023.10.19  
> UpdateDate :

## 필수 항목
- ERD가 만들어진 날짜 
- 사용한 서비스 및 플랫폼 링크(혹은 이름)
- 변경 혹은 업데이트가 된 이유    
- ERD 이미지 삽입


<br></br>


### 2023.11.03 - solji
- 스네이크표기법으로 변경
- 일부 컬럼을 직관적인 이름으로 변경
  - SeniorWishList 테이블
     Region → location, 
     LocalDetail → location_detail
- phone_num은 '-'하이픈을 넣을지 고민 중!!
```
Table Senior {
    senior_id int [PK] 
    name varchar(20)
    regi_first_num varchar(6)
    regi_second_num varchar(7)
    gender int
    phone_num varchar(20)
    address text
    health_status int
    agreement_link text
}

Table SeniorWishList {
    wish_list_id int [PK]
    senior_id int [FK]
    location varchar(255)
    location_detail varchar(255)
    job_code_number int
    job_code_name text
    priority int
    salary int
    work_hour int
    work_type int
    etc text
}

Table Career {
    career_id int [PK]
    senior_id int [FK]
    company_name text
    start_period date
    end_period date
    task_type text
}
```
- 만 나이 계산기 추가 (수정 필요)
- 구직자-조회의 List 나열에서 '등록일'은 Senior테이블에 등록되어있지 않음. 추가할까요?
- supabase와 연동 시도
- SQL모듈화를 할지 고민 중.


<br></br>

### 2023.11.02
- ERD설계 중 빠진 부분 보완
  - senior(구직자)페이지 속 phoneNumber 컬럼 추가
<p align="center">
<img src="https://github.com/Alzzatong/Alzzatong-client/assets/104331549/814d608f-1507-419b-b394-06ce808c2906">
</p>

<br></br>


### 2023.10.19
- 링크 : [DBdiagram](https://dbdiagram.io/d/65211b4bffbf5169f038730c)
    - 사용 이유: 무료로 사용가능하며, QuickDBD는 테이블 10개까지만 무료로 제공하는 것과 달리 테이블 전부 표현가능함.
    - 단점 : 여러사용자가 수정할 수 없음.  
- 업데이트 내용: 서비스 기능 변경
  - Recruit 테이블 점심시간 칼럼 추가 
  - Matching 테이블 -> Matching과 Meeting으로  테이블 나누기
  - 근로계약서 리스트 보관하는 테이블 추가필요! 
  - 매칭 테이블 재활용! -> 등록, 사후관리등 추가 정보 입력이라 중복데이터 이슈로 인한 변경

<p align="center">
<img src="https://github.com/Alzzatong/Alzzatong-client/assets/104331549/746c63e2-a817-43f3-85be-b8bee2959a29">
</p>




### 2023.10.07
- 링크 : [QuickDBD](https://app.quickdatabasediagrams.com/#/user/87482/diagrams?page=1&pageSize=20&ownerId=87482&sortBy=schemaSourceId)
  - 사용 이유: 무료로 사용가능하며, 동시에 여러사용자가 작성 및 수정할 수 있음. 

<p align="center">
<img src="https://github.com/Alzzatong/Alzzatong-client/assets/104331549/6c9aacba-09db-4219-ba1a-8c997af738ac">
</p>

- 업데이트 내용: 초기 서비스 ERD 설계 


