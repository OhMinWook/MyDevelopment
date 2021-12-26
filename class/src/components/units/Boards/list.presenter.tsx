import { Wrapper } from "./list.styles";

export default function BoardListUI(props) {
  return (
    <>
      {props.data?.fetchBoards.map((el, index) => (
        <Wrapper key={el._id}>
          <input type="checkbox" />
          <div>{index + 1}</div>
          <div>{el.writer}</div>
          <div>{el.title}</div>
          <div>{el.contents}</div>
          <button onClick={props.onClickDelete(el._id)}>삭제하기</button>
        </Wrapper>
      ))}
    </>
  );
}
