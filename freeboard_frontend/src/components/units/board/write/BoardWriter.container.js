import { useMutation } from "@apollo/client"
import { useState } from 'react'
import { CREATE_BOARD } from './BoardWriter.queries'
import BoardWriterUI from "./BoardWriter.persenter"

export default function BoardWrite() {
    const [btnChange, setBtnChange] = useState(false)
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

    const [ createBoard ] = useMutation(CREATE_BOARD)

    function InputTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        }
        if(event.target.value !== "" && content !== "") {
            setBtnChange(true)
        }
    }
    function InputContent(event) {
        setContent(event.target.value)
        if(event.target.value !== "") {
            setContentError("")
        }
        if(title !== "" && event.target.value !== "") {
            setBtnChange(true)
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
                        title,
                        contents: content
                        
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

    return(

        <BoardWriterUI 
            InputTitle={InputTitle}
            InputContent={InputContent}
            onSignupButton={onSignupButton}
            btnChange={btnChange}
                />
    )
}