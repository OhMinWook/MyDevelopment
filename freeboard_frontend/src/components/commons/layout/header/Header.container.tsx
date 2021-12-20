import { useMutation } from "@apollo/client";
import { useRouter } from "next/Router";
import HeaderUI from "./Header.presenter";
import { LOG_OUT } from "./Header.queries";
import { useState } from "react";

export default function Header(props) {
  const [logout, setLogout] = useState(false);
  const router = useRouter();
  const [logoutUser] = useMutation(LOG_OUT);

  function onClickSignup() {
    router.push("/signup");
  }

  function onClickLogin() {
    router.push("/login");
  }

  function onClickHome() {
    router.push("/home");
  }

  const onClickLogout = async () => {
    localStorage.removeItem("refreshToken");
    const result = await logoutUser();
    alert("로그아웃되었습니다.");
    router.push("/home");
  };

  return (
    <HeaderUI
      logout={logout}
      onClickSignup={onClickSignup}
      onClickLogin={onClickLogin}
      onClickHome={onClickHome}
      onClickLogout={onClickLogout}
    />
  );
}
