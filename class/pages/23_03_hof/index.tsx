export default function HofPage() {
  // index를 넣는 곳에 map 의 id 값을 넣어주는게 더 좋다.
  const onClickChild = (index: number) => (event) => {
    console.log(event.target.id);
  };

  return (
    <>
      <h1>HOF 연습 페이지 입니다.!</h1>
      <div>
        {["철수", "영희", "훈이"].map((el, index) => (
          // 위의 index의 값에 id값을 넣어준다.
          <div key={el} onClick={onClickChild(index)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}
