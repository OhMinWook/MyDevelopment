import styled from "@emotion/styled";

export const Html = styled.div`
  padding: 0px 50px;

  display: flex;
  flex-direction: row;
  margin-left: 50px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 13px;
  margin-right: 5px;
`;

export const CommentWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 50px 20px 65px;
  width: 900px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid black;

  box-shadow: 0px 0px 1px 3px;
`;

export const Body = styled.div`
  width: 100%;
  margin-left: 10px;
`;

export const TopBody = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  margin-right: 10px;
`;

export const PencilButton = styled.button`
  /* width: 18px;
  height: 18px; */
  /* background-repeat: no-repeat; */
  /* background: url("/images/pencil.png"); */
  /* border-style: none; */
`;

export const DeleteButton = styled.button`
  /* width: 14px;
  height: 14px; */
  /* background-repeat: no-repeat; */
  /* background: url("/images/delete.png"); */
  /* border-style: none; */
  margin-left: 11px;
`;

export const Content = styled.div`
  margin-bottom: 10px;
`;
