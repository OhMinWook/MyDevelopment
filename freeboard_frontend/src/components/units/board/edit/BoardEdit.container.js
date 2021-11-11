// import BoardEditUI from "./BoardEdit.presenter";
// import { useState } from "react"
// import { useMutation } from '@apollo/client'
// import { CREATE_BOARD, UPDATE_BOARD } from './BoardEdit.queries'
// import { useRouter } from 'next/router'

// export default function BoardEditContainPage(props) {
//     const router = useRouter()

//     const [ createBoard ] = useMutation(CREATE_BOARD)
//     const [ updateBoard ] = useMutation(UPDATE_BOARD)
    
//     const [name, setName] = useState("")
//     const [password, setPassword] = useState("")
//     const [title, setTitle] = useState("")
//     const [content, setContent] = useState("")
//     // const [number, setNumber] = useState("")
//     // const [detail, setDetail] = useState("")
//     // const [link, setLink] = useState("")

//     const [nameerror, setNameError] = useState("")
//     const [passworderror, setPasswordError] = useState("")
//     const [titleerror, setTitleError] = useState("")
//     const [contenterror, setContentError] = useState("")
//     // const [numbererror, setNumberError] = useState("")
//     // const [detailerror, setDetailError] = useState("")
//     // const [linkerror, setLinkError] = useState("")

//     function InputName(event) {
//         setName(event.target.value)
//         if(event.target.value !== "") {
//             setNameError("")
//         }
//     }
//     function InputPassword(event) {
//         setPassword(event.target.value)
//         if(event.target.value !== "") {
//             setPasswordError("")
//         }
//     }
//     function InputTitle(e) {
//         setTitle(e.target.value)
//         if(e.target.value !== "") {
//             setTitleError("")
//         }
//     }
//     function InputContent(event) {
//         setContent(event.target.value)
//         if(event.target.value !== "") {
//             setContentError("")
//         }
//     } 
 

//         async function onEditButton() {
  

//         try{
//             const result = await updateBoard({variables:{
//                 updateBoardInput:{
//                     title,
//                     contents:content
//                 },
//                 password,
//                 boardId:router.query.detailId   
//            }})
//         }catch(error){
//             alert(error.message)
//             console.log(error.message)
//         }
//         router.push(`/detail/${router.query.detailId}`)

    
//     }
//     return (
//         <BoardEditUI 
//         InputName={InputName}
//         InputPassword={InputPassword}
//         InputTitle={InputTitle}
//         InputContent={InputContent}
//         onEditButton={onEditButton}
//         />
        
//     )
// }
