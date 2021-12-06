import { useQuery } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import HomeUI from "./home.presenter";
import { FETCH_USED_ITEMS } from "./home.queries";
import { useRouter } from "next/Router";

export default function Home() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  // console.log(data);
  // 장바구니에 담기 위한 온클릭 함수
  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    // 불린 변수
    let isExit = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) isExit = true;
    });
    if (isExit) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }
    baskets.push(el);

    //rest 파라미터(객체 내에서 원하는 항목만을 추려서 원본을 건들지 않고 삭제한다.)
    const { __typename, _id, ...newEl } = el;
    baskets.push(newEl);
    console.log(newEl);

    // 객체를 문자열로 바꿔서 저장된 데이터를 확인할 수 있다.
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  return (
    <HomeUI data={data} loadMore={onLoadMore} onClickBasket={onClickBasket} />
  );
}
``;
