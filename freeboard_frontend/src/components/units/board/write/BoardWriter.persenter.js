import  * as W from './BoardWriter.styles'

export default function BoardWriterUI(props) {

    return (
        <W.Html>
        <W.Wrapper>
            <W.Title>Bulletine Board</W.Title>
            <W.LeftWrapper>
                <W.HeadWrapper>
                    <W.NameWrapper>
                        <W.NameInput type="text" placeholder="이름을 입력하세요" onChange={props.InputName}/>
                        <W.NameError>{props.nameerror}</W.NameError>
                    </W.NameWrapper>
                    <W.PasswordWrapper>
                        <W.PasswordInput type="password" placeholder="비밀번호를 입력해 주세요" onChange={props.InputPassword}/>
                        <W.PasswordError>{props.passworderror}</W.PasswordError>
                    </W.PasswordWrapper>
                </W.HeadWrapper>
                    <W.Input type="text" placeholder="제목을 입력해 주세요" onChange={props.InputTitle}/>
                    <W.Error>{props.titleerror}</W.Error>
                    <W.Input type="text" placeholder="내용을 입력해 주세요" onChange={props.InputContent}/>
                    <W.Error>{props.contenterror}</W.Error>
                    <div>
                        <W.AdInput type="text" />
                        <W.Button>우편 번호 검색</W.Button>
                    <div/>
                    <W.DetailInput>
                        <W.Input type="text" placeholder="상세 주소를 입력해 주세요" />
                        <W.Input type="text" placeholder="상세 주소를 입력해 주세요" />
                        <W.Input type="text" placeholder="링크를 복사해 주세요" />
                    </W.DetailInput>
                    <W.Pictures>
                        <W.Picture></W.Picture>
                        <W.Picture></W.Picture>
                        <W.Picture></W.Picture>
                    </W.Pictures>
                    <W.Radios>
                        <input type="radio" name="mainset"/> 유튜브
                        <input type="radio" name="mainset"/> 사진
                    </W.Radios>
                </div>
                {/* <SignupButton onClick={onSignupButton}>등록하기</SignupButton> */}
                <W.SignupButton onClick={props.addBoard}>등록하기</W.SignupButton>
            </W.LeftWrapper>
        </W.Wrapper>
        <W.RightWrapper></W.RightWrapper>
    </W.Html>

    )
}