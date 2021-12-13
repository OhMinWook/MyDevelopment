import {
  Buttons,
  DislikeWrapper,
  LikeWrapper,
  Title,
  Wrapper,
} from "../reviewdetail/detail.styles";

export default function ReviewDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Title>후기</Title>
        <div>{props.data?.fetchBoard.writer}</div>
        <div>{props.data?.fetchBoard.title}</div>
        <div>
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <img key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </div>
        <div>{props.data?.fetchBoard.contents}</div>
        <div>
          <LikeWrapper>
            <img src={"/images/like.png"} onClick={props.onClickLike} />
            <div>{props.data?.fetchBoard.likeCount}</div>
          </LikeWrapper>
          <DislikeWrapper>
            <img src={"/images/dislike.png"} onClick={props.onClickDislike} />
            <div>{props.data?.fetchBoard.dislikeCount}</div>
          </DislikeWrapper>
        </div>
      </Wrapper>
      <Buttons>
        <button onClick={props.onClickMoveToList}>후기 목록</button>
        <button onClick={props.onClickMoveToSubmit}>후기 작성</button>
      </Buttons>
    </>
  );
}
