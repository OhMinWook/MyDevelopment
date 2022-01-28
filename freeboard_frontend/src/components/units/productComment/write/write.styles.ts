import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 290px;
  position: relative;
  margin-bottom: 50px;
`;

export const Comment = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: purple;
  border-bottom: 3px solid purple;
  margin-bottom: 20px;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 100px;
  padding-left: 20px;
  border: 2px solid purple;
`;

export const Button = styled.button`
  width: 80px;
  background-color: purple;
  color: white;
  position: absolute;
  bottom: 0px;
  right: 290px;
`;
