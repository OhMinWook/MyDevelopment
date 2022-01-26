import { useEffect } from "react";
import { Header, TopHeader, Button1, Button2, Logo } from "./Header.styles";

export default function HeaderUI(props) {
  useEffect(() => {
    const result = localStorage.getItem("refreshToken");
    console.log(result);
  }, []);
  return (
    <>
      <TopHeader>
        <Button1 onClick={props.onClickSignup}>회원가입</Button1>
        {/* {localStorage.getItem("refreshToken") ? ( */}
        <Button2 onClick={props.onClickLogout}>로그아웃</Button2>
        {/* ) : ( */}
        <Button2 onClick={props.onClickLogin}>로그인</Button2>
        {/* )} */}
      </TopHeader>
      <Header>
        <Logo onClick={props.onClickHome} src={"/images/headerlogo.jpg"} />
      </Header>
    </>
  );
}
