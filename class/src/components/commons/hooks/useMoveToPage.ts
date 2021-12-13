import { useRouter } from "next/router";
import { useState } from "react";

// 유니온 타입
type IPage = "/boards" | "/markets" | "/mypage";

export default function useMoveToPage() {
  const router = useRouter;
  const [visitedPage, setVisitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  return {
    moveToPage,
    visitedPage,
  };
}
