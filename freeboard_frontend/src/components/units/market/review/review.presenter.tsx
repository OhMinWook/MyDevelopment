import { withAuth } from "../../../commons/hocs/withAuth";
import {
  Wrapper,
  Title,
  TopWrapper,
  TitleWrapper,
  ContentWrpper,
  Pictures,
  Subject,
  Content,
  TitleInput,
  ContentInput,
  Writer,
  Password,
  Signup,
} from "../review/review.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { Context } from "../../../../../pages/reviewdetail/[boardId]/edit";

function ReviewUI(props) {
  const { isEdit } = useContext(Context);
  return (
    <>
      <Wrapper>
        <Title>{isEdit ? "상품 후기 수정" : "상품 후기"}</Title>
        <TopWrapper>
          <Writer>작성자</Writer>
          <input
            type="text"
            onChange={props.onChangeWriter}
            defaultValue={isEdit ? props.data?.fetchBoard.writer : ""}
          />

          <Password>비밀번호</Password>
          <input
            type="password"
            onChange={props.onChangePassword}
            defaultValue={isEdit ? props.data?.fetchBoard.password : ""}
          />
        </TopWrapper>
        <TitleWrapper>
          <Subject>제목</Subject>
          <TitleInput
            type="text"
            onChange={props.onChangeInputs("title")}
            defaultValue={isEdit ? props.data?.fetchBoard.title : ""}
          />
        </TitleWrapper>
        <ContentWrpper>
          <Content>내용</Content>
          <ContentInput
            type="text"
            onChange={props.onChangeInputs("contents")}
            defaultValue={isEdit ? props.data?.fetchBoard.contents : ""}
          />
        </ContentWrpper>
        <Pictures>
          첨부파일
          {props.imageUrls.map((el: any, index: any) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchBoard.images?.[index]}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </Pictures>
        <Signup
          onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
          disabled={props.isSubmitting}
        >
          {isEdit ? "후기 수정" : "후기 등록"}
        </Signup>
      </Wrapper>
    </>
  );
}

export default withAuth(ReviewUI);
