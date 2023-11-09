# 알짜통 개발진행공유 문서  
> CreateDate : 2023.11.03  
> UpdateDate : 2023.11.03
## Rule 
1. 업데이트된 최신순이 가장 상단으로 올라온다.   
2. 기능이 추가되거나 변경될 시 업데이트를 진행하며, 사유와 방법에 대해 기입한다.    
3. 추가된 라이브러리가 있을 시, 추가적인 설명을 적는다.     
4. 날짜를 추가로 기입한다.      

<br></br>

### 2023.11.06

- Template의 RadioButton을 본딴 Radio를 추가했습니다. props로 함수 받아서 작동하는 방식입니다.
- 구직자 페이지 전부에 상태관리를 위한 useState를 더 보강하고 있습니다. 에러가 안 생기면 좋겠습니다...
- supabase와의 테이블 join해서 response받는 작업은 거의 끝나갑니다. 에러가 안 생기면 좋겠습니다...
- 슬슬 components-Dummy폴더안의 interface와 list들을 옮길 폴더를 만들까합니다.
- public-svgs-trashIcon.tsx를 추가했습니다. 쓰레기통 모양 아이콘입니다.

<br></br>


### 2023.11.05

- 날짜 입력을 위한 캘린더를 추가했는데 선택할 때 month를 영어로 보여줘서 교체할까 고민 중.
    - 한글로 된 캘린더가 있으면 좋겠습니다.
- 함수를 인자로 받을 수 있는 기능을 원하여 기존 Template 기능(Add Button)의 props를 수정.
    - 같은 의미로 DropBox에서 Multi를 제거, Single로만 작동할 수 있도록 교체.

<br></br>


### 2023.11.04

- 날짜 입력을 위한 MUI API 추가. 클릭하면 캘린더가 보입니다. 그냥 숫자만 입력해도 됩니다.
@mui/x-date-pickers
설치: yarn add @mui/x-date-pickers dayjs @mui/material @emotion/react @emotion/styled 
링크: https://mui.com/x/react-date-pickers/getting-started/

<br></br>


### 2023.11.03

주민번호 필터링을 위한 정규식 추가
