# SVG 컴포넌트화 
- TypeScript에게 SVG 파일이 React 컴포넌트로 사용될 수 있다는 것을 알려주는 방법은
 TypeScript의 모듈 선언 (Module Declaration)기능을 활용해야합니다.
- TypeScript는 기본적으로 모든 모듈의 타입을 알지 못하기 때문에, 우리는 직접 모듈의 타입을 선언해주어야 합니다. 그렇기에 SVG 파일을 React 컴포넌트로 사용하는 경우, .svg 확장자를 가진 모듈이 실제로는 React 컴포넌트로 사용될 것이라는 것을 TypeScript에게 알려주어야 합니다. 이를 위해 모듈 선언을 사용합니다.


### webpack 설치 이슈!
- @svgr/webpack은 SVG 파일을 React 컴포넌트로 변환해주는 웹팩 로더입니다.
- 웹팩(Webpack)은 자바스크립트 기반의 프론트엔드 어플리케이션을 위한 모듈 번들러(라이브러리라는..)
- 이 로더를 사용하면 SVG 파일을 JSX 문법으로 변환하여, React 컴포넌트처럼 사용할 수 있습니다.
-  Next.js 13 버전부터는 이러한 기능이 내장되어 있어, 별도의 설정 없이도 SVG 파일을 컴포넌트로 import할 수 있습니다. 따라서 Next.js 13 이상을 사용하는 경우에는 @svgr/webpack을 별도로 설치할 필요가 없습니다.



### 

