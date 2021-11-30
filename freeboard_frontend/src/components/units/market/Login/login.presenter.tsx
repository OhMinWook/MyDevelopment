import {
  Wrapper,
  Title,
  Input,
  Search,
  Security,
  Connect,
  Searches,
  Id,
  LoginButton,
  SignupButton,
} from "../Login/login.styles";
export default function LoginUI() {
  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
        <Input placeholder="아이디를 입력해 주세요" />
        <Input placeholder="비밀번호를 입력해 주세요" />
        <Search>
          <Security>
            <input type="checkbox" />
            <Connect>보안접속</Connect>
          </Security>
          <Searches>
            <Id>아이디 찾기</Id>
            <div>비밀번호 찾기</div>
          </Searches>
        </Search>
        <LoginButton>로그인</LoginButton>
        <SignupButton>회원가입</SignupButton>
      </Wrapper>
    </>
  );
}
