import {
  Wrapper,
  Title,
  Id,
  Idinput,
  IdBtn,
  Altext,
  IdCheck,
  Inputs,
  PasswordInputs,
  PasswordInput,
  AddressButton,
  AddressInput,
  SingupButton,
} from "../Singup/Singup.styles";

export default function SignupUI() {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      {/* <Line /> */}
      <Id>
        <Altext>아이디</Altext>
        <div>
          <Inputs>
            <Idinput />
            <IdBtn>중복확인</IdBtn>
          </Inputs>
          <div>
            <IdCheck>X 6자 이상의 영문 혹은 영문과 숫자를 조합</IdCheck>
            <IdCheck>X 아이디 중복확인</IdCheck>
          </div>
        </div>
      </Id>
      <Id>
        <Altext>비밀번호</Altext>
        <PasswordInputs>
          <Inputs>
            <Idinput />
            {/* <IdBtn>중복확인</IdBtn> */}
          </Inputs>
          <div>
            <IdCheck>X 10자 이상 입력</IdCheck>
            <IdCheck>
              X 영문/숫자/특수문자/(공백 제외)만 허용하며, 2개 이상 조합
            </IdCheck>
            <IdCheck>X 동일한 숫자 3개 이상 연속 사용 불가</IdCheck>
          </div>
        </PasswordInputs>
      </Id>
      <Id>
        <Altext>비밀번호</Altext>
        <PasswordInput>
          <Idinput />
          {/* <IdBtn>중복확인</IdBtn> */}
        </PasswordInput>
      </Id>
      <Id>
        <Altext>이름</Altext>
        <PasswordInput>
          <Idinput />
          {/* <IdBtn>중복확인</IdBtn> */}
        </PasswordInput>
      </Id>
      <Id>
        <Altext>이메일</Altext>
        <PasswordInput>
          <Idinput />
          {/* <IdBtn>중복확인</IdBtn> */}
        </PasswordInput>
      </Id>
      <Id>
        <Altext>휴대폰</Altext>
        <PasswordInput>
          <Idinput />
          {/* <IdBtn>중복확인</IdBtn> */}
        </PasswordInput>
      </Id>
      <Id>
        <Altext>주소</Altext>
        <AddressInput>
          <AddressButton>주소 검색</AddressButton>
          {/* <IdBtn>중복확인</IdBtn> */}
        </AddressInput>
      </Id>
      <SingupButton>가입하기</SingupButton>
    </Wrapper>
  );
}
