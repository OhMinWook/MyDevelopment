import { Logo, Wrapper, Header, Title, Body, Footer, 
         Menu, Input,BodyLine, BodyLogin, UnderLogo, 
         LogoWrapper, MenuLine, MenuTitle, FooterLogin, BodyInput  } from '../../../styles/road_emotion'

export default function RoadPage() {


    return (

        <Wrapper>
            <Header>
                <LogoWrapper>
                    <Logo src="/images/img-100-logo-white.png" />
                    <UnderLogo src="/images/rectangle.png"/>
                </LogoWrapper>
                <Title>잇츠로드</Title>
            </Header>
            <Body>
                <BodyInput>
                    <Input type="text" />
                    <img src="/images/ic-20-delete-white.png"/>
                </BodyInput>
                <div></div>
                <BodyInput>
                    <Input type="text" />
                    <img src="/images/ic-20-delete-white.png"/>
                </BodyInput>
                <div></div>
                <BodyLogin>로그인</BodyLogin>
            </Body>
            <Menu>
                <MenuTitle>이메일 찾기</MenuTitle><MenuLine></MenuLine>
                <MenuTitle>비밀번호 찾기</MenuTitle><MenuLine></MenuLine>
                <MenuTitle>회원가입</MenuTitle>
            </Menu>
            <Footer>
                <FooterLogin>
                    <img />
                    카카오톡으로 로그인
                </FooterLogin>
            </Footer>
        </Wrapper>

    )
}