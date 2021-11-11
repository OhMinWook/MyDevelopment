import * as D from './BoardDetail.styles'
import { IsEdit } from './Boarddetail.types'


export default function BoardDetailUI(props: IsEdit) {

    return(
    <D.Html>
        <D.Wrapper>
            <D.Title>Detail Board</D.Title>
            <D.LeftWrapper>
                <D.HeadWrapper>
                    <D.NameWrapper>
                        <div>{props.data?.fetchBoard.writer}</div>
                    </D.NameWrapper>
                    <D.TitleWrapper>
                        <div></div>
                    </D.TitleWrapper>
                </D.HeadWrapper>
                    <div>{props.data?.fetchBoard.title}</div>
                    <div>{props.data?.fetchBoard.contents}</div>
                    <div>
                        <D.AdInput type="text"/>
                        <D.Button>우편 번호 검색</D.Button>
                    <div/>
                    <D.DetailInput>
                        <D.Input type="text" placeholder="상세 주소를 입력해 주세요" />
                        <D.Input type="text" placeholder="상세 주소를 입력해 주세요" />
                        <D.Input type="text" placeholder="링크를 복사해 주세요" />
                    </D.DetailInput>
                    <D.Pictures>
                        <D.Picture></D.Picture>
                        <D.Picture></D.Picture>
                        <D.Picture></D.Picture>
                    </D.Pictures>
                    <D.Radios>
                        <input type="radio" name="mainset"/> 유튜브
                        <input type="radio" name="mainset"/> 사진
                    </D.Radios>
                </div>
                <D.FooterButton>
                    <D.SignupButton onClick={props.onSignupButton}>목록으로</D.SignupButton>
                    <D.SignupButton onClick={props.DoEdit}>수정하기</D.SignupButton>
                    <D.SignupButton onClick={props.onClickDelete}>삭제하기</D.SignupButton>
                </D.FooterButton>
            </D.LeftWrapper>
        </D.Wrapper>
        <D.RightWrapper></D.RightWrapper>
    </D.Html>

    )
}