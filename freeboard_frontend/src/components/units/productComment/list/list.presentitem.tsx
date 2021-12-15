import { Modal } from "antd";

export default function ProductQuestionListItem(props) {
  return (
    <>
      {isOpenDele}
      <div>
        <div>{props.el?.contents}</div>
        {/* <button onClick={onClickUpdate}>수정하기</button> */}
        {/* <button id={props.el._id} onClick={onClickOpenDeleteModal}>
        삭제하기
      </button> */}
      </div>
    </>
  );
}
