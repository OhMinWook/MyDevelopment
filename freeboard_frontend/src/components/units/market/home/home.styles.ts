import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 250px;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Name = styled.span`
  font-size: 16px;
`;
export const Price = styled.div`
  font-size: 16px;
`;

export const Seller = styled.span`
  font-size: 16px;
`;

export const Like = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
`;
