import {
  Wrapper,
  TableTop,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  TableBottom,
  Footer,
  Button,
} from "./BoardList.styles";
import Paginations01 from "../../../commons/pagination/pagination.container";
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
      <TableBottom />
      <Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.count?.fetchBoardsCount}
          startpage={props.startpage}
          setStartPage={props.setStartPage}
        />
        <Button onClick={props.onClickBoarderNew}>
          <img />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
