// emotion을 사용하기 위해서는 설치한 것을 가지고 온다.(import)
import styled from '@emotion/styled'

export const Mywrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
`

export const MyDiv = styled.div`
    color: #000000;
    font-size: 17px;
    text-align: center;
    padding-top: 50px;
`

export const TagName = styled.span`
    font-size: 2px;
    color: #999999;
    padding-right: 125px;
    margin-top: 20px;
    
`

export const MyInput = styled.input`
    width: 170px;
    height: 15px;
    margin-top: px;
`

export const Error = styled.div`
    color: red;
`
