import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: purple;
  border-bottom: 3px solid purple;
  width: 1050px;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export const Input = styled.input`
  width: 80%;
  height: 35px;
  padding-left: 10px;
`;

export const Content = styled.input`
  width: 80%;
  height: 300px;
  padding-left: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 80px;
  padding-left: 15px;
`;

export const Button = styled.input`
  width: 88px;
  height: 88px;
  font-size: 25px;
  color: #000000;
  margin-left: 25px;
`;
