import styled from "@emotion/styled";

export const Html = styled.div`
    padding: 100px 250px;
`

export const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
   
    border: 1px solid black;
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
    margin-bottom: 50px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    width: 100%;
    margin-bottom: 100px;
`
export const InputTitle = styled.input`
    width: 600px;
    height: 38px;
    border-radius: 5px;
`

export const Searchs = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;   
`
