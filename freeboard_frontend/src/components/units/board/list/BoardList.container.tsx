import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/Router";
import { useQuery } from "@apollo/client";
import { useState } from "react";

// interface IBoardListContainer {
//   onClickBoardDetail: (event: any) => void;
// }

export default function BoardLsitContainerPage() {
  const router = useRouter();
  const [startpage, setStartPage] = useState(1);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      page: startpage,
    },
  });

  // 전체 페이지 구하는 변수 지정
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 0;

  // 등록 페이지 이동
  function onClickBoarderNew() {
    router.push(`/board`);
  }

  function onClickBoardDetail(event: any) {
    if (event.target instanceof Element)
      router.push(`/detail/${event.target.id}`);
  }

  // 페이지 네이션 클릭 함수
  function onClickPage(event: any) {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  }
  function onClickPrevPage() {
    if (startpage <= 1) return;
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    if (startpage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  return (
    <BoardListUI
      data={data}
      onClickBoarderNew={onClickBoarderNew}
      onClickBoardDetail={onClickBoardDetail}
      onClickPage={onClickPage}
      startpage={startpage}
      setStartPage={setStartPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
