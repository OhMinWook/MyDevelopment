import { useRouter } from "next/router";

export default function KakaomaproutingPage() {
  const router = useRouter();
  function onClickMoveToMap() {
    router.push("/29_03_kakao_map_routed");
  }

  return <button onClick={onClickMoveToMap}>맵으로 이동하기!!!</button>;
}
