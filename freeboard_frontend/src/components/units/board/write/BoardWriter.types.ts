import { ChangeEvent, ChangeEventHandler, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: any;
}

export interface IMyVariables {
  boardId: string;
  password: string;
  updateBoardInput: object;
}

export interface IMyUpdateBoardInput {
  title: string;
  contents: string;
}

export interface IBoardPresent {
  isModalVisible?: boolean;
  isEdit?: boolean;
  data?: any;
  InputName: (event: ChangeEvent<HTMLInputElement>) => void;
  InputPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  InputTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  InputContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  InputYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  InputAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  nameerror: string;
  passworderror: string;
  titleerror: string;
  contenterror: string;
  myaddress: string;
  myaddressdetail: string;
  myzonecode: string;
  onClickUpdate: () => void;
  addBoard: () => void;
}

export interface IBoardWriteUIProps {
  InputName: (event: ChangeEvent<HTMLInputElement>) => void;
  InputPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  InputTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  InputContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  addBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
}
