import styled from "@emotion/styled";
import ReactQuill from "react-quill";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: purple;
  border-bottom: 3px solid purple;
  width: 1050px;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

export const Subject = styled.div`
  padding-top: 13px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  padding-left: 50px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

export const Input = styled.input`
  width: 80%;
  height: 50px;
  padding-left: 10px;
  margin-bottom: 7px;
  border-radius: 5px;
`;

export const Content = styled.input`
  width: 80%;
  padding-left: 10px;
  height: 120px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-left: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 80px;
  padding-left: 10px;
`;

export const Image = styled.input`
  /* display: none; */
`;

export const ImageClick = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d3d3d3;
  /* border: 2px solid #000000; */
  margin-left: 30px;
  font-size: 17px;
  text-align: center;
  padding-top: 35px;
  color: #ffffff;
  border-radius: 5px;
`;

export const Submit = styled.button`
  margin-bottom: 50px;
  width: 380px;
  height: 80px;
  font-size: 24px;
  background-color: purple;
  border: 2px solid #000000;
  color: white;
  cursor: pointer;
`;

// export const Quill = styled(ReactQuill)`
//   width: 720px;
// `;
