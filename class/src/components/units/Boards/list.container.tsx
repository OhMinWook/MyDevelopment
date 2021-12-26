import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./list.presenter";
import { DELETE_BOARD, FETCH_BOARDS } from "./list.queries";

export default function BoardsList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (id) => async () => {
    const result = await deleteBoard({
      variables: {
        boardId: id,
      },
      refetchQueries: [
        { query: FETCH_BOARDS, variables: router.query.boardId },
      ],
    });
    console.log(result);
  };

  return <BoardListUI data={data} onClickDelete={onClickDelete} />;
}
