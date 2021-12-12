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
  Buttons,
  Button,
  Writer,
  Password,
  Signup,
} from "../review/review.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";

function ReviewUI(props) {
  return (
    <>
      <Wrapper>
        <Title>상품 후기</Title>
        <TopWrapper>
          <Writer>작성자</Writer>
          <input type="text" onChange={props.onChangeInputs} name="writer" />

          <Password>비밀번호</Password>
          <input
            type="password"
            onChange={props.onChangeInputs}
            name="password"
          />
        </TopWrapper>
        <TitleWrapper>
          <Subject>제목</Subject>
          <TitleInput
            type="text"
            onChange={props.onChangeInputs}
            name="title"
          />
        </TitleWrapper>
        <ContentWrpper>
          <Content>내용</Content>
          <ContentInput
            type="text"
            onChange={props.onChangeInputs}
            name="contents"
          />
        </ContentWrpper>
        <Pictures>
          첨부파일
          {props.fileUrl.map((el, index) => (
            <Uploads01
              key={index}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchBoard.images?.[index]}
            />
          ))}
        </Pictures>
        <Signup onClick={props.onClickSubmit}>등록</Signup>
      </Wrapper>
    </>
  );
}

export default withAuth(ReviewUI);
