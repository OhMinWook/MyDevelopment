import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'
import { Wrapper, Header, Body, LeftIcon,HeadLeft, Name, HeadInfo, Data, Line, 
        RightIcon, Footer, FootIcons, Icon1, Icon2, FootImg, Title, LeftCount, 
        WholeWrapper, Buttons, Button, HeadRight, Content, RightCount} from '../../../styles/DetailEmotion'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
        writer
        title
        contents
        }
    }
`
 
export default function BoardsDetail() {

   
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.signup
        }
    })



    return (
        <WholeWrapper>
            <Wrapper>
                <Header>
                    <HeadLeft>
                        <LeftIcon src="/images/Profile.png"/>
                        <HeadInfo>
                            <Name>{data && data.fetchBoard.writer}</Name>
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
                    <Title>{data && data.fetchBoard.title}</Title>
                    <img src="/images/image.png"/>
                    <Content>{data && data.fetchBoard.Content}</Content>
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