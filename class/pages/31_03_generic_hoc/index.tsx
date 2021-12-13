import { useRouter } from "next/router";
import { useContext, useEffect, ComponentType } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    // const { setAccessToken } = useContext(GlobalContext);

    // 먼저 서버에서 그려주고 브라우저에 띄워준다.
    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인만 한 사람만 입장 가능합니다. 로그인을 먼저 해주세요");
        router.push("/23_04_login");
      }
    }, []);

    return <Component {...props} />;
  };
