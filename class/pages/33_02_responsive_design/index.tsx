import styled from "@emotion/styled";

// 웹에서 보일 때 디자인(전체)
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #e05252;

  /* 반응형 디자인 관련 css */
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
    display: none;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
