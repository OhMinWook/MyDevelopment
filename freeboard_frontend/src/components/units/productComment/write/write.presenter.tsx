import * as W from "./write.styles";

export default function ProductCommentUI(props) {
  return (
    <W.Wrapper>
      <W.Comment>Comment</W.Comment>
      <W.CommentInput
        onChange={props.onChangeContents}
        placeholder="내용을 작성하세요"
        defaultValue={props.el?.contents}
      />
      <W.Button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickComment}
      >
        {props.isEdit ? "수정" : "등록"}
      </W.Button>
    </W.Wrapper>
  );
}
