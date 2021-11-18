import { gql, useQuery } from "@apollo/client";
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page: 1,
      },
    }
  );

  function onClickRow(event) {
    // console.log(event.target.id);
    console.log(event.currentTarget.id);
  }

  return (
    <>
      <h1>이벤트 버블링</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          // 부모 요소에 onclick 요소를 줄 경우
          <div key={el._id} id={el._id} onClick={onClickRow}>
            {/* 자식 요소에 onClick 요소를 줄 경우 */}
            <span>{el.title}</span>
            <span> {el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}
