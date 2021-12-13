import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import ReviewListUI from "./list.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./list.queries";

export default function ReviewList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [startpage, setStartPage] = useState(1);
  const { data: dataBoardsCount, refetch: refetchBoardCount } =
    useQuery(FETCH_BOARDS_COUNT);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: startpage,
    },
  });
  console.log(data);

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  function onClickReview() {
    router.push("/review");
  }

  function onClickMoveToReview() {
    router.push("/review");
  }

  function onClickMoveToReviewDetail(event: any) {
    if (event.target instanceof Element)
      router.push(`/reviewdetail/${event.target.id}`);
  }

  return (
    <ReviewListUI
      data={data}
      keyword={keyword}
      onClickReview={onClickReview}
      onClickMoveToReviewDetail={onClickMoveToReviewDetail}
      onChangeKeyword={onChangeKeyword}
      count={dataBoardsCount?.fetchBoardsCount}
      refetch={refetch}
      refetchBoardCount={refetchBoardCount}
      startpage={startpage}
      setStartPage={setStartPage}
      onClickMoveToReview={onClickMoveToReview}
    />
  );
}
