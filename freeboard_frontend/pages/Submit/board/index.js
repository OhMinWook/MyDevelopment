import {Wrapper, Title, Input, Html, LeftWrapper, DetailInput, Button, PasswordInput, 
        Picture, Pictures, Radios, SignupButton,RightWrapper, AdInput, HeadWrapper, 
        NameInput, Error, PasswordWrapper, PasswordError, NameError, NameWrapper} from "../../../styles/BoardNew"

import { useState } from "react" 
import { useMutation, gql } from '@apollo/client'
import { useRouter } from "next/router"

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

export default function BoardsNew() {
    
    const router = useRouter()
    const [ createBoard ] = useMutation(CREATE_BOARD)
    
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    // const [number, setNumber] = useState("")
    // const [detail, setDetail] = useState("")
    // const [link, setLink] = useState("")

    const [nameerror, setNameError] = useState("")
    const [passworderror, setPasswordError] = useState("")
    const [titleerror, setTitleError] = useState("")
    const [contenterror, setContentError] = useState("")
    // const [numbererror, setNumberError] = useState("")
    // const [detailerror, setDetailError] = useState("")
    // const [linkerror, setLinkError] = useState("")

    function InputName(event) {
        setName(event.target.value)
        if(event.target.value !== "") {
            setNameError("")
        }
    }
    function InputPassword(event) {
        setPassword(event.target.value)
        if(event.target.value !== "") {
            setPasswordError("")
        }
    }
    function InputTitle(e) {
        setTitle(e.target.value)
        if(e.target.value !== "") {
            setTitleError("")
        }
    }
    function InputContent(event) {
        setContent(event.target.value)
        if(event.target.value !== "") {
            setContentError("")
        }
    } 

    async function onSignupButton() {
        if( name ===  ""){
            setNameError("이름을 입력해 주세요")
        }
        if( password === "") {
            setTitleError("비밀번호를 입력해 주세요")
        }
        if(content === "") {
            setContentError("내용을 입력해주세요")
        }
        if( title === "" ) {
            setTitleError("제목을 입력해 주세요")
        }
        try {
            const result = await createBoard({
                variables : {
                    createBoardInput: {
                        writer: name,
                        password,
                        title,
                        contents : content
                    }
                }
            })
            console.log(result)
            router.push(`/Submit/detail/${result.data.createBoard._id}`)
            } catch(error) {
                alert(error.message)
            }
    }

    return (
    <Html>
        <Wrapper>
            <Title>Bulletine Board</Title>
            <LeftWrapper>
                <HeadWrapper>
                    <NameWrapper>
                        <NameInput type="text" placeholder="이름을 입력하세요" onChange={InputName}/>
                        <NameError>{nameerror}</NameError>
                    </NameWrapper>
                    <PasswordWrapper>
                        <PasswordInput type="password" placeholder="비밀번호를 입력해 주세요" onChange={InputPassword}/>
                        <PasswordError>{passworderror}</PasswordError>
                    </PasswordWrapper>
                </HeadWrapper>
                    <Input type="text" placeholder="제목을 입력해 주세요" onChange={InputTitle}/>
                    <Error>{titleerror}</Error>
                    <Input type="text" placeholder="내용을 입력해 주세요" onChange={InputContent}/>
                    <Error>{contenterror}</Error>
                    <div>
                        <AdInput type="text" />
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
                <SignupButton onClick={onSignupButton}>등록하기</SignupButton>
            </LeftWrapper>
        </Wrapper>
        <RightWrapper></RightWrapper>
    </Html>
    )
}