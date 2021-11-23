import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function MyLifecyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  // 라이프 사이클
  // componentDidMount와 동일(의존성 배열이 빈 배열일때)
  // 처음 실행 된 후에 의존성 배열 안의 내용만 다시 실행된다.
  useEffect(() => {
    console.log("마운트 됨!");
    inputRef.current?.focus();
    // 의존성 배열([], dependency array), 안의 내용이 바뀔 떄마다 배열이 재배열된다.
    // 이게 없으면 뭐 하나라고 바뀌면 다시 실행된다.

    // componentWillUnmount와 동일
    return () => {
      console.log("잘가요~");
    };
  }, []);

  // componentDidUpdate와 기능이 유사하다.
  // 첫 시작만 안하고 다음부터는 뭐라도 하나 바뀌면 전체가 다시 실행된다.
  useEffect(() => {
    console.log("수정됨");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      {/* 함수 내의 메서드나 다른 객체에 접근하기 위해 this를 사용해 준다. */}
      <div>현재 카운트: {count}</div>
      {/*  window의 this와 구분해주기 위해서 bind(this)를 해준다. */}
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
