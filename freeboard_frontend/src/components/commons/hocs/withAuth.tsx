import { useRouter } from "next/Router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 사용해 주시면 감사하겠습니다.");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
