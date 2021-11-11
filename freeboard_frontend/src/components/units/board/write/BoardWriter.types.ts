import { ChangeEvent } from "react";

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IMyVariables  {
    boardId : string
    password: string
    updateBoardInput: object
}

export interface IMyUpdateBoardInput {
    title: string
    contents: string
}

export interface IBoardPresent {
    isEdit: boolean
    data?:any
    InputName: (event: ChangeEvent<HTMLInputElement>)=>void
    InputPassword: (event: ChangeEvent<HTMLInputElement>)=>void
    InputTitle:(event: ChangeEvent<HTMLInputElement>)=> void
    InputContent: (event : ChangeEvent<HTMLInputElement>)=> void
    nameerror: string
    passworderror: string
    titleerror: string
    contenterror:string
    onClickUpdate: ()=>void
    addBoard: ()=> void
}

export interface IBoardWriteUIProps {
    InputName:(event: ChangeEvent<HTMLInputElement>) => void
    InputPassword:(event : ChangeEvent<HTMLInputElement>) => void
    InputTitle:(event : ChangeEvent<HTMLInputElement>) => void
    InputContent: (event : ChangeEvent<HTMLInputElement>) => void
    addBoard: () => void
    onClickUpdate: () => void

}












