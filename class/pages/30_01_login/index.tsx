import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
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
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
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
    // 새로고침 했을 때 토큰이 날라가서 귀찮음을 방지하고자 브라우저 저장소에 저장
    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUserExample.accessToken || ""
    // );
    localStorage.setItem("refreshToken", "true");
    setAccessToken(result.data?.loginUserExample.accessToken); // 여기서 setAccessToken 필요! (글로벌 스테이트에....)

    // const result = awati axios.get("koreanjson.com/posts/1") 이러한 방식으로 원하는 곳에서 useQuery 필요!!!
    // const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)

    // 로그인 성공된 페이지로 이동시키기
    router.push("/30_02_login_success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeMyemail} />
      비밀번호: <input type="password" onChange={onChangeMypassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
