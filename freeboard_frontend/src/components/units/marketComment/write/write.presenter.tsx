import { Star } from "./write.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

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
      <div>
        <div>
          <input type="text" {...register("writer")} />
          <input type="password" {...register("password")} />
          <Star onChange={props.onChangeStar} />
        </div>
        <ReactQuill onChange={handleChange} />
      </div>
      <button>{props.isEdit ? "수정하기" : "등록하기"}</button>
    </form>
  );
}
