import styled from "@emotion/styled";
export const Html = styled.html`
    background-color: azure;
    width: 100%;
    height: 100%;   
`

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 30%;
    background-image: url("/images/background02.png");
    background-size: cover;
    background-position: center center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 290px 350px 333px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img`
    width: 30px;
    height: 30px;
    background-color: transparent;
    margin-top: 18px;
    
`

export const Title = styled.div`
    font-size: 50px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 110px;
    text-shadow: 0 1px 0 #CCC, 0 2px 0 #C9C9C9, 0 3px 0 #BBB, 0 4px 0 #B9B9B9, 
                 0 5px 0 #AAA, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 
                 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px 
                 rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px 
                 rgba(0, 0, 0, .15);
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid antiquewhite;
    border-radius: 10px;
    background-color: transparent;
    color: #ffffff;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: white;
  }
`

export const Button = styled.button`
    width: 300px;
    height: 40px;
    margin-top: 20px;
    color: #ffffff;
    background-color: skyblue;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 3px #dadce0 inset;
`

export const Error = styled.div`
    width: 100%;
    font-size: 13px;
    color: #ff0000;
`