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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  async function onClickDelete(event) {
    const myPassword = setIsModalVisible(true);
    try {
      await deleteBoardComment({
        variables: {
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
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
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
                    onClick={onClickDelete}
                  ></D.DeleteButton>
                  {isModalVisible && (
                    <Modal
                      visible={true}
                      onOk={onToggleModal}
                      onCancel={onToggleModal}
                    >
                      비밀번호 입력: <input type="password" />
                    </Modal>
                  )}
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
