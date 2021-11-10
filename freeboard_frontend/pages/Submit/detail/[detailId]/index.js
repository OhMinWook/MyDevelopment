import {Wrapper, Title, Input, Html, LeftWrapper, DetailInput, Button, 
    Picture, Pictures, Radios, SignupButton,RightWrapper, AdInput, HeadWrapper, 
    TitleWrapper,NameWrapper, FooterButton} from "../../../../styles/DetailEmotion"
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

export default function BoardsDetail() {

const router = useRouter();

const { data } = useQuery(FETCH_BOARD, {
    variables: {
        boardId: router.query.detailId
    }
})
console.log(data)


async function onSignupButton() {
    
     router.push(`/Submit/list`)

}

   async function DoEdit() {

        router.push(`/Submit/detail/${router.query.detailId}/edit`)

    }

return (
<Html>
    <Wrapper>
        <Title>Detail Board</Title>
        <LeftWrapper>
            <HeadWrapper>
                <NameWrapper>
                    <div>{data?.fetchBoard.writer}</div>
                </NameWrapper>
                <TitleWrapper>
                    <div></div>
                </TitleWrapper>
            </HeadWrapper>
                <div>{data?.fetchBoard.title}</div>
                <div>{data?.fetchBoard.contents}</div>
                <div>
                    <AdInput type="text"/>
                    <Button>우편 번호 검색</Button>
                <div/>
                <DetailInput>
                    <Input type="text" placeholder="상세 주소를 입력해 주세요" />
                    <Input type="text" placeholder="상세 주소를 입력해 주세요" />
                    <Input type="text" placeholder="링크를 복사해 주세요" />
                </DetailInput>
                <Pictures>
                    <Picture></Picture>
                    <Picture></Picture>
                    <Picture></Picture>
                </Pictures>
                <Radios>
                    <input type="radio" name="mainset"/> 유튜브
                    <input type="radio" name="mainset"/> 사진
                </Radios>
            </div>
            <FooterButton>
                <SignupButton onClick={onSignupButton}>목록으로</SignupButton>
                <SignupButton onClick={DoEdit}>수정하기</SignupButton>
                <SignupButton>삭제하기</SignupButton>
            </FooterButton>
        </LeftWrapper>
    </Wrapper>
    <RightWrapper></RightWrapper>
</Html>
    )
     
}