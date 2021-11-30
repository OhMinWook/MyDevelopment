import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [myemail, setMyemail] = useState("");
  const [mypassword, setMypassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeMyemail(event: ChangeEvent<HTMLInputElement>) {
    setMyemail(event.target.value);
  }

  function onChangeMypassword(event: ChangeEvent<HTMLInputElement>) {
    setMypassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: myemail,
        password: mypassword,
      },
    });
    setAccessToken(result.data?.loginUser.accessToken); // 여기서 setAccessToken 필요! (글로벌 스테이트에....)

    // 로그인 성공된 페이지로 이동시키기
    router.push("/22_02_login_success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeMyemail} />
      비밀번호: <input type="password" onChange={onChangeMypassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
