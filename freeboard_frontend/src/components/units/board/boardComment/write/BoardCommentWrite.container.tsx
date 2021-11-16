import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/Router";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentWrite(props) {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContent, setMyContent] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }
  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }
  function onChangeMyContent(event) {
    setMyContent(event.target.value);
  }
  function onChangeStar(value) {
    setStar(value);
  }

  async function onClickSubmit() {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContent,
            rating: star,
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

  async function onClickUpdate(event) {
    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: myContent,
          },
          password: myPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeMyWrite={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyContent={onChangeMyContent}
      onChangeStar={onChangeStar}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      myContent={myContent}
      star={star}
    />
  );
}
