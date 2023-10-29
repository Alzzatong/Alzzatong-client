# 템플리화 정리 
- 참고로 정리순서는 한글 사전순으로 정렬해놓았다.
1️⃣ 템플릿으로 만든 내용을 정리해놓는 공간이다.   
2️⃣ 기본적으로 템플릿은 컴포넌트 폴더안에 있으며, 특이사항의 경우 경로를 별도로 체크하자!  
3️⃣ 또한, 해당 파일 확장자도 `.tsx`가 기본이며, 예외경우는 표기 해두자!   
4️⃣ 그리고 해당 컴포넌트에 들어가는 필요인자도 정리해두자! 

<br></br>


## 공통 템플릿 
✅ 폴더 경로 : src -> component -> Template 
<br></br>

### Label(라벨 정리)
> 기본적으로 필수 인자는 `id` 값과 `text`이다.
- 입력칸위에 라벨 텍스트 : LabelText 

<br></br>


### List (리스트 정리) 
- 테이블 : TableList(`아직 템플릿화 적용중`) 

<br></br>


### Button(버튼 정리)
> 버튼형태라서 크게 없다.
- 라디오 버튼 : RadioButton
  - 인자 : `itemList`, `groupName` 
  - Inline 형태로 라디오버튼이 추가된다. 
- 중복 체크 : DoubleCheck
- 찾아보기 :  Search

<br></br>


### SelectBox(선택 항목 정리)
- @뒤에 오는 이메일 드랍박스 : EmailDomain(`아직 템플릿적용 필요`) 

<br></br>

### Input(입력칸 정리)
> 기본적으로 필수 인자는 `id` 값, 선택 인자는 `holder`이다.

- 년도 : YearInput  
- 문자열 : StringInput
- 긴 문자열 : TextAreaBox
- 숫자 : NumberInput
- 이메일 : EmailInput
- 이름 : NameInput
- 전화번호 : PhoneInput

<br></br>
<br></br>



## 구인처 템플릿 
