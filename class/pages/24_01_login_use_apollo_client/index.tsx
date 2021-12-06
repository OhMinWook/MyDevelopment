import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
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

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();

  const [myemail, setMyemail] = useState("");
  const [mypassword, setMypassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient();

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
    const MyaccessToken = result.data?.loginUser.accessToken;
    // 새로고침 했을 때 토큰이 날라가서 귀찮음을 방지하고자 브라우저 저장소에 저장
    localStorage.setItem("accessToken", MyaccessToken || "");
    setAccessToken(MyaccessToken); // 여기서 setAccessToken 필요! (글로벌 스테이트에....)

    // const result = awati axios.get("koreanjson.com/posts/1") 이러한 방식으로 원하는 곳에서 useQuery 필요!!!
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,

      context: {
        headers: {
          authorization: `Bearer ${MyaccessToken}`,
        },
      },
    });
    setUserInfo(resultUserInfo.data.fetchUserLoggedIn);

    // const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)

    // 로그인 성공된 페이지로 이동시키기
    router.push("/24_02_login_success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeMyemail} />
      비밀번호: <input type="password" onChange={onChangeMypassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
