import { useMutation } from "@apollo/client";
import { PinDropSharp } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/list.queries";
import ReviewCommnetUI from "./write.presenter";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./write.queries";

export default function ReviewCommnet(props) {
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardCommnet] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [star, setStar] = useState(0);

  function onChangeStar(value) {
    setStar(value);
  }

  function onClickComment(data) {
    try {
      const result = createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            contents: data.contents,
            password: data.password,
            rating: star,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(data) {
    console.log(data);
    try {
      if (!props.el?._id) return;
      await updateBoardCommnet({
        variables: {
          updateBoardCommentInput: {
            contents: data.contents,
          },
          password: data.password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ReviewCommnetUI
      onClickComment={onClickComment}
      onChangeStar={onChangeStar}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
