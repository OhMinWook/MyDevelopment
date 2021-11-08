import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { Body, Button, Input, Title, Wrapper, Html, Error } from "../../../styles/SignupEmotion";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput){
            writer
            password
            contents
        }
    }
`

export default function BoardSingup() {

    const [ name, setName ] = useState("") 
    const [ email, setEmail ] = useState("") 
    const [ password, setPassword ] = useState("")
    
    const [ nameerror, setNameError ] = useState("")
    const [ emailerror, setEmailError ] = useState("")
    const [ passworderror, setPasswordError ] = useState("")

    const [ createBoard ] = useMutation(CREATE_BOARD)

    function InputName(event) {
        setName(event.target.value)
        if(event.target.value !== "") {
            setNameError("")
        }
    }
    function InputEmail(event) {
        setEmail(event.target.value)
        if(event.target.value !== "") {
            setEmailError("")
        }
    }
    function InputPassword(event) {
        setPassword(event.target.value)
        if(event.target.value !== "") {
            setPasswordError("")
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
        

        if(name === "") {
            setNameError("유저이름을 입력해 주세요")
        }
        if(email === "") {
            setEmailError("이메일을 입력해주세요")
        }
        if(password === "") {
            setPasswordError("비밀번호를 입력해 주세요")
        }
    }

    return (
        <Html>
            <Wrapper>
                <Title>SIGNUP</Title>
                <Body>
                    <Input type="text" placeholder="Username" onChange={InputName}/>
                    <Error>{nameerror}</Error>
                    <Input type="text" placeholder="Email" onChange={InputEmail}/>
                    <Error>{emailerror}</Error>
                    <Input type="password" placeholder="Password" onChange={InputPassword}/>
                    <Error>{passworderror}</Error>
                    <Button onClick={onSignupButton}>SIGN UP</Button><img />
                </Body>
            </Wrapper>
        </Html> 
    )
}