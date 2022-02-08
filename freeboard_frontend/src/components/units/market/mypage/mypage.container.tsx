import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect, ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import MyPageUI from "./mypage.presenter";
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_LOADING,
  FETCH_USEDITEMS_IPICK,
} from "./mypage.quries";

export default function MyPageContainer() {
  const [basketItems, setBasketItems] = useState<string[]>([]);
  const [coin, setCoin] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const [isopen, setIsopen] = useState<boolean>(false);
  const { data: userLoggedIn } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: useditemsIPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICK, { variables: { search: "" } });
  const [createPointLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_LOADING);
  const [point, setPoint] = useState<string>("");

  function onChangePoint(event: ChangeEvent<HTMLInputElement>) {
    setPoint(event?.target.value);
  }

  const onClickDelete = (id: string) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBaskets = baskets.filter((el: any) => el._id !== id);
    localStorage.setItem("basket", JSON.stringify(newBaskets));
    setBasketItems(newBaskets);
    alert("삭제가 완료되었습니다.");
  };
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  const onClickAddressSearch = () => {
    setIsopen(true);
  };

  const onHandleOk = () => {
    setIsopen(false);
  };

  const onHandleCancle = () => {
    setIsopen(false);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setIsopen(false);
  };

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "초코파이",
        amount: point,
        // fetchuserloggedin에 있는 정보 기입
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "",
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          try {
            const result = await createPointLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            console.log(result);
          } catch (error) {
            if (error instanceof Error) error.message;
          }
        } else {
          // 결제 실패시
        }
      }
    );
  };

  return (
    <MyPageUI
      coin={coin}
      basketItems={basketItems}
      userLoggedIn={userLoggedIn}
      useditemsIPicked={useditemsIPicked}
      isopen={isopen}
      address={address}
      addressDetail={addressDetail}
      onHandleOk={onHandleOk}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onHandleCancle={onHandleCancle}
      onClickAddressSearch={onClickAddressSearch}
      onClickDelete={onClickDelete}
      onClickPayment={onClickPayment}
      onChangePoint={onChangePoint}
    />
  );
}
