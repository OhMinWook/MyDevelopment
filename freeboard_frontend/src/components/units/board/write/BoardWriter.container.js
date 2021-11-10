import BoardWriterUI from "./BoardWriter.persenter"
import { useRouter } from "next/Router"
import { useState } from "react"
import { CREATE_BOARD } from './BoardWriter.queries'
import { useMutation } from '@apollo/client'


export default function BoardWriterContainerPage(props) {

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

    async function addBoard() {
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
        <BoardWriterUI
        InputName={InputName}
        InputPassword={InputPassword}
        InputTitle={InputTitle}
        InputContent={InputContent}
        addBoard={addBoard}
        isEdit={props.isEdit}
        />
    )

}