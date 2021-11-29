import { Header, TopHeader, Button1, Button2, Logo } from "./Header.styles";

export default function HeaderUI() {
  return (
    <>
      <TopHeader>
        <Button1>회원가입</Button1>
        <Button2>로그인</Button2>
      </TopHeader>
      <Header>
        <Logo src={"/images/headerlogo.jpg"} />
      </Header>
    </>
  );
}
