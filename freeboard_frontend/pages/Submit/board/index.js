import {Wrapper, Title, Input, Html, LeftWrapper, DetailInput, Button, TitleInput, 
        Picture, Pictures, Radios, SignupButton,RightWrapper} from "../../../styles/BoardNew"

import { useState } from "react" 

export default function BoardsNew() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [number, setNumber] = useState("")
    const [detail, setDetail] = useState("")
    const [link, setLink] = useState("")

    const [titleerror, setTitleError] = useState("")
    const [contenterror, setContentError] = useState("")
    const [numbererror, setNumberError] = useState("")
    const [detailerror, setDetailError] = useState("")
    const [linkerror, setLinkError] = useState("")

    function InputTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        }
    }

    function InputContent(event) {
        setContent(event.target.value)
        if(event.target.value !== "") {
            setContentError("")
        }
    }

    function InputNumber(event) {
        setNumber(event.target.value)
        if(event.target.value !== "") {
            setNumberError("")
        }
    }
    function InputDetail(event) {
        setDetail(event.target.value)
        if(event.target.value !== "") {
            setDetailError("")
        }
    }
    function InputLink(event) {
        setLink(event.target.value)
        if(event.target.value !== "") {
            setLinkError("")
        }
    }

    async function onSignupButton() {
        try{
            const result = await createBoard({
                variables : {
                    createBoardInput: {
                        writer: name,
                        password: password,
                        contents : email
                    }
                }
            })
        }catch(error) {
            alert("오류가 발생했습니다.")
        }
        
        if( title=== "") {
            setTitleError("제목을 입력해 주세요")
        }
        if(content === "") {
            setContentError("내용을 입력해주세요")
        }
        if(number === "") {
            setNumberError("주소 번호를 입력해 주세요")
        }
        if(detail === "") {
            setDetailError("상세주소를 입력해 주세요")
        }
        if(link === "") {
            setLinkError("링크를 입력해 주세요")
        }
    }
    
    return (
    <Html>
        <Wrapper>
            <Title>Send a Message</Title>
            <LeftWrapper>
                    <TitleInput type="text" placeholder="제목을 입력해 주세요" onChange={InputTitle}/>
                    <div>{titleerror}</div>
                    <Input type="text" placeholder="내용을 입력해 주세요" onChange={InputContent}/>
                    <div>{contenterror}</div>
                    <div>
                        <Input type="text" onChange={InputNumber}/>
                        <Button>우편 번호 검색</Button>
                    <div/>
                    <DetailInput>
                        <Input type="text" placeholder="상세 주소를 입력해 주세요" onChange={InputDetail}/>
                        
                        <Input type="text" placeholder="상세 주소를 입력해 주세요" onChange={InputDetail}/>
                        
                        <Input type="text" placeholder="링크를 복사해 주세요" onChange={InputLink}/>
                        
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
                <SignupButton onClick={onSignupButton}>등록하기</SignupButton>
            </LeftWrapper>
        </Wrapper>
        <RightWrapper></RightWrapper>
    </Html>
    )
}