import { useEffect } from "react";
import KakaoMapUI from "./map.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=265c38d147039713bcf5c8250a24734c&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        var mapContainer = document.getElementById("map"),
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };

        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        var geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              var infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">우리집</div>',
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);
  return <KakaoMapUI />;
}
