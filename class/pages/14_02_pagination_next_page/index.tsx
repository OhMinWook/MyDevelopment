import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationBasicPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }
  function onClickPrevPage() {
    setStartPPrevPageage((prev) => prev - 10);
  }

  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }

  // let myPage = "";
  // for (let i = 0; i < 10; i++) {
  //   myPage += (
  //     <span
  //       key={startPage + i}
  //       onClick={onClickPage}
  //       id={String(startPage + i)}
  //       style={{ margin: "10px", cursor: "pointer" }}
  //     >
  //       {startPage + i}
  //     </span>
  //   );
  // }

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {/* {1,1,1,1,1,1,1,1,1,1,} */}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {startPage + index}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음 페이지</span>
      {/* <span onClick={onClickPage} id="2">
        {" "}
        2{" "}
      </span>
      <span onClick={onClickPage} id="3">
        {" "}
        3{" "}
      </span>
      <span onClick={onClickPage} id="4">
        {" "}
        4{" "}
      </span>
      <span onClick={onClickPage} id="5">
        {" "}
        5{" "}
      </span>
      <span onClick={onClickPage} id="6">
        {" "}
        6{" "}
      </span>
      <span onClick={onClickPage} id="7">
        {" "}
        7{" "}
      </span>
      <span onClick={onClickPage} id="8">
        {" "}
        8{" "}
      </span>
      <span onClick={onClickPage} id="9">
        {" "}
        9{" "}
      </span>
      <span onClick={onClickPage} id="10">
        {" "}
        10{" "}
      </span> */}
    </>
  );
}
