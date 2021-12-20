import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/Router";
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import ReviewDetailUI from "./detail.presenter";
import { DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./detail.queries";

export default function ReviewDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  function onClickLike() {
    likeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  }

  function onClickMoveToList() {
    router.push("/reviewlist");
  }

  function onClickMoveToReview() {
    router.push(`/reviewdetail/${router.query.boardId}/edit`);
  }

  return (
    <ReviewDetailUI
      data={data}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToReview={onClickMoveToReview}
    />
  );
}
