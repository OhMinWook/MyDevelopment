import UploadPage from "../../../commons/uploads/01/Uploads01.container";
import * as D from "./BoardDetail.styles";
import { IsEdit } from "./Boarddetail.types";

export default function BoardDetailUI(props: IsEdit) {
  return (
    <D.Html>
      <D.Wrapper>
        <D.Title>Detail Board</D.Title>
        <D.LeftWrapper>
          <D.HeadWrapper>
            <D.NameWrapper>
              <div>{props.data?.fetchBoard.writer}</div>
            </D.NameWrapper>
            <D.TitleWrapper>
              <div></div>
            </D.TitleWrapper>
          </D.HeadWrapper>
          <div>{props.data?.fetchBoard.title}</div>
          <div>{props.data?.fetchBoard.contents}</div>
          <div>
            <D.DetailInput>
              <D.Address>
                {props.data?.fetchBoard.boardAddress?.address}
              </D.Address>
              <D.AddressDetail>
                {props.data?.fetchBoard.boardAddress?.addressDetail}
              </D.AddressDetail>
              <D.Youtube
                url={props.data?.fetchBoard.youtubeUrl}
                width={500}
                height={200}
              />
            </D.DetailInput>
            {props.fileUrl.map((el, index) => (
              <UploadPage
                key={index}
                index={index}
                fileUrl={el}
                onChangeFilrUrls={onChangeFilrUrls}
              />
            ))}
            <D.Radios>
              <input type="radio" name="mainset" /> 유튜브
              <input type="radio" name="mainset" /> 사진
            </D.Radios>
          </div>
          <D.IconWrapper>
            <>
              <D.LikeIcon onClick={props.onClickLike} />
              <D.LikeCount>{props.data?.fetchBoard.likeCount}</D.LikeCount>
            </>
            <>
              <D.DisLikeIcon onClick={props.onClickDislike} />
              <D.DisLikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </D.DisLikeCount>
            </>
          </D.IconWrapper>
          <D.FooterButton>
            <D.SignupButton onClick={props.onSignupButton}>
              목록으로
            </D.SignupButton>
            <D.SignupButton onClick={props.DoEdit}>수정하기</D.SignupButton>
            <D.SignupButton onClick={props.onClickDelete}>
              삭제하기
            </D.SignupButton>
          </D.FooterButton>
        </D.LeftWrapper>
      </D.Wrapper>
      <D.RightWrapper></D.RightWrapper>
    </D.Html>
  );
}
