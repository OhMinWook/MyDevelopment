import { Wrapper, Header, Body, LeftIcon,HeadLeft, Name, HeadInfo, Data, Line, 
        RightIcon, Footer, FootIcons, Icon1, Icon2, FootImg, Title, LeftCount, 
        WholeWrapper, Buttons, Button, HeadRight, Content, RightCount} from '../../../styles/DetailEmotion'

export default function BoardsDetail() {



    return (
        <WholeWrapper>
            <Wrapper>
                <Header>
                    <HeadLeft>
                        <LeftIcon src="/images/Profile.png"/>
                        <HeadInfo>
                            <Name>오민욱</Name>
                            <Data>Date:2021.02.18</Data>
                        </HeadInfo>
                    </HeadLeft>
                    <HeadRight>
                        <RightIcon src="/images/ic_link-32px.png"/>
                        <RightIcon src="/images/ic_location_on-32px.png"/>
                    </HeadRight>
                </Header>
                <Line></Line>
                <Body>
                    <Title>게시글 제목입니다.</Title>
                    <img src="/images/image.png"/>
                    <Content>가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나
                        다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마
                        바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아
                        자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카
                        타파하가나다라마바사아자차카타파하가나다라</Content>
                </Body>
                <Footer>
                    <FootImg></FootImg>
                    <FootIcons>
                        <Icon1>
                            <img src="/images/ic_thumb_up_off_alt-24px.png"/>
                            <LeftCount>1920</LeftCount>
                        </Icon1>
                        <Icon2>
                            <img src="/images/ic_thumb_down-24px.png"/>
                            <RightCount>1920</RightCount>
                        </Icon2>
                    </FootIcons>
                </Footer>
            </Wrapper>
            <Buttons>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </Buttons>
        </WholeWrapper>

    )
}