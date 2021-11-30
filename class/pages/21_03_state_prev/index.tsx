import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // 콜백 함수

    // 1. 화살표 함수
    // setCount((prev) => prev + 1);

    // 2. 그냥 함수
    setCount(function (prev) {
      // 로직 추가하기...  const aaa = 3
      // 로직 추가하기...

      return prev + 1;
    });

    // 3. 화살표함수에서 매개변수 바꾸기
    setCount((minwook) => minwook + 1);
  }

  return (
    <>
      <div>현재 카운트!! :{count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </>
  );
}
