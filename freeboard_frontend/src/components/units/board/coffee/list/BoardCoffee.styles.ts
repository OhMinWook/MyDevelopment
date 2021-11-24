import styled from "@emotion/styled";

export const WholeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div``;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-left: 70px;
`;

export const Tag = styled.div`
  width: 340px;
  height: 370px;
  border: 2px solid #000000;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 100px;
`;

export const Img1 = styled.img`
  height: 50%;
  float: inline-start;
  background-color: green;
  width: 100%;
`;

export const Img2 = styled.div`
  height: 20%;
  float: inline-end;
  /* background-color: pink; */
  border-top: 1px solid black;
  padding-left: 5px;
  padding-top: 25px;
  text-align: center;
`;

export const Img3 = styled.div`
  height: 30%;
  float: inline-end;
  /* background-color: pink; */
  border-top: 1px solid black;
  padding-left: 5px;
`;
