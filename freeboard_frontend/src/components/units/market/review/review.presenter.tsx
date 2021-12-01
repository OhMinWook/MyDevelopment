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
} from "../review/review.styles";

function ReviewUI() {
  return (
    <>
      <Wrapper>
        <Title>상품 후기</Title>
        <TopWrapper>
          <Writer>작성자</Writer>
          <input />
          <Password>비밀번호</Password>
          <input />
        </TopWrapper>
        <TitleWrapper>
          <Subject>제목</Subject>
          <TitleInput />
        </TitleWrapper>
        <ContentWrpper>
          <Content>내용</Content>
          <ContentInput />
        </ContentWrpper>
        <Pictures>
          첨부파일
          <Buttons>
            <Button>+</Button>
            <Button>+</Button>
            <Button>+</Button>
          </Buttons>
        </Pictures>
      </Wrapper>
    </>
  );
}

export default withAuth(ReviewUI);
