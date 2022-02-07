import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import ReviewListUI from "./list.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./list.queries";

export default function ReviewList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [startpage, setStartPage] = useState<number>(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: Number(startpage),
    },
  });
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  console.log(dataBoardsCount);

  function onChangeSearch(value: any) {
    setKeyword(value);
    console.log(value);
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
      onChangeSearch={onChangeSearch}
      count={dataBoardsCount}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      startpage={startpage}
      setStartPage={setStartPage}
      onClickMoveToReview={onClickMoveToReview}
    />
  );
}
