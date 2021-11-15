import styled from "@emotion/styled";

export const Html = styled.div`
  padding: 0px 50px 50px;

  display: flex;
  flex-direction: row;
  margin-left: 50px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 50px 20px 65px;
  width: 900px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border: 1px solid black;

  box-shadow: 0px 0px 1px 3px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const Title = styled.div`
  margin-bottom: 50px;
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`;

export const TopBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Images = styled.div`
  padding-top: 3px;
`;

export const Input = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 20px;
`;

export const Content = styled.input`
  width: 750px;
  height: 80px;
  border-style: none;
  border-left: 1px solid #d3d3d3;
  border-top: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  outline-color: #d3d3d3;
`;

export const BotBody = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: none;
  outline: 0.1rem solid;
  outline-color: #d3d3d3;
  margin-top: 1px;
  margin-left: 1.5px;
  margin-bottom: 15px;
`;

export const Count = styled.div`
  color: #d3d3d3;
  margin-left: 5px;
`;

export const Singup = styled.button`
  color: #ffffff;
  background-color: #000000;
  font-size: 15px;
`;
