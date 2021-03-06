import {
  Row,
  TableTop,
  Wrapper,
  ColumnHeaderBasic,
  TableBottom,
  ColumnBasic,
  ColumnTitle,
  ColumnHeaderContents,
  ColumnContents,
  Title,
  Footer,
  TextToken,
  Button,
} from "./list.styles";
import { v4 as uuidv4 } from "uuid";
import Paginations01 from "../../../commons/pagination/pagination.container";
import { getDate } from "../../../../commons/libraries/utils";
import SearchPage from "../../../commons/search/01/search01.container";
import { IReviewListPropsUI } from "./list.types";

export default function ReviewListUI(props: IReviewListPropsUI) {
  return (
    <Wrapper>
      <Title>베스트 후기</Title>
      <SearchPage
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeSearch={props.onChangeSearch}
      />
      <TableTop />
      <Row>
        <ColumnHeaderBasic>No</ColumnHeaderBasic>
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
          <ColumnContents id={el._id} onClick={props.onClickMoveToReviewDetail}>
            {el.contents
              .replaceAll(props.keyword, `###${props.keyword}###`)
              .split("###")
              .map((el: any) => (
                <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </TextToken>
              ))}
          </ColumnContents>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
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
        <Button onClick={props.onClickMoveToReview}>상품 등록</Button>
      </Footer>
    </Wrapper>
  );
}
