import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import ReviewCommentListUI from "./list.presenter";
import { FETCH_BOARD_COMMENTS } from "./list.queries";

export default function ReviewCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.fetchBoardComments)
            return { fetchBoardComments: [...prev.fetchBoardComments] };
          return {
            fetchBoardComments: [
              ...prev.fetchBoardComments,
              ...fetchMoreResult.fetchBoardComments,
            ],
          };
        },
      },
    });
  }

  return <ReviewCommentListUI data={data} onLoadMore={onLoadMore} />;
}