import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  // 딜리트 캐시를 이용해 원하는 목록만 제거하는 기능을 만들 수 있다.

  return (
    <>
      <h1> 비회원으로 담은 나만의 장바구니</h1>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
