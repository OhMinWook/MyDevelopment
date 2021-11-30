import { useMutation } from "@apollo/client";
import { useState } from "react";
import LoginUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeInput() {}

  return <LoginUI />;
}
