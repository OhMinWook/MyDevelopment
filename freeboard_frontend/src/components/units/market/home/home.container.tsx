import { useMutation, useQuery } from "@apollo/client";
import {
  IBoard,
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import HomeUI from "./home.presenter";
import {
  CREATE_POINT_BUYING_AND_SELLING,
  FETCH_USED_ITEMS,
  TOGGLE_USEDITEM_PICK,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./home.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const { data: uesditemPick } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM);
  const [createPointBuyingandSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_BUYING_AND_SELLING);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      search: String(keyword),
    },
  });
  const { data: best } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

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

  function onChangeSearch(value: string) {
    setKeyword(value);
  }

  const onClickBuying = (id: string) => async () => {
    const result = await createPointBuyingandSelling({
      variables: {
        useritemId: id,
      },
      refetchQueries: [{ query: FETCH_USED_ITEMS }],
    });
    console.log(result);
    alert("????????? ??????????????????.");
  };
  // ??????????????? ?????? ?????? ????????? ??????
  const onClickBasket = (el: IBoard) => () => {
    console.log(el);
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    // ?????? ??????
    let isExit = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) isExit = true;
    });
    if (isExit) {
      alert("?????? ??????????????? ??????????????????.");
      return;
    }

    //rest ????????????(?????? ????????? ????????? ???????????? ????????? ????????? ????????? ?????? ????????????.)
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    console.log(newEl);

    // ????????? ???????????? ????????? ????????? ???????????? ????????? ??? ??????.
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  const onClickpdDetail = (id: any) => () => {
    router.push(`/pddetail/${id}`);
  };

  const onClickLike = (id: string) => async () => {
    const result = await toggleUseditemPick({
      variables: {
        useditemId: id,
      },
      optimisticResponse: {
        toggleUseditemPick: uesditemPick?.fetchUseditem.pickedCount || 0,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_USED_ITEM,
          variables: { useditemId: id },
          data: {
            fetchUseditem: {
              _id: id,
              _typename: "Useditem",
              pickedCount: data?.toggleUseditemPick,
            },
          },
        });
      },
    });
    refetch();
  };

  return (
    <HomeUI
      data={data}
      best={best}
      uesditemPick={uesditemPick}
      keyword={keyword}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      onClickpdDetail={onClickpdDetail}
      onLoadMore={onLoadMore}
      onClickBasket={onClickBasket}
      onClickBuying={onClickBuying}
      onClickLike={onClickLike}
    />
  );
}
