import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin: 0 auto;
  margin-top: 4px;
  margin-bottom: 80px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 250px;
  height: 400px;
  border: 3px solid purple;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  border-radius: 10px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 350px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
`;

export const Name = styled.span`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

export const Price = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

export const Seller = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;

export const Like = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 10px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
`;

export const Content = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: purple;
  color: white;
  margin-bottom: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
`;

export const BestCard = styled.div`
  width: 150px;
  height: 550px;
  border: 3px solid purple;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  border-radius: 10px;
`;

export const BestWrapper = styled.div`
  margin-top: 20px;
`;

export const Items = styled.div`
  color: purple;
  font-size: 35px;
  margin-left: 20px;
  margin-top: 50px;
`;

export const BestLine = styled.hr`
  border: 1px solid purple;
  margin: 10px 0px;
`;

export const BestTitleWrapper = styled.div`
  display: flex;
`;
