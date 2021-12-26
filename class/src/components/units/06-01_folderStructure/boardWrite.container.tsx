import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../commons/types/generated/types";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";

export default function BoardWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTtitle] = useState("");
  const [password, setPassword] = useState("");
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTtitle(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
    });
    console.log(result);
    router.push(`/quiz/06_02_folderStructure/${result.data.createBoard._id}`);
  };

  const onClickUpdate = async () => {
    alert("수정되었습니다.");
    const change = await updateBoard({
      variables: {
        boardId: String(router.query.boardId),
        updateBoardInput: {
          title,
          contents,
        },
        password,
      },
    });
    console.log(change);
    router.push(`/quiz/06_02_folderStructure/${router.query.boardId}`);
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onClickUpdate={onClickUpdate}
    />
  );
}
