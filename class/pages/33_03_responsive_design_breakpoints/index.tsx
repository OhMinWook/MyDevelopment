import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

// 웹에서 보일 때 디자인(전체)
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #e05252;

  /* 반응형 디자인 관련 css */
  /* commons에서 파일을 import해서 사용하기 */
  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: blue;
    display: none;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
