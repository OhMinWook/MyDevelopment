import { useRouter } from "next/Router";
import NavigationUI from "./Navigation.presenter";
export default function Navigation() {
  const router = useRouter();

  function onClickReview() {
    router.push("/review");
  }

  return <NavigationUI onClickReview={onClickReview} />;
}
