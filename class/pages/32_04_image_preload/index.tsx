import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [myLoadedIamge, setMyLoadedImage] = useState();
  const divRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      // 아래의 img는 img 태그이다. 변수가 아니다.
      setMyLoadedImage(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(myLoadedIamge);
  }

  return (
    <>
      <h1>안녕하세요 사이트에 오신 걸 환영합니다.</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
      {/* <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" /> */}
    </>
  );
}
