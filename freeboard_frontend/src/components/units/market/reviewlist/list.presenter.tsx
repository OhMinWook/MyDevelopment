import {
  Row,
  TableTop,
  Wrapper,
  ColumnHeaderBasic,
  TableBottom,
  ColumnBasic,
  ColumnTitle,
  ColumnHeaderContents,
} from "./list.styles";
import Paginations01 from "../../../commons/pagination/pagination.container";

export default function ReviewListUI(props) {
  return (
    <Wrapper>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderBasic>제목</ColumnHeaderBasic>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderContents>내용</ColumnHeaderContents>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el: any, index: any) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle>{el.title}</ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic id={el._id} onClick={props.onclickProductDetail}>
            {el.contents}
          </ColumnBasic>
          <ColumnBasic>{el.createdAt}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <div>
        <Paginations01
          refetch={props.refetch}
          count={props.count?.fetchBoardsCount}
          startpage={props.startpage}
          setStartPage={props.setStartPage}
        />
        <button>상품 등록하기</button>
      </div>
    </Wrapper>
  );
}
