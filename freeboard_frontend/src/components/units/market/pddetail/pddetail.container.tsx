import { useQuery } from "@apollo/client";
import { useRouter } from "next/Router";
import ProductDetailUI from "./pddetail.presenter";
import { FETCH_USED_ITEM } from "./pddetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  function onClickEdit() {
    router.push(`/pddetail/${router.query.useditemId}/edit`);
  }

  return <ProductDetailUI data={data} onClickEdit={onClickEdit} />;
}
