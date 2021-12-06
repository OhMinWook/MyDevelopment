import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  // el이 가지고 있는 id
  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    // 문자열을 반대로 객체나 배열로 바꿔주는 메서드
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    // 불린변수(스위치 변수), 이미 담았는지 체크
    let isExits = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) isExits = true;
    });
    if (isExits) {
      alert("이미 장바구니에 담으셨습니다. ");
      return;
    }
    baskets.push(el);

    const { __typename, _id, ...newEl } = el;
    baskets.push(newEl);
    console.log(newEl);

    // 객체를 문자열로 바꿔주는 메서드
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  // 로그인 관련
  function onClickLogin() {
    alert("로그인에 성공하였습니다.");
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (baskets.length) {
      // 확인 취소가 가능한 모달
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다. 장바구니 페이지로 이동할까요?"
      );
      if (result) router.push("/26_03_basket_logged_in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
