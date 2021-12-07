import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.id),
      },
    }
  );

  return (
    <>
      <div style={{ color: "red" }}>작성자:{data?.fetchBoard.writer}</div>
      {/* next에서 하이드레이션 문제를 해결하기 위해 빈 div를 넣어주어야 한다. 개수를 맞춰 주기 위해서 */}
      {/* {process.browser ? (
        <div style={{ color: "green" }}>제목:{data?.fetchBoard.title}</div>
      ) : (
        <div style={{ color: "green" }} />
      )} */}
      <div style={{ color: "blue" }}>내용: 반갑습니다.</div>

      {/* next에서 하이드레이션 문제를 해결하기 위해 빈 div를 넣어주어야 한다. 개수를 맞춰 주기 위해서 */}
      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      ) : (
        <div />
      )}
    </>
  );
}
