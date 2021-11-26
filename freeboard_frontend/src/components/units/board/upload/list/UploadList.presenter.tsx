export default function UploadPresentUI(props) {
  return (
    <div>
      <div>작성자: {props.data?.fetchBoard.writer}</div>
      <div>제목: {props.data?.fetchBoard.title}</div>
      <div>내용: {props.data?.fetchBoard.contents}</div>
      <img
        src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
      />
    </div>
  );
}
