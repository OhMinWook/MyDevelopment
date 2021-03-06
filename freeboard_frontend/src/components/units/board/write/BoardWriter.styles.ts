import styled from "@emotion/styled";

export const Html = styled.div`
  padding: 100px 50px;

  display: flex;
  flex-direction: row;
  margin-left: 50px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 50px 20px 65px;
  width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border: 1px solid black;

  box-shadow: 0px 0px 1px 3px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DetailInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-size: 50px;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`;

export const Input = styled.input`
  margin-top: 25px;
  width: 500px;
  height: 45px;
  padding: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: pink;
  }
`;
export const Zipcode = styled.div`
  border: 1px solid #999999;

  width: 180px;
  height: 45px;
`;

export const Address = styled.div`
  border: 1px solid #999999;
  margin-top: 25px;
  width: 500px;
  height: 45px;
`;

export const Addresses = styled.div`
  margin-top: 20px;
  display: flex;
`;
export const Zonecode = styled.div`
  border: 1px solid black;
  width: 150px;
  height: 45px;
`;
export const MyAdress = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 45px;
  padding: 10px;
  margin-top: 5px;
`;
export const MyAdressDetail = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 45px;
  padding: 10px;
  margin-top: 5px;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameInput = styled.input`
  width: 230px;
  height: 45px;
  padding: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: pink;
  }
`;

export const AdInput = styled.input`
  width: 250px;
  height: 45px;
  margin-top: 25px;
`;

export const Button = styled.button`
  height: 45px;
  width: 130px;
  margin-left: 10px;
  background-color: #ff0000;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
  height: 45px;
  margin-top: 25px;
`;
export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PasswordInput = styled.input`
  width: 250px;
  height: 45px;
  margin-left: 20px;
  padding: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: pink;
  }
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  width: 65%;
  margin-top: 20px;
`;

export const Picture = styled.div`
  width: 100px;
  height: 100px;
  background-color: #999999;
`;

export const Radios = styled.div`
  margin-top: 10px;
`;

export const SignupButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 10px;
  background-color: #ff0000;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;

export const RightWrapper = styled.div`
  width: 500px;
  height: 800px;
  margin-right: 90px;
  border: 1px solid #999999;
  box-shadow: 0px 0px 1px 3px;
  background-image: url("/images/darkbackground.png");
`;

export const Error = styled.div`
  font-size: 11px;
  color: #ff0000;
`;

export const PasswordError = styled.div`
  margin-left: 20px;
  font-size: 11px;
  color: #ff0000;
`;

export const NameError = styled.div`
  font-size: 11px;
  color: #ff0000;
`;
