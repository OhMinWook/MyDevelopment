import {
  Button,
  Buttons,
  Content,
  DetailTitle,
  DislikeWrapper,
  Favorite,
  FavoriteImg,
  HeaderWrapper,
  Image,
  ImageWrapper,
  LikeWrapper,
  Name,
  Number,
  Time,
  Title,
  Wrapper,
} from "../reviewdetail/detail.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function ReviewDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Title>후기</Title>
        <DetailTitle>{props.data?.fetchBoard.title}</DetailTitle>
        <HeaderWrapper>
          <Name>{props.data?.fetchBoard.writer}</Name>
          <Time>{getDate(props.data?.fetchBoard.createdAt)}</Time>
        </HeaderWrapper>
        <Content>{props.data?.fetchBoard.contents}</Content>
        <ImageWrapper>
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </ImageWrapper>
        <Favorite>
          <LikeWrapper>
            <FavoriteImg src={"/images/like.png"} onClick={props.onClickLike} />
            <Number>{props.data?.fetchBoard.likeCount}</Number>
          </LikeWrapper>
          <DislikeWrapper>
            <FavoriteImg
              src={"/images/dislike.png"}
              onClick={props.onClickDislike}
            />
            <Number>{props.data?.fetchBoard.dislikeCount}</Number>
          </DislikeWrapper>
        </Favorite>
      </Wrapper>
      <Buttons>
        <Button onClick={props.onClickMoveToList}>후기 목록</Button>
        <Button onClick={props.onClickMoveToReview}>후기 수정</Button>
      </Buttons>
    </>
  );
}
