import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/Router";
import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.detailId,
    },
  });

  return <BoardCommentListUI data={data} />;
}
