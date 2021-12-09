import Head from "next/head";
import { Map } from "./map.styles";

export default function KakaoMapUI() {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=265c38d147039713bcf5c8250a24734c"
        ></script>
        <Map id="map"></Map>
      </Head>
    </>
  );
}
