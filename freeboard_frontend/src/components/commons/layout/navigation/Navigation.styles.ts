import styled from "@emotion/styled";

export const Navigation = styled.div`
  /* background-color: yellow; */
  height: 65px;
  /* padding-top: 13px; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-bottom: none;
`;

export const Button = styled.button`
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 15px;
  width: 124px;
  height: 100%;
  border: 0;
  outline: 0;
  background-color: #ffffff;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  background-color: #f7f7f7;
  border-radius: 15px;
  height: 60%;
  margin-top: 10px;
  width: 250px;
  padding-left: 10px;
  color: #666;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 117px;
  right: 140px;
`;
