export default function BoardDetailUI(props) {
  return (
    <>
      작성자: <div>{props.data?.fetchBoard.writer}</div>
      <br />
      제목: <div>{props.data?.fetchBoard.title}</div>
      <br />
      내용: <div>{props.data?.fetchBoard.contents}</div>
      <button onClick={props.onClickUpdate}>수정하기</button>
    </>
  );
}
