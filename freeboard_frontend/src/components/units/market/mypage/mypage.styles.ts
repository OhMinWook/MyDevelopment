import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 60%;
`;

export const Box = styled.div`
  width: 100%;
  height: 180px;
  margin-left: 20px;
  border: 2px solid purple;
`;

export const SideWrapper = styled.div`
  width: 250px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid purple;
  padding: 20px 0px 0px 0px;
`;

export const NameBox = styled.div`
  font-size: 20px;
  color: purple;
  font-weight: 500;
  margin: 10px 0px 0px 0px;
`;

export const Amount = styled.div`
  text-align: center;
  font-size: 25px;
  color: purple;
  font-weight: bold;
  margin: 10px 0px 0px 0px;
`;

export const Balance = styled.div`
  margin-left: 8px;
`;

export const Available = styled.div`
  margin: 5px 0px 10px 0px;
  font-size: 15px;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23%;
  margin: 15px 0px 0px 8px;
`;

export const Stack = styled.button`
  width: 80px;
  height: 30px;
  font-size: 5px;
  border: 1px solid purple;
  background-color: purple;
  color: white;
  border-radius: 5px;
`;

export const StackInput = styled.input`
  width: 100px;
  height: 30px;
  margin-right: 5px;
  border: 1px solid purple;
  padding: 0px 0px 0px 5px;
  border-radius: 5px;
`;

export const Modify = styled.div`
  width: 90px;
  height: 30px;
  border: 1px solid purple;
  background-color: purple;
  color: white;
  border-radius: 5px;
  font-size: 13px;
  text-align: center;
  padding: 3px 0px 0px 0px;
  margin: 5px 0px 0px 0px;
`;

//===========================================

export const BasketWrapper = styled.div`
  width: 60%;
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
  width: 100%;
  padding-bottom: 10px;
`;

export const InnerWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 98%;
  border-bottom: 1px dotted gray;
  padding: 20px 0px 20px 0px;
`;

export const Index = styled.span`
  margin-right: 20px;
  font-size: 15px;
  padding-top: 10px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 5px;
`;

export const Name = styled.span`
  font-size: 15px;
  width: 10%;
  text-align: center;
`;

export const Price = styled.span`
  font-size: 15px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: purple;
  font-weight: 500;
`;

export const RightWrapper = styled.div`
  width: 30%;
  padding: 15px;
  border: 1px solid purple;
  border-radius: 5px;
`;

export const LeftWrapper = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TopWrapper = styled.div`
  display: flex;
`;

export const LocationTitle = styled.div`
  font-size: 15px;
  margin: 0px 0px 0px 5px;
  color: purple;
  font-weight: bold;
`;

export const LocationSubTitle = styled.div`
  margin: 10px 0px 0px 0px;
  font-weight: bold;
`;

export const LocationButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin: 10px 0px 0px 0px;
  border: 1px solid purple;
  background-color: purple;
  color: white;
  font-weight: bold;
`;

export const Address = styled.div`
  margin: 10px 0px 0px 0px;
  font-size: 10px;
  font-weight: bold;
`;

export const AddressDetail = styled.input`
  margin: 10px 0px 0px 0px;
  width: 100%;
  border: 0.5px dotted purple;
  border-radius: 5px;
  margin: 10px 0px 20px 0px;
  font-size: 10px;
  padding: 0px 0px 0px 5px;
`;

export const UpperWrapper = styled.div`
  border-bottom: 1px dotted purple;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PriceWrapper = styled.div`
  margin: 20px 0px 0px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PriceTitle = styled.div`
  color: purple;
  font-weight: bold;
`;

export const DeliverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 0px 0px 0px 10px;
`;

export const Radio = styled.input`
  margin: 5px 0px 0px 0px;
`;

export const DeliverTitle = styled.div`
  font-size: 15px;
  margin: 10px 0px 5px 5px;
  color: purple;
  font-weight: bold;
`;

export const Message = styled.div`
  font-size: 15px;
  margin: 10px 0px 5px 5px;
  color: purple;
  font-weight: bold;
`;

export const MessageInput = styled.input`
  width: 100%;
  border: 0.5px dotted purple;
  border-radius: 5px;
  margin: 10px 0px 20px 0px;
  font-size: 15px;
  padding: 0px 0px 0px 5px;
`;
