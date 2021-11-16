import styled from "@emotion/styled";
import ReactPlayer from "react-player/youtube";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

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
export const Youtube = styled(ReactPlayer)`
  border: 10px solid yellow;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const FooterButton = styled.div``;

export const SignupButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 10px;
  background-color: #ff0000;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  margin-right: 20px;
`;

export const RightWrapper = styled.div`
  width: 500px;
  height: 735px;
  margin-right: 90px;
  border: 1px solid #999999;
  box-shadow: 0px 0px 1px 3px;
  background-image: url("/images/darkbackground.png");
`;

export const Error = styled.div`
  font-size: 11px;
  color: #ff0000;
`;

export const TitleError = styled.div`
  margin-left: 20px;
  font-size: 11px;
  color: #ff0000;
`;

export const NameError = styled.div`
  font-size: 11px;
  color: #ff0000;
`;

export const BottomWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 50px 20px 65px;
  width: 900px;

  display: flex;
  flex-direction: column;
  justify-content: space-space-evenly;
  align-items: flex-start;

  border: 1px solid black;

  box-shadow: 0px 0px 1px 3px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const CommentTitle = styled.div`
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

export const CommentInput = styled.input`
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

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 13px;
  margin-right: 5px;
`;

export const CommentWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 50px 20px 65px;
  width: 750px;

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

export const CommentBody = styled.div`
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
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background: url("/images/pencil.png");
  border-style: none;
`;

export const DeleteButton = styled.button`
  width: 14px;
  height: 14px;
  background-repeat: no-repeat;
  background: url("/images/delete.png");
  border-style: none;
  margin-left: 11px;
`;

export const CommentContent = styled.div`
  margin-bottom: 10px;
`;
export const IconWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  margin-left: 120px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  cursor: pointer;
`;

export const DisLikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #ffd600;
`;

export const DisLikeCount = styled.div`
  color: #828282;
`;
