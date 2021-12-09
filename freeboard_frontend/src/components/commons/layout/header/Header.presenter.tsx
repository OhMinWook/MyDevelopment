import { Header, TopHeader, Button1, Button2, Logo } from "./Header.styles";

export default function HeaderUI(props) {
  return (
    <>
      <TopHeader>
        <Button1 onClick={props.onClickSignup}>회원가입</Button1>
        <Button2 onClick={props.onClickLogin}>로그인</Button2>
      </TopHeader>
      <Header>
        <Logo onClick={props.onClickHome} src={"/images/headerlogo.jpg"} />
      </Header>
    </>
  );
}
