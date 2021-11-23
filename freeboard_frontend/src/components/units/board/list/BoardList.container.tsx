import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/Router";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function BoardLsitContainerPage() {
  const router = useRouter();
  const [startpage, setStartPage] = useState(1);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      page: startpage,
    },
  });

  // 등록 페이지 이동
  function onClickBoarderNew() {
    router.push(`/board`);
  }

  function onClickBoardDetail(event: any) {
    if (event.target instanceof Element)
      router.push(`/detail/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      onClickBoarderNew={onClickBoarderNew}
      onClickBoardDetail={onClickBoardDetail}
      refetch={refetch}
      count={dataBoardsCount}
      startpage={startpage}
      setStartPage={setStartPage}
    />
  );
}
