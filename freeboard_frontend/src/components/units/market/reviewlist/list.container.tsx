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
  const [startpage, setStartPage] = useState(1);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: startpage,
    },
  });
  console.log(data);

  function onClickProduct() {
    router.push("/product");
  }

  function onclickProductDetail(event: any) {
    if (event.target instanceof Element)
      router.push(`/pddetail/${event.target.id}`);
  }

  return (
    <ReviewListUI
      data={data}
      onClickProduct={onClickProduct}
      onclickProductDetail={onclickProductDetail}
      count={dataBoardsCount}
      refetch={refetch}
      startpage={startpage}
      setStartPage={setStartPage}
    />
  );
}
