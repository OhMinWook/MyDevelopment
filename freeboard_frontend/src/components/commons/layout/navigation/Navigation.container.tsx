import { useRouter } from "next/Router";
import NavigationUI from "./Navigation.presenter";
export default function Navigation() {
  const router = useRouter();

  function onClickReview() {
    router.push("/review");
  }

  function onClickProductSubmit() {
    router.push("/productSubmit");
  }

  function onClickMypage() {
    router.push("/mypage");
  }

  return (
    <NavigationUI
      onClickReview={onClickReview}
      onClickProductSubmit={onClickProductSubmit}
      onClickMypage={onClickMypage}
    />
  );
}
