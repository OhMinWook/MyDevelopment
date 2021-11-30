import { useMutation } from "@apollo/client";
import { useState } from "react";
import SignupUI from "./Singup.presenter";
import { CREATE_USER } from "./Singup.queries";

export default function Signup() {
  const [createUser] = useMutation(CREATE_USER);
  const [confirmpassword, setConfirmPassword] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });

  function onChagneInputs(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  function onConfirmInputs(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  const hasError = () => {
    input.password.length < 6 ? true : false;
  };

  const hasNotSameError = () => {
    input.password !== confirmpassword ? true : false;
  };

  const onClickSignup = () => {
    if (input.password !== confirmpassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    try {
      const submit = createUser({
        variables: {
          createUserInput: {
            ...input,
          },
        },
      });
      alert("등록에 성공하였습니다.");
      console.log(submit);
      if (!/\w+@\w+\.\w+/.test(input.email)) {
        alert("이메일을 제대로 작성하세요");
      }
      if (!input.name) {
        alert("이름을 작성하세요");
      }
      if (input.password.length < 6) {
        alert("비밀번호를 6자리 이상 입력하세요");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SignupUI
      onChagneInputs={onChagneInputs}
      onClickSignup={onClickSignup}
      onConfirmInputs={onConfirmInputs}
      hasError={hasError}
      hasNotSameError={hasNotSameError}
      confirmpassword={confirmpassword}
    />
  );
}
