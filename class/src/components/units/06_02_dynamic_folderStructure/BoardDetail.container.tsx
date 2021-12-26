import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDeatil.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickUpdate = () => {
    router.push(`/quiz/06_02_folderStructure/${router.query.boardId}/edit`);
  };
  return <BoardDetailUI data={data} onClickUpdate={onClickUpdate} />;
}
