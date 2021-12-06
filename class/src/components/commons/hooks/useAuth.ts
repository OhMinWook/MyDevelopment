import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인만 한 사람만 입장 가능합니다. 로그인을 먼저 해주세요");
      router.push("/23_04_login");
    } else {
      setIsLoading(false);
    }
  }, []);

  return {
    // 객체이므로 key 값과 value값을 넘겨준다.
    isLoading: isLoading,
  };
}
