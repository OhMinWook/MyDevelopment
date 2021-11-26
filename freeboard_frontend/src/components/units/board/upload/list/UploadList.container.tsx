import { useQuery } from "@apollo/client";
import UploadPresentUI from "./UploadList.presenter";
import { FETCH_BOARD } from "./UploadList.query";
import { useRouter } from "next/Router";

export default function UploadPresent(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <UploadPresentUI data={data} />;
}
