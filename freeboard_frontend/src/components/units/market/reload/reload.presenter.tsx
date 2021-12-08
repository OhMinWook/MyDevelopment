import Head from "next/head";

export default function ReloadUI(props) {
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
      <div>reload</div>
      Amount: <input type="text" />
      <button onClick={props.onClickPayment}>충전하기</button>
      <div>amount : {props.data?.fetchUserLoggedIn.userPoint.amount}</div>
      <input type="text" onChange={props.onChangePoint} />
    </>
  );
}
