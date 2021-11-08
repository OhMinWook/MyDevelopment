import styled from "@emotion/styled";

export const Html = styled.div`
    padding: 100px 50px;

    display: flex;
    flex-direction: row;
    margin-left: 50px;
    
    
`

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 20px 50px 20px 65px;
    width: 1000px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    border: 1px solid black;
    
    box-shadow: 0px 0px 1px 3px;

`

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

`

export const DetailInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.div`
    font-size: 50px;
    color: #ffffff;
    font-weight: bold;
    text-shadow: 0 1px 0 #CCC, 0 2px 0 #C9C9C9, 0 3px 0 #BBB, 0 4px 0 #B9B9B9, 
                 0 5px 0 #AAA, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 
                 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px 
                 rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px 
                 rgba(0, 0, 0, .15);
    
`

export const Input = styled.input`
    margin-top: 25px;
    width: 500px;
    height: 45px;
    padding: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: pink;
  }
`

export const Button = styled.button`
    height: 45px;
    width: 130px;
    margin-left: 10px;
    background-color: #ff0000;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`

export const TitleInput = styled.input`
    width: 250px;
    height: 45px;
    margin-top: 25px;
    padding: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: pink;
  }
`

export const Pictures = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;

    width: 50%;
    margin-top: 20px;
`

export const Picture = styled.div`
    width: 100px;
    height: 100px;
    background-color: #999999;
`

export const Radios = styled.div`
    margin-top: 10px;
`

export const SignupButton = styled.button`
    width: 100px;
    height: 40px;
    margin-top: 10px;
    background-color: #ff0000;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`

export const RightWrapper = styled.div`
    width: 500px;
    height: 735px;
    margin-right: 90px;
    border: 1px solid #999999;
    box-shadow: 0px 0px 1px 3px;
    background-image: url("/images/darkbackground.png");
`