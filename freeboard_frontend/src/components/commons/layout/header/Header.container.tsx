import { useRouter } from "next/Router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();

  function onClickSignup() {
    router.push("/signup");
  }

  function onClickLogin() {
    router.push("/login");
  }
  return <HeaderUI onClickSignup={onClickSignup} onClickLogin={onClickLogin} />;
}
