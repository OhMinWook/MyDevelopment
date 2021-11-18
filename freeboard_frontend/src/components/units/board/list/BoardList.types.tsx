import { MouseEventHandler } from "react";

export interface IBoardListProps {
  onClickPrevPage: MouseEventHandler<HTMLSpanElement>;
  onClickNextPage: MouseEventHandler<HTMLScriptElement>;
  data?: any;
  onClickBoarderNew: () => void;
  onClickBoardDetail: (event: any) => void;
  onClickPage: (event: any) => void;
  startpage: number;
  setStartPage: any;
}
