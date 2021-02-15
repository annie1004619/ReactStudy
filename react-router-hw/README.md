## react router와 context API를 사용해서 만든 로그인, 회원가입, 마이페이지 

### 페이지 개요
- 비회원일 경우
  - 메인 페이지가 로그인 페이지
  - Context API에 있는 아이디, 비밀번호로 로그인할 시 로그인됨
  - 로그인 버튼을 눌렀을 경우 로그인됨
  - 회원가입 페이지 접근 가능
  - 회원가입 페이지에서는 아이디, 비밀번호, 비밀번호 확인을 입력받음
  - Context API로 회원정보를 저장해줌

- 회원일 경우
  - 메인페이지에 로그아웃 버튼, 마이페이지를 들어갈 수 있는 버튼이 있음
  - 마이페이지에 접속시 로그인시 로그인한 아이디가 보임
그리고 이 계정을 수정가능하게 함
  - 로그아웃시 login false로 

<hr/>


### 디렉토리를 나누기
- component : 공통으로 사용되는 컴포넌트들 넣기
- context: context api 
- hooks: 커스텀 hooks 만들어 넣기
- pages: Route에서 이동되는 페이지들 넣기 
(Login, SignUp, Home, MyPage, NotFound)

<hr/>

### 페이지

- 로그인 페이지

![](https://images.velog.io/images/annie1004619/post/459cc164-1d5e-4a09-8c1d-9f97f20236ce/image.png)

- 회원가입 페이지

![](https://images.velog.io/images/annie1004619/post/41eb5d6f-0b66-4e68-bec9-3090e2b741fe/image.png)

- 메인 페이지

 ![](https://images.velog.io/images/annie1004619/post/9eb7c5cd-b44b-4281-bc46-ae6f4d02458c/purplecode.png)
 
 - 마이 페이지
 
 ![](https://images.velog.io/images/annie1004619/post/27f2bfa6-2408-4505-a148-f8e092468a62/image.png)
 
 - 정보 수정 페이지
 
 ![](https://images.velog.io/images/annie1004619/post/0a2e7176-1818-4dfb-a23b-fbc59092cbfc/image.png)
 
 
