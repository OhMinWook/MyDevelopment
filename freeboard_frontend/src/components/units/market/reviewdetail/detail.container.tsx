import { useQuery } from "@apollo/client";
import { useRouter } from "next/Router";
import ReviewDetailUI from "./detail.presenter";
import { FETCH_BOARD } from "./detail.queries";

export default function ReviewDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <ReviewDetailUI />;
}
