import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/Router";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data: first } = useQuery(FETCH_BOARD, {
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
      router.push(`/list`);
    } catch (error: any) {
      alert(error.message);
    }
  }
  return (
    <>
      <BoardDetailUI
        first={first}
        onSignupButton={onSignupButton}
        DoEdit={DoEdit}
        onClickDelete={onClickDelete}
      />
    </>
  );
}
