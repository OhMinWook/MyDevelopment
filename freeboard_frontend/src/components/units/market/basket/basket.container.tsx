import { useEffect, useState } from "react";
import BasketUI from "./basket.presenter";

export default function Basket() {
  // 장바구니에 담은 데이터를 담은 스테이트
  const [basketItems, setBasketItems] = useState([]);

  // 서버에는 없는 로컬스토리지를 읽어서 에러가 나게 하지 않기 위해
  // 브라우저에만 있는 로컬 스토리지를 브라우저에서만 읽도록 하게 한다.

  function onClickDelete(event) {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBaskets = baskets.filter((el) => el._id !== event?.target.id);

    localStorage.setItem("basket", JSON.stringify(newBaskets));

    alert("삭제가 완료되었습니다.");
  }
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, [onClickDelete]);

  return <BasketUI basketItems={basketItems} onClickDelete={onClickDelete} />;
}
