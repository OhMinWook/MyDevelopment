import BoardWriteUI from "./BoardWriter.persenter"
import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWriter.queries'
import { useRouter } from 'next/router'
import { IMyVariables } from "./BoardWrite.types"
import { IBoardWriteProps } from "./BoardWrite.types"

export default function BoardWrite(props: IBoardWriteProps) {
        const router = useRouter() 

        const [MyQqq, setMyQqq] = useState<boolean>(false)
        const [mywriter, setMyWriter] = useState("")
        const [mytitle, setMyTitle ] = useState("")
        const [mycontents, setMyContents ] = useState("")
    
        const [ createBoard ] = useMutation(CREATE_BOARD)
        const [ updateBoard ] = useMutation(UPDATE_BOARD)
     
        function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
            // react에서는 임시저장공간에 담아 두었다가 한번에 실행을 시킨다.
            setMyWriter(event.target.value)
            // 위의 문제를 해결하기 위해 한글자만 작성하더라고 이벤트가 발생하도록 해주는 조건문
            if(event.target.value !== "" && mytitle !== "" && mycontents !== "") {
                setMyQqq(true)
            }
            // onCheck()
        }
        function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
            setMyTitle(event.target.value)
            if(mywriter !== "" && event.target.value !== "" && mycontents !== "") {
                setMyQqq(true)
            }
            // onCheck()
        } 
        function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
            setMyContents(event.target.value)
            if(mywriter !== "" && mytitle !== "" && event.target.value !== "") {
                setMyQqq(true)
            }
            // 다시 비워졌을 때 원래의 색깔로 돌아오도록 else 문을 작성해주도록 한다.
            // onCheck()
        }
        
        // 따로 함수를 만들어서 작성하면 입력 칸이 다 찼을 경우 컬러가 바뀐다.
        // function onCheck(event) {
        //     if(mywriter !== "" && mytitle !== "" && mycontents !== "") {
        //         setMyQqq(true)
        //     }
        // }
        
        async function zzz() {
            // alert("등록하기 버튼을 누르셨습니다.")
            const result = await createBoard({
                variables : { 
                    writer: mywriter, 
                    title: mytitle, 
                    contents: mycontents
                    
                }
                
            })
            // console.log(result)
            // console.log(result.data.createBoard.message)
            
            // zzz() // 함수 안에 조건문을 작성하면 버튼을 눌렀을 때 동작한다.
            // if(mywriter !== "" && mytitle !== "" && mycontents !== "") {
            //     setMyQqq(true)
            // }

            router.push(`/09_02_boards2/${result.data.createBoard.number}`)
            
    }

    async function xxx() {
        
        // 따로 객체를 생성하여
        const myVariables : IMyVariables = {
            number: Number(router.query.myNumber)
        }
        // 조건에 해당하는 인자값을 보내준다.
        if(mywriter !== "") {
            myVariables.writer = mywriter 
        }
        if(mytitle !== "") {
            myVariables.title = mytitle
        }
        if(mycontents !== "" ) {
            myVariables.contents = mycontents
        }
        // alert("수정하기 버튼을 누르셨습니다.")
        // 위의 조건에 해당하는 값들만 업데이트보드에 적용된다.
         const result = await updateBoard({
             variables : myVariables
         })
         console.log(result)
         router.push(`/09_02_boards2/${router.query.myNumber}`)
    }
    return(
        <BoardWriteUI 
            aaa={onChangeMyWriter}
            bbb={onChangeMyTitle}
            qqq={onChangeMyContents}
            zzz={zzz}
            MyQqq={MyQqq}
            isEdit={props.isEdit}
            xxx={xxx}
            data={props.data}
            />
    )
}