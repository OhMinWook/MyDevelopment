import { useContext } from "react";
import { Context } from "../../../../pages/quiz/06_02_folderStructure/[boardId]/edit";

export default function BoardWriteUI(props) {
  const { isEdit } = useContext(Context);

  return (
    <>
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
      작성자: <input onChange={props.onChangeWriter} type="text" />
      <br />
      비밀번호: <input onChange={props.onChangePassword} type="password" />
      <br />
      제목: <input onChange={props.onChangeTitle} type="text" />
      <br />
      내용: <input onChange={props.onChangeContents} type="text" />
      <br />
      <button onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {isEdit ? "수정하기" : "등록하기"}
      </button>
    </>
  );
}
