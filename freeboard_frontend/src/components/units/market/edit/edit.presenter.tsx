import * as E from "./edit.styles";
import { IEditPropsUI } from "./edit.types";

export default function EditUI(props: IEditPropsUI) {
  return (
    <E.Wrapper>
      <E.Information>ID 및 비밀번호 변경</E.Information>
      <E.InnerWrapper>
        <E.EditTitle>ID 수정</E.EditTitle>
        <E.ContentWrapper>
          <div>
            <E.Title>이메일</E.Title>
            <E.Input
              defaultValue={props.data?.fetchUserLoggedIn.email}
              disabled
            />
          </div>
          <div>
            <E.Title>닉네임</E.Title>
            <E.Input onChange={props.onChangeName} />
          </div>
        </E.ContentWrapper>
        <div>
          <E.PasswordTitle>비밀번호 변경</E.PasswordTitle>
          <E.ContentWrapper>
            <div>
              <E.Title>변경 비밀번호</E.Title>
              <E.Input onChange={props.onChangeCheck} type="password" />
            </div>
            <div>
              <E.Title>비밀번호 확인</E.Title>
              <E.Input onChange={props.onChangePassword} type="password" />
            </div>
          </E.ContentWrapper>
        </div>
        <E.Button onClick={props.onClickEdit}>변경</E.Button>
      </E.InnerWrapper>
    </E.Wrapper>
  );
}
