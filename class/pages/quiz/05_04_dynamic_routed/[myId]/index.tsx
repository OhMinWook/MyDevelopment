import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function DynamicroutedPage() {
  const router = useRouter();

  const [data] = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <div>작성정보아이디: {data.fetchBoard._id}</div>
      <div>작성자: {data.fetchBoard.writer}</div>
      <div>비밀번호: {data.fetchBoard.password}</div>
      <div>제목: {data.fetchBoard.title}</div>
      <div>제목: {data.fetchBoard.contents}</div>
    </>
  );
}
