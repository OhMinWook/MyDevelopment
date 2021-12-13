import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./list.queries";
import { Star } from "./list.styles";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";
import { useRouter } from "next/Router";
import { Modal } from "antd";
import ReviewCommnet from "../write/write.container";

export default function ReviewCommnetListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  function onChangeDeletePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <input type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <div>
          <div>
            <div>{props.el?.writer}</div>
            <Star value={props.el?.rating} disabled />
          </div>
          <div>{props.el?.contents}</div>
          <button onClick={onClickUpdate}>수정하기</button>
          <button id={props.el._id} onClick={onClickOpenDeleteModal}>
            삭제하기
          </button>
        </div>
      )}
      {isEdit && (
        <ReviewCommnet isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
