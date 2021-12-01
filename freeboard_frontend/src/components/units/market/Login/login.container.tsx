import { useMutation } from "@apollo/client";
import { useRouter } from "next/Router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LoginUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";

export default function Login() {
  const { setAccessToken } = useContext(GlobalContext);

  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeInput(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  async function onClickSubmit() {
    const result = await loginUser({
      variables: {
        ...input,
      },
    });
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken || ""
    );
    setAccessToken?.(result.data?.loginUser.accessToken || "");
    alert("로그인에 성공했습니다.");
    router.push("./home");
  }

  function onClickSignup() {
    router.push("./signup");
  }

  return (
    <LoginUI
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
      onClickSignup={onClickSignup}
    />
  );
}
