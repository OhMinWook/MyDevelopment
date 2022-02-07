import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid purple;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 25px;
  border-bottom: 3px solid purple;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  color: purple;
  font-weight: bold;
  margin-top: 50px;
`;

export const DetailTitle = styled.div`
  font-size: 20px;
  margin: 10px 0px 0px 15px;
  color: purple;
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Name = styled.div`
  margin: 0px 0px 10px 15px;
  color: gray;
`;

export const Time = styled.div`
  color: gray;
  margin-left: 10px;
`;

export const Content = styled.div`
  margin: 0px 0px 10px 15px;
  width: 80%;
  height: 200px;
  padding: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: 200px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const Favorite = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  margin: 50px 0px 50px 400px;
`;

export const LikeWrapper = styled.div`
  display: flex;
`;

export const FavoriteImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const Number = styled.div`
  margin: 5px 0px 0px 15px;
`;

export const DislikeWrapper = styled.div`
  display: flex;
`;

export const Buttons = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 150px;
  height: 60px;
  font-size: 20px;
  background-color: #e3dbeb;
  border: 3px solid purple;
  color: purple;
  cursor: pointer;
  border-radius: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
