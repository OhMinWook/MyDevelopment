import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 80px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #e2e2e2;
`;

export const ColumnHeaderBasic = styled.div`
  width: 35%;
  text-align: center;
`;

export const ColumnHeaderContents = styled.div`
  width: 100%;
  text-align: center;
  margin-right: 8px;
`;

export const ColumnBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnContents = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  color: purple;
  width: 1050px;
  margin-left: 20px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 60px 20px 400px;
`;

export const HeadWrapper = styled.div`
  display: flex;
`;

export const Search = styled.input`
  margin-top: 50px;
  width: 400px;
  height: 50px;
  padding-left: 10px;
`;

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
