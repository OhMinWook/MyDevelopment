import styled from "@emotion/styled";
import KakaoMap from "../../../commons/map/map.container";

export const Wrapper = styled.div`
  display: flex;
  width: 950px;
  align-items: center;
  border: 5px solid #660099;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 50px;
  padding-right: 20px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`;

export const Remarks = styled.div`
  font-size: 14px;
  color: #999999;
  word-break: break-all;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 10px;
`;

export const Contents = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 430px;
  height: 552px;
  margin-right: 100px;
  /* border: 1px solid purple; */
  border-radius: 20px;
`;

export const Edit = styled.button`
  width: 250px;
  height: 80px;
  font-size: 24px;
  background-color: #e3dbeb;
  border: 3px solid purple;
  color: purple;
  cursor: pointer;
  margin-top: 80px;
  border-radius: 20px;
  margin-left: 50px;
  font-weight: bold;
`;

export const KaKaoMap = styled(KakaoMap)`
  width: 200px;
  height: 200px;
`;

export const Tag = styled.div`
  border: 1px solid purple;
  width: 43px;
  padding: 0px 0px 0px 3px;
  border-radius: 20px;
  background-color: #e3dbeb;
  color: purple;
  font-weight: bold;
  margin-top: 5px;
`;

export const MapWrapper = styled.div`
  border: 3px solid purple;
  width: 330px;
  border-radius: 20px;
  padding: 10px;
  background-color: #e3dbeb;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ZipcodeTitle = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  font-weight: bold;
  margin-left: 20px;
  color: purple;
`;

export const Zipcode = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  margin-left: 10px;
`;
