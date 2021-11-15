import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/Router";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentWrite() {
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContent, setMyContent] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const router = useRouter();

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }
  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }
  function onChangeMyContent(event) {
    setMyContent(event.target.value);
  }

  async function onClickSubmit() {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContent,
            rating: 0,
          },
          boardId: router.query.detailId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailId },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeMyWrite={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyContent={onChangeMyContent}
      onClickSubmit={onClickSubmit}
    />
  );
}
