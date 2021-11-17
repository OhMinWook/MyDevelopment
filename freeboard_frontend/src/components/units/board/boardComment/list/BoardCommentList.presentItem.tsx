import BoardCommentWrite from "../write/BoardCommentWrite.container";
import * as D from "./BoardCommentList.styles";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/Router";
import { Modal } from "antd";
import { useState } from "react";

export default function BoardCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDelelteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickOpenDelelteModal() {
    setIsOpenDeleteModal(true);
  }

  function onChangeDeletePassword(event) {
    setMyPassword(event.target.value);
  }

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detailId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {isOpenDelelteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          비밀번호 입력:{" "}
          <input type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <D.Html>
          <D.CommentWrapper>
            {/* 아이콘하고 내용물 감싸는 div */}
            <D.Img src="/images/Avatar.png" />
            <D.Body>
              {/* 이름, 별 ,버튼 두개 */}
              <D.TopBody>
                <D.Head>
                  <D.Name>{props.el?.writer}</D.Name>
                  <D.Star value={props.el?.rating} disabled />
                </D.Head>
                <div>
                  <D.PencilButton
                    id={props.el._id}
                    onClick={onClickUpdate}
                  ></D.PencilButton>
                  <D.DeleteButton
                    id={props.el._id}
                    onClick={onClickOpenDelelteModal}
                  ></D.DeleteButton>
                </div>
              </D.TopBody>
              <D.Content>{props.el?.contents}</D.Content>
              <div>{props.el?.createdAt}</div>
            </D.Body>
          </D.CommentWrapper>
        </D.Html>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
