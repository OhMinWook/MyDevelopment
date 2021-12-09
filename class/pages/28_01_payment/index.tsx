import Head from "next/head";

export default function PaymentPage() {
  // 모바일 할 때는 m_redirect_url:"" 주소를 입력해 주어야 합니다.
  // 페이지는
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 이 아이디를 사용해야 검증이 가능하다(결제가 최초인지 2회이상인지 검증한다.)
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "초코파이",
        amount: 100,
        // fetchuserloggedin에 있는 정보 기입
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제 후 리다이렉트될 주소!!
      },
      (rsp) => {
        if (rsp.success) {
          // 결제 성공시
          console.log(rsp);

          // createPointTransactionsOfLoading 뮤테이션 실행하기!!!(impUid 인자로 넘기기!!)
          // 결제 날짜, 결제된 시간, 최소된 시간을 백엔드에서 날짜를 생성해서 보내 주는 게 맞다.
          // 프론트엔드에서 newData를 가급적 사용하지 않기
          // 오늘 날짜를 생성하는 것은 백엔드에서 해야 한다.
        } else {
          // 결제 실패시
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액: <input type="text" />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
