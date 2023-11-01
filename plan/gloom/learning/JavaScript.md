# JavaScript 문법


### Splice()
- 배열에서 사용할 수 있는 내장 메서드 
- 배열 요소를 삭제, 추가, 또는 교체할 때 사용한다.
- 예제 코드 
  - 인자가 하나일 경우: 요소를 제거하기 시작하는 위치

```javascript
///월화수목금토일
let weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat" , "Sun" ]
let days = weeks.splice(2); // 인덱스 2부터 배열 변경

console.log(days); // ['Wed', 'Thu', 'Fri', 'Sat', 'Sun']
console.log(weeks);//['Mon', 'Tue']
```
  - 두번째 인자가 `1`일 경우 : 해당 인저 1개만 제거

```javascript
let weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat" , "Sun" ]
let days = weeks.splice(2, 1); // 인덱스 2인 1요소 삭제

console.log(days); //['Wed']
console.log(weeks);//['Mon', 'Tue', 'Thu', 'Fri', 'Sat', 'Sun']
```
 - 두번째 인자가 `0` 이면 기존 요소를 삭제하지않는다. `2`이면 2개의 요소가 삭제된다.
 - 그리고 세번째 인자 이후 부터는 요소를 추가하게 된다.
 - `Array.splice(start, deleteCount, newItem, newItem, newItem, ...)`
- 사용처 : 구인직무 삭제 버튼 시! 사용

<br></br>

## Asynchronous(비동기)

### ajax랑 axios 랑 차이
||ajax|axios|
|--|--|--|
|기술 스택|XMLHttpRequest 객체를 사용하여 데이터를 비동기적으로 요청하고 응답을 처리| Promise 기반의 HTTP 클라이언트 라이브러리 </br> 브라우저 및 Node.js에서 모두 사용할 수 있으며, XMLHttpRequest나 Fetch API보다 사용하기 더 편리하고 강력한 기능을 제공|
|사용법|기본적으로 브라우저에서 사용되며 JavaScript로 XMLHttpRequest 객체를 생성하고 이를 통해 서버와 통신|Axios는 더 높은 수준의 추상화를 제공하여 HTTP 요청을 간단하게 만듬|
|기능 및 확장성|기본적인 HTTP 요청과 응답을 처리 |Axios는 다양한 기능을 내장, 인터셉터, 요청 취소, HTTP 요청/응답 변환 및 오류 처리 등을 쉽게 확장할 수 있음|
|호환성|오래된 브라우저에서도 동작|Promise 및 브라우저 Fetch API를 기반으로 하며, 브라우저 호환성 면에서 조금 더 편리|

- 요약: Axios는 Ajax보다 더 편리하고 강력한 HTTP 클라이언트 라이브러리





# React 문법(TypeScript)
 
### 하위 컴포넌트로 함수 전달하기 
- 기본적으로 하위 컴포넌트가 인자로 함수를 받아야하는데, TS로 인해, Interface에 타입을 선정해주는 것이 좋다.
 


