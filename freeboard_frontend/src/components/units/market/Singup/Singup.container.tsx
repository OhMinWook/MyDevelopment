import { useMutation } from "@apollo/client";
import { useState } from "react";
import SignupUI from "./Singup.presenter";
import { CREATE_USER } from "./Singup.queries";
import { useRouter } from "next/Router";

export default function Signup() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });

  // 비밀번호 입력
  function onChagneInputs(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  const onClickSignup = async () => {
    try {
      const submit = await createUser({
        variables: {
          createUserInput: {
            ...input,
          },
        },
      });
      console.log(submit);
      alert("등록에 성공하였습니다.");
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

    try {
      const user = await createUserWithEmailandPassword(
        auth,
        input.email,
        input.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

    router.push("/login");
  };

  return (
    <SignupUI onChagneInputs={onChagneInputs} onClickSignup={onClickSignup} />
  );
}
