import { NameBox, Box, BoxWrapper, Title, Wrapper } from "./mypage.styles";

export default function MyPageUI() {
  return (
    <Wrapper>
      <Title>마이 페이지</Title>
      <BoxWrapper>
        <NameBox>오민욱님</NameBox>
        <Box>적립금</Box>
        <Box>이메일</Box>
        <Box>내 장바구니</Box>
      </BoxWrapper>
    </Wrapper>
  );
}
