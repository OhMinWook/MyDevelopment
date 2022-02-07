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
import * as C from "./list.styles";
import { getDate } from "../../../../commons/libraries/utils";

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
        <C.Wrapper>
          <C.InnerWrapper>
            <C.Image src="https://i.pinimg.com/564x/cb/5c/56/cb5c56e8a65649a9925b41548070eae1.jpg" />
            <C.WholeWrapper>
              <C.TitleWrapper>
                <C.LeftWrapper>
                  <C.WriterWrapper>
                    <div>{props.el?.writer}</div>
                    <C.Time>{getDate(props.el?.createdAt)}</C.Time>
                  </C.WriterWrapper>
                  <Star value={props.el?.rating} disabled />
                </C.LeftWrapper>
                <C.ButtonWrapper>
                  <C.Button onClick={onClickUpdate}>수정</C.Button>
                  <C.Button id={props.el._id} onClick={onClickOpenDeleteModal}>
                    삭제
                  </C.Button>
                </C.ButtonWrapper>
              </C.TitleWrapper>
              {process.browser ? (
                <C.Contents
                  dangerouslySetInnerHTML={{
                    __html: String(props.el?.contents),
                  }}
                />
              ) : (
                <div />
              )}
            </C.WholeWrapper>
          </C.InnerWrapper>
        </C.Wrapper>
      )}
      {isEdit && (
        <ReviewCommnet isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
