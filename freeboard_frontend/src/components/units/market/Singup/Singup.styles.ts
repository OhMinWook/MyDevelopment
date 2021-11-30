import styled from "@emotion/styled";
import { style } from "@mui/system";

// export const SignUpSection = styled.section`
//   display: flex;
//   align-items: center;
//   width: 100%;
// `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 100px;
  margin: 0 auto;
`;

// export const Line = styled.div`
//   border-bottom: 3px solid #000000;
// `;

export const Title = styled.h3`
  width: 40%;
  text-align: center;
  font-size: 40px;
  border-bottom: 1px solid black;
  padding-bottom: 70px;
`;

export const Id = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
`;

export const Altext = styled.div`
  margin-top: 8px;
  font-weight: bold;
  font-size: 14px;
`;

export const Inputs = styled.div`
  margin-bottom: 8px;
`;

export const Idinput = styled.input`
  width: 332px;
  height: 44px;
  margin-right: 14px;
  padding-left: 10px;
  /* border-radius: 4px; */
`;

export const IdBtn = styled.button`
  width: 120px;
  height: 44px;
  background-color: transparent;
  color: purple;
  border: 1px solid purple;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

export const IdCheck = styled.div`
  display: block;
  margin-right: 10px;
  color: #b3130b;
`;

export const PasswordInputs = styled.div`
  padding-right: 80px;
`;

export const PasswordInput = styled.div`
  padding-right: 120px;
`;

export const AddressButton = styled.button`
  width: 332px;
  height: 44px;
  border: 1px solid #5f0080;
  background-color: transparent;
  color: purple;
  font-weight: bold;
`;

export const AddressInput = styled.div`
  padding-right: 130px;
`;

export const SingupButton = styled.button`
  width: 240px;
  height: 56px;
  margin-top: 50px;
  background-color: #5f0080;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
