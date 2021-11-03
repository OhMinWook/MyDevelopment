import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    border: 1px solid #999999;
    background-image: url("/images/img-bg.png");
`

export const Header = styled.div`
    width: 100%;
    height: 575px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100px;
    height: 100px;
`

export const Logo = styled.img`
    z-index: 1;
`

export const UnderLogo = styled.img`
    position: absolute;
    top: 80px;
`

export const Title = styled.div`
    font-size: 60px;
    color: #ffffff;
    margin-top: 27px;
`

export const Body = styled.div`
    width: 100%;
    height: 343px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`

export const BodyInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(255,255,255, 0.7);
    
`

export const Input = styled.input`
    width: 480px;
    height: 40px;
    background: none;
    color: white;
    border: none;
    &:focus {
        outline: none;
    }
`


export const BodyLine = styled.div`
    width: 540px;
    border-top: 1px solid white;
    margin-top: 20px;
    margin-bottom: 50px;
    
`

export const BodyLogin = styled.button`
    width: 540px;
    height: 76px;
    border: none;
    background-color: rgb(255,27,109, 0.7);
    border-radius: 38px;
    font-size: 26px;
    color: white;
`

export const Menu = styled.div`
    width: 100%;
    height: 125px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    color: white;

    
`

export const MenuTitle = styled.div`
    font-size: 20px;

`

export const MenuLine = styled.div`
    width: 1px;
    height: 12px;
    border-left: 1px solid white;
`


export const Footer = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterLogin = styled.button`
    width: 540px;
    height: 76px;
    font-size: 26px;
    color: #fae100;
    background: none;
    border-radius: 38px;
    border: 1px solid #fae100;
    background-color: transparent;
`

