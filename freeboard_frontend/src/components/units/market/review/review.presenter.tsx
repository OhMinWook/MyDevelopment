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
import { v4 as uuidv4 } from "uuid";

function ReviewUI(props) {
  return (
    <>
      <Wrapper>
        <Title>상품 후기</Title>
        <TopWrapper>
          <Writer>작성자</Writer>
          <input type="text" onChange={props.onChangeInputs("writer")} />

          <Password>비밀번호</Password>
          <input type="password" onChange={props.onChangeInputs("password")} />
        </TopWrapper>
        <TitleWrapper>
          <Subject>제목</Subject>
          <TitleInput type="text" onChange={props.onChangeInputs("title")} />
        </TitleWrapper>
        <ContentWrpper>
          <Content>내용</Content>
          <ContentInput
            type="text"
            onChange={props.onChangeInputs("contents")}
          />
        </ContentWrpper>
        <Pictures>
          첨부파일
          {props.fileUrls.map((el: any, index: any) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchBoard.images?.[index]}
              onChangeFIleUrl={props.onChangeFIleUrl}
            />
          ))}
        </Pictures>
        <Signup onClick={props.onClickSubmit} disabled={props.isSubmitting}>
          등록
        </Signup>
      </Wrapper>
    </>
  );
}

export default withAuth(ReviewUI);
