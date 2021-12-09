import { useEffect } from "react";
import KakaoMapUI from "./map.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(35.153189, 126.891677),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <KakaoMapUI />;
}
