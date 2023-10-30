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



# React 문법(TypeScript)
 
### 하위 컴포넌트로 함수 전달하기 
- 기본적으로 하위 컴포넌트가 인자로 함수를 받아야하는데, TS로 인해, Interface에 타입을 선정해주는 것이 좋다.
 