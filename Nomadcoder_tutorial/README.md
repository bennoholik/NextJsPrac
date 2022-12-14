## next js study

1. create next app 
`npx create-next-app@latest --typescript`




App Component가 없다!
ReactDOM.render()도 없다!


폴더형식에 잘맞춰서 작업을 해야한다. 넥스트js는 프레임워크이기에 정해진 형식에 맞춰서 넣어야 동작한다. 특정규칙을 맞춰야한다.
그에 반해 리엑트는 라이브러리이기에 입맛대로 폴더구조짜고 폴더이름도 짜고 할수있다.

## 기억해야할 기초지식?

1. 파일명이 페이지이다!

2. index.tsx는 루트페이지이다.

3. 넥스트js의 가장 좋은 기능 중 하나는 -> 앱에 있는 페이지들이 미리 렌더링된다.


Client Side Rendering(CSR) - 브라우저가 유저가 보는 ui를 만든다. 브라우저가 자바스크립트를 실행시켜 렌더링한다 보여준다. 만약 브라우저가 자바스크립트가 비활성화 되어버리면 경고문이뜨게된다. 브라우저가 HTML을 가지고 올때 비어있는 div로 가져오고 리엑트 같은 경우는 자바스크립트 파일을 실행시켜 id="root"인 곳에서 렌더링해준다. 자바스크립트가 비활성화되면 아예 볼수가없다.
Server Side Rendering(SSR)/Static Pre Rendering => 브라우저가 서버에서 HTML파일을 가지고올때 이미 유저가 보는 UI가 같이 나오게 된다. 이미 렌더링된 HTML파일을 가져오기에 흰화면이띄어지는 경우가 아니라 이미 정의 해둔 HTML에 구조가 보인다. 자바스크립트와 리엑트가 로딩되지 않더라도 HTML 코드가 보여지기 때문에 콘텐츠를 볼수있게 된다. 자바스크립트와 리엑트가 실행되면 흔히 리엑트프로젝틀 하듯이 기본적으로 이미 존재하는 것들과 연결이 되어서 일반적인 react.js 앱이 될수있다. 자바스크립트가 비활성화되어도 이미 렌더링된 HTML코드가 있기에 적어도 볼수는 있다.

```jsx
import Link from "next/link"

a tag 는 리로딩되기에 리엑트 라우터 돔에서 링크를 썻던것 처럼 링크로 해야 리로딩되지않고 빠르게 볼수있다.
하지만 넥스트js에서 Link 태그는 스타일이 불가능하다. 안에 A tag나 다른걸로 꾸며줘야한다. classname도 사용불가.
```

```jsx
import {useRouter} from "next/router"
//컴포넌트안에서
const router = useRouter();

//여기서 정의한 router 훅 안에는 여러가지 기능들이있는데 대표적으로 현재위치를 알수있는 pathname이라는 것도있다.

<Link>
  <a style={{color: router.pathname === "/"}}>HOME</a>
</Link>


```

## 의문
함수 표현식은 안되나??