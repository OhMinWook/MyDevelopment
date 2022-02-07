import styled from "@emotion/styled";
import { Rate } from "antd";

export const Star = styled(Rate)``;

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const CommentWrapper = styled.div`
  margin-bottom: 100px;
  position: relative;
`;

export const Comment = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: purple;
  border-bottom: 3px solid purple;
  margin-bottom: 30px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  margin: 0px 0px 20px 0px;
`;

export const WriterWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  margin: 5px 10px 0px 0px;
  color: purple;
  font-weight: bold;
`;

export const Password = styled.div`
  margin: 5px 10px 0px 10px;
  color: purple;
  font-weight: bold;
`;

export const PasswordInput = styled.input`
  margin-right: 20px;
`;

export const Button = styled.button`
  position: absolute;
  right: 0px;
  bottom: -41px;
  width: 80px;
  background-color: purple;
  color: white;
`;
