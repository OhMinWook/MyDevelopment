import * as S from './BoardEdit.styles'

export default function BoardEditUI(props) {

    return (
        <S.Html>
        <S.Wrapper>
            <S.Title>Edit Board</S.Title>
            <S.LeftWrapper>
                <S.HeadWrapper>
                    <S.NameWrapper>
                        <S.NameInput type="text" placeholder="이름을 입력하세요" onChange={props.InputName}/>
                        <S.NameError>{props.nameerror}</S.NameError>
                    </S.NameWrapper>
                    <S.PasswordWrapper>
                        <S.PasswordInput type="password" placeholder="비밀번호를 입력해 주세요" onChange={props.InputPassword}/>
                        <S.PasswordError>{props.passworderror}</S.PasswordError>
                    </S.PasswordWrapper>
                </S.HeadWrapper>
                    <S.Input type="text" placeholder="제목을 입력해 주세요" onChange={props.InputTitle}/>
                    <S.Error>{props.titleerror}</S.Error>
                    <S.Input type="text" placeholder="내용을 입력해 주세요" onChange={props.InputContent}/>
                    <S.Error>{props.contenterror}</S.Error>
                    <div>
                        <S.AdInput type="text" />
                        <S.Button>우편 번호 검색</S.Button>
                    <div/>
                    <S.DetailInput>
                        <S.Input type="text" placeholder="상세 주소를 입력해 주세요" />
                        <S.Input type="text" placeholder="상세 주소를 입력해 주세요" />
                        <S.Input type="text" placeholder="링크를 복사해 주세요" />
                    </S.DetailInput>
                    <S.Pictures>
                        <S.Picture></S.Picture>
                        <S.Picture></S.Picture>
                        <S.Picture></S.Picture>
                    </S.Pictures>
                    <S.Radios>
                        <input type="radio" name="mainset"/> 유튜브
                        <input type="radio" name="mainset"/> 사진
                    </S.Radios>
                </div>
                <S.SignupButton onClick={props.onEditButton}>수정하기</S.SignupButton>
            </S.LeftWrapper>
        </S.Wrapper>
        <S.RightWrapper></S.RightWrapper>
    </S.Html>
    )
}