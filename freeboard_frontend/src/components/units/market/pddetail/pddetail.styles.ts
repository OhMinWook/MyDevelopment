import styled from "@emotion/styled";
import KakaoMap from "../../../commons/map/map.container";

export const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  align-items: center;
  /* justify-content: space-between; */
  border: 5px solid #660099;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 50px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 700px;
`;

export const Remarks = styled.div`
  font-size: 14px;
  color: #999999;
  word-break: break-all;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
`;

export const Contents = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 30px;
`;

export const Image = styled.img`
  width: 430px;
  height: 552px;
  margin-right: 200px;
  /* border: 1px solid #333; */
`;

export const Edit = styled.button`
  width: 250px;
  height: 80px;
  font-size: 24px;
  background-color: purple;
  border: 2px solid #000000;
  color: white;
  cursor: pointer;
  margin-top: 270px;
`;

export const KaKaoMap = styled(KakaoMap)`
  width: 200px;
  height: 200px;
`;
