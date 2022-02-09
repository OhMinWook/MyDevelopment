import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 20px;
  position: relative;
`;

export const Information = styled.div`
  font-size: 28px;
  color: purple;
  font-weight: bold;
  padding: 10px;
  border-bottom: 3px solid purple;
`;

export const InnerWrapper = styled.div`
  padding: 20px;
`;

export const EditTitle = styled.div`
  font-size: 18px;
  color: purple;
  font-weight: bold;
  margin: 0px 0px 10px 0px;
  padding: 0px 0px 0px 10px;
`;

export const ContentWrapper = styled.div`
  border: 3px solid purple;
  padding: 5px 0px 35px 15px;
  margin: 0px 0px 80px 0px;
`;

export const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: purple;
  margin: 15px 0px 8px 8px;
`;

export const Input = styled.input`
  font-size: 20px;
  width: 70%;
  padding: 5px 0px 5px 10px;
  margin: 0px 0px 0px 25px;
`;

export const PasswordTitle = styled.div`
  font-size: 18px;
  color: purple;
  font-weight: bold;
  margin: 10px 0px 10px 0px;
  padding: 0px 0px 0px 10px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 20px;
  left: 40%;
  width: 200px;
  height: 50px;
  background-color: purple;
  color: white;
  font-size: 20px;
  border-radius: 10px;
`;
