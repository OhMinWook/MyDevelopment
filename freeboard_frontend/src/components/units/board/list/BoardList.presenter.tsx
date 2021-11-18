import {
  Wrapper,
  TableTop,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  TableBottom,
  PrevPage,
  Page,
  NextPage,
  Footer,
  Button,
} from "./BoardList.styles";
import { IBoardListProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListProps) {
  return (
    <Wrapper>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el: any, index: any) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickBoardDetail}>
            {el.title}
          </ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          {/* <ColumnBasic>{el.createdAt}</ColumnBasic> */}
        </Row>
      ))}
      <TableBottom />S
      <Footer>
        <PrevPage onClick={props.onClickPrevPage}>이전 페이지</PrevPage>
        {new Array(10).fill(1).map((_, index) => (
          <Page
            key={props.startpage + index}
            onClick={props.onClickPage}
            id={String(props.startpage + index)}
          >
            {props.startpage + index}
          </Page>
        ))}
        <NextPage onClick={props.onClickNextPage}>다음 페이지</NextPage>
        <Button onClick={props.onClickBoarderNew}>
          <img />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
