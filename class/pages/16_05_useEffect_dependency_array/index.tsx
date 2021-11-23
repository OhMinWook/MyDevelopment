import { useEffect, useState } from "react";

export default function UseEffectDependencyArrayPage() {
  console.log("랜더링시작!!");
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  // 1번 케이스 - 최초 1번 실행(= DidMount)
  // useEffect(() => {
  //   console.log("최초 한번 실행됨!!!");
  // }, []);

  // 2번 케이스 - 의존성 배열의 count 감지 후 재실행
  // useEffect(() => {
  //   console.log("count가 변경되면 재실행");
  // }, [count]);

  // 3번 케이스 - 최초 렌더링 + 1
  // useEffect(() => {
  //   // 다시 한 번 랜더링이 되기 떄문에
  //   // 피할 수 있는 방법이 있으면 피하는 게 좋다.
  //   setCount(100);
  // }, []);

  // 4번 케이스 - 무한 루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count])

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
    </>
  );
}
