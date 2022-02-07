import { Star } from "./write.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import * as C from "./write.styles";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function ReviewCommnetUI(props) {
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  function handleChange(value: String) {
    console.log(value);
    setValue("contents", value === "<p><br><p>" ? "" : value);
    trigger("contents");
  }
  return (
    <form
      onSubmit={handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickComment
      )}
    >
      <C.Wrapper>
        <C.CommentWrapper>
          <C.Comment>Comment</C.Comment>
          <C.InnerWrapper>
            <C.WriterWrapper>
              <C.Title>작성자</C.Title>
              <input type="text" {...register("writer")} />
            </C.WriterWrapper>
            <C.WriterWrapper>
              <C.Password>비밀번호</C.Password>
              <C.PasswordInput type="password" {...register("password")} />
            </C.WriterWrapper>
            <Star onChange={props.onChangeStar} />
          </C.InnerWrapper>
          <ReactQuill onChange={handleChange} style={{ height: 100 }} />
          <C.Button>{props.isEdit ? "수정하기" : "등록하기"}</C.Button>
        </C.CommentWrapper>
      </C.Wrapper>
    </form>
  );
}
