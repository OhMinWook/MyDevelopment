import { ChangeEvent, MouseEvent } from "react";

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
  InputName: () => void;
  InputPassword: () => void;
  InputTitle: () => void;
  InputContent: () => void;
  InputYoutubeUrl: () => void;
  onToggleModal: () => void;
  handleComplete: () => void;
  nameerror: string;
  passworderror: string;
  titleerror: string;
  contenterror: string;
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
