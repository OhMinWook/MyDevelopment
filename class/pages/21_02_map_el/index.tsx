export default function MapElPage() {
  // 기본 방법(화살표 함수)
  //   ["철수", "영희", "훈이"].forEach((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // 기본방법(그냥 함수)
  //   ["철수", "영희", "훈이"].forEach(function (el, index) {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // 매개변수 바꿔보기
  //   ["철수", "영희", "훈이"].forEach((minwook, life) => {
  //     console.log("minwook", minwook);
  //     console.log("life", life);
  //   });

  // el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });

  return <></>;
}
