import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 18%;
  height: 54px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const Search = styled.div`
  width: 18%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Security = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75px;
  padding-bottom: 5px;
`;

export const Connect = styled.div`
  line-height: 15px;
`;

export const Searches = styled.div`
  display: flex;
`;

export const Id = styled.div`
  margin-right: 15px;
`;

export const LoginButton = styled.button`
  width: 18%;
  height: 54px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #5f0080;
  border: 1px solid #5f0081;
  color: #ffffff;
`;

export const SignupButton = styled.button`
  width: 18%;
  height: 54px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #5f0081;
`;
