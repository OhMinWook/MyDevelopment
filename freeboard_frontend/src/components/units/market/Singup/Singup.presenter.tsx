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
  SingupButton,
} from "../Singup/Singup.styles";

export default function SignupUI(props) {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Id>
        <Altext>이름</Altext>
        <PasswordInput>
          <Idinput
            placeholder="이름을 입력하세요"
            onChange={props.onChagneInputs}
            type="text"
            name="name"
          />
        </PasswordInput>
      </Id>
      <Id>
        <Altext>비밀번호</Altext>
        <PasswordInputs>
          <Inputs>
            <Idinput
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChagneInputs}
              type="password"
              name="password"
              error={props.hasError("input.password")}
            />
          </Inputs>
          <div>
            <IdCheck>X 6자 이상 입력</IdCheck>
            <IdCheck>
              X 영문/숫자/특수문자/(공백 제외)만 허용하며, 2개 이상 조합
            </IdCheck>
            <IdCheck>X 동일한 숫자 3개 이상 연속 사용 불가</IdCheck>
          </div>
        </PasswordInputs>
      </Id>
      <Id>
        <Altext>비밀번호 확인</Altext>
        <PasswordInput>
          <Idinput
            placeholder="비밀번호를 한번 더 입력하세요"
            onChange={props.onConfirmInputs}
            type="password"
            name="confirmpassword"
            error={props.hasNotSameError("confirmpassword")}
            helperText={
              props.hasNotSameError("confirmpassword")
                ? "입력한 비밀번호와 일치하지 않습니다."
                : null
            }
          />
        </PasswordInput>
      </Id>
      <Id>
        <Altext>이메일</Altext>
        <div>
          <Inputs>
            <Idinput
              placeholder="예: connect@connect.com"
              onChange={props.onChagneInputs}
              type="text"
              name="email"
            />
            <IdBtn>중복확인</IdBtn>
          </Inputs>
        </div>
      </Id>

      <SingupButton onClick={props.onClickSignup}>가입하기</SingupButton>
    </Wrapper>
  );
}
