import {
  NameBox,
  Box,
  BoxWrapper,
  Title,
  Wrapper,
  Amount,
  Stack,
  StackInput,
  Balance,
  StackWrapper,
} from "./mypage.styles";
import Head from "next/head";

export default function MyPageUI(props) {
  return (
    <>
      <Wrapper>
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
        <Title>마이 페이지</Title>
        <BoxWrapper>
          <NameBox>오민욱님</NameBox>
          <Box>
            <Amount>적립금</Amount>
            <div>
              <Balance>
                amount : {props.data?.fetchUserLoggedIn.userPoint.amount}
              </Balance>
              <StackWrapper>
                <StackInput onChange={props.onChangePoint} />
                <Stack onClick={props.onClickPayment}>충전</Stack>
              </StackWrapper>
            </div>
          </Box>
          <Box>이메일</Box>
          <Box>내 장바구니</Box>
        </BoxWrapper>
      </Wrapper>
    </>
  );
}
