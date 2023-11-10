# JavaScript 문법
## function 과 React.FC 차이
- function
  - JavaScript의 표준 함수를 이용하여 컴포넌트를 생성하며, 이 방식은 React.FC보다 더 일반적이고 유연하다.
     - 특히 TypeScript를 사용하지 않는 경우에는 이 방식을 주로 사용
- React.FC
  - TypeScript와 함께 사용되는 방식으로, FC는 Function Component의 약자
  - React.FC는 children이라는 props를 자동으로 포함하므로, children을 받지 않는 컴포넌트를 만들 경우에는 이를 명시적으로 제거해야 한다는 단점

## value 와 defaultbValue
### 이둘의 차이점이 뭘까?
- uncontrolled Component VS controlled Component 이 둘의 차이점을 알면된다. 
- controlled Component : react의 state와 통합된 폼 컨트롤
- uncontrolled Component : 통합하지 않고 useRef를 이용하여 DOM을 다루는 방식
### form의 value를 처리하는 방식 
- state값을 사용하고 handler를 통해 변경해주는 법 (controlled Component)
- 컴포넌트 안에 DOM handler를 사용하는 법 (uncontrolled Component)



## Modal 
- [리엑트-모달 라이브러리 공식 링크](https://reactcommunity.org/react-modal/)
- 보통 alert(경고)창 대신에 custom한 모달창을 쓴다. (모달창을 쓰는 이유는 아래와 같다.)
  - 이유는 화면의 일부를 가리면서 사용자에게 주의를 집중시킬 수 있고
  - 단순히 메시지를 표시하고 확인버튼 누르면 닫히는 alert창과는 다르게, 다양한 상호작용이 가능하다.
  - 디자인과 스타일링도 가능
- 이러한 모달창을 사용하기 좋게, 라이브러리로 제공을 해준다. 
  - React Modal, Material-UI, React-Bootstrap, Reach UI 등의 라이브러리가 있다.
  - 이중 react기반으로 개발된 React Modal이 기존 컴포넌트와함께 자연스럽게 통합되기 좋다.
  - 또한, React Modal은 경량화되어 있어, 다른 모달 라이브러리에 비해 더 가볍고 효율적이다.
### React Modal 제공하는 기능
- 이 외에도 많은 기능이 있지만, 알게된 내용 및 사용할 것 같은 것만 정리해봤다.

|prop명|타입|설명| 
|--|--|--|
|isOpen|boolean|모달 창이 표시되어야 하는지 여부를 나타냄. 기본값은 false이며, 해당값이 true이면 모달창이 열린다.| 
|onRequestClose|event: React.MouseEvent 혹은 React KeyboardEvent|모달이 닫힐 때 실행될 함수. 즉, 사용자가 모달을 닫으려고 할 때 실행되는 함수이다.|
|style| Styles 혹은 undefined|	모달 창과 모달 창 바깥에 대한 style을 지정 |
|contentLabel|string|스크린리더 사용자(시각장애인)에게 콘텐츠를 전달할 때 음성으로 나갈 문자열이다.|
|shouldCloseOnOverlayClick|boolean|팝업창이 아닌 바깥 부분에서 클릭하였을 때, 닫히도록 할 것인지에 대한 처리이다. 기본값은 true|




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
 


