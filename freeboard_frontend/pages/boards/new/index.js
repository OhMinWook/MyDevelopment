import { WholeWrapper, BoardsTitle, Wrapper__Header, HeadWriter,HeadWriterInput, HeadPassword, HeadPasswordInput, Wrapper__Body1, BodyTitle, BodyTitleInput, BodyContent, BodyContentInput,
 Wrapper__Body2, BodyAddress, BodyAddressButton, BodyAddressInput1, BodyAddressInput2, BodyAddressNumber, FooterYoutube, FooterYoutubeInput, FooterPicture,
FooterPictureGroup, FooterPictureUpload, FooterMain, FooterMainSettingSelect, FooterMainSetting, SignupButton, Writer, Password, FooterInput, Picture, Error } from '../../../styles/BoardsNewEmotion'

import { useState } from "react"

export default function BoardsNew() {

    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")

    const [ nameError, setNameError ] = useState("")
    const [ passwordError, setPasswordError ] = useState("")
    const [ titleError, setTitleError ] = useState("")
    const [ contentError, setContentError ] = useState("")

    function InputName(event) {
        setName(event.target.value)
        if (event.target.value !== "") {
            setNameError("");
          }
    }
    function InputPassword(event) {
        setPassword(event.target.value)
        if (event.target.value !== "") {
            setPasswordError("");
          }
    }
    function InputTitle(event) {
        setTitle(event.target.value)
        if (event.target.value !== "") {
            setTitleError("");
          }
    }                                          
    function InputInfo(event) {
        setContent(event.target.value)
        if (event.target.value !== "") {
            setContentError("");
          }
    }

    function ErrorMessage() {  
        if(name === "") {
            setNameError("이름을 입력해 주세요.")
        }
        if(password === "") {
            setPasswordError("비밀번호를 입력해 주세요.")
        }
        if(title === "") {
            setTitleError("제목을 입력해 주세요.")
        }
        if(content === "") {
            setContentError("내용을 입력해 주세요.")
        }
      
    }


    return(
        <WholeWrapper>
            <BoardsTitle>게시물 등록</BoardsTitle>
            <Wrapper__Header>
                <Writer>
                    <HeadWriter>작성자</HeadWriter>
                    <HeadWriterInput type="text" placeholder=" 이름을 입력하세요." onChange={InputName}/>
                    <Error>{nameError}</Error>
                </Writer>
                <Password>
                    <HeadPassword>비밀번호</HeadPassword>
                    <HeadPasswordInput type="password" placeholder=" 비밀번호를 입력하세요." onChange={InputPassword}/>
                    <Error>{passwordError}</Error>
                </Password>
            </Wrapper__Header>
            <Wrapper__Body1>
                <>
                    <BodyTitle>제목</BodyTitle>
                    <BodyTitleInput type="text" placeholder=" 제목을 작성해 주세요." onChange={InputTitle}/>
                    <Error>{titleError}</Error>
                </>
                <>
                    <BodyContent>내용</BodyContent>
                    <BodyContentInput type="text" placeholder="내용을 작성해 주세요." onChange={InputInfo}/>
                    <Error>{contentError}</Error>
                </>
            </Wrapper__Body1>
            <Wrapper__Body2>
                <BodyAddress>주소</BodyAddress>
                <>
                    <BodyAddressNumber type="text" />
                    <BodyAddressButton>우편 번호 검색</BodyAddressButton>
                </>
                <BodyAddressInput1 type="text"/>
                <BodyAddressInput2 type="text"/>
            </Wrapper__Body2>
            <>
                <FooterYoutube>유튜브</FooterYoutube>
                <FooterYoutubeInput type="text" placeholder="링크를 복사해 주세요."/>
            </>
            <Picture>
                <FooterPicture>사진 첨부</FooterPicture>
                <FooterPictureGroup>
                    <FooterPictureUpload></FooterPictureUpload>
                    <FooterPictureUpload></FooterPictureUpload>
                    <FooterPictureUpload></FooterPictureUpload>  
                </FooterPictureGroup>
            </Picture>
            <FooterMain>
                <FooterMainSetting>메인 설정</FooterMainSetting>
                <FooterInput>
                    <FooterMainSettingSelect type="radio" name="mainset"/>유튜브
                    <FooterMainSettingSelect type="radio" name="mainset"/>사진
                </FooterInput>
            </FooterMain>
            <SignupButton onClick={ErrorMessage}>등록하기</SignupButton>
        </WholeWrapper>
    )

}
