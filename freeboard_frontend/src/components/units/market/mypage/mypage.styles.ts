import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 40px;
  border-bottom: 5px solid purple;
  width: 1100px;
  text-align: center;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;

export const Box = styled.div`
  width: 168px;
  height: 180px;
  background-color: antiquewhite;
  margin-left: 20px;
`;

export const NameBox = styled.div`
  width: 220px;
  height: 180px;
  background-color: antiquewhite;
  margin-left: 20px;
`;

export const Amount = styled.div``;

export const Balance = styled.div`
  margin-left: 8px;
`;

export const StackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  margin-left: 8px;
`;

export const Stack = styled.button`
  width: 30px;
  height: 20px;
  font-size: 5px;
`;

export const StackInput = styled.input`
  width: 100px;
  height: 20px;
  margin-right: 5px;
`;
