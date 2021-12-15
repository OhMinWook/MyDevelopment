import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
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
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: useditemsIPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICK, { variables: { search: "" } });
  const [createPointLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_LOADING);
  const [point, setPoint] = useState(0);
  console.log(useditemsIPicked);

  function onChangePoint(event) {
    setPoint(event?.target.value);
  }

  function onClickPayment() {
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
      async (rsp) => {
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
            alert(error.message);
          }
        } else {
          // 결제 실패시
        }
      }
    );
  }

  return (
    <MyPageUI
      data={data}
      useditemsIPicked={useditemsIPicked}
      onClickPayment={onClickPayment}
      onChangePoint={onChangePoint}
    />
  );
}
