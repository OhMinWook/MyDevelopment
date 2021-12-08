import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 40px;
  border-bottom: 5px solid purple;
  width: 1100px;
  text-align: center;
  padding-bottom: 40px;
`;

export const InnerWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 55%;
  border-bottom: 2px solid purple;
  padding: 20px 0px 20px 0px;
`;

export const Index = styled.span`
  margin-right: 20px;
  font-size: 25px;
  padding-top: 10px;
`;

export const Image = styled.img`
  width: 60px;
  height: 78px;
  border: 1px solid purple;
`;

export const Name = styled.span`
  font-size: 25px;
`;

export const Price = styled.span`
  font-size: 25px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 30px;
  color: purple;
  font-weight: bold;
`;
