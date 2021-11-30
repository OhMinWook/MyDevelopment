import { useContext } from "react";
import { Mycontext } from "../../../../pages/21_04_context_api";

export default function MyBoardWriteUI() {
  const { isEdit } = useContext(Mycontext);

  // return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>;
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
