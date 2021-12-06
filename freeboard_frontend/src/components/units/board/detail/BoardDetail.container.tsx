import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/Router";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetailContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detailId,
    },
  });

  async function onSignupButton() {
    router.push(`/list`);
  }

  async function DoEdit() {
    router.push(`/detail/${router.query.detailId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.detailId },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/detail");
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function onClickLike() {
    await likeBoard({
      variables: {
        boardId: router.query.detailId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.detailId },
        },
      ],
    });
  }

  async function onClickDislike() {
    await dislikeBoard({
      variables: {
        boardId: router.query.detailId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.detailId },
        },
      ],
    });
  }

  return (
    <>
      <BoardDetailUI
        data={data}
        onSignupButton={onSignupButton}
        DoEdit={DoEdit}
        onClickDelete={onClickDelete}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
      />
    </>
  );
}
