import styled from "@emotion/styled";

export const Word = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
