import {} from "./write.styles";
// import { useForm } from "react-hook-form";
// import "react-quill/dist/quill.snow.css";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductCommentUI(props) {
  // const { handleSubmit, register, setValue, trigger } = useForm({
  //   mode: "onChange",
  //   // resolver: yupResolver(schema),
  // });

  // function handleChange(value: String) {
  //   console.log(value);
  //   setValue("contents", value === "<p><br><p>" ? "" : value);
  //   trigger("contents");
  // }
  return (
    <>
      <input onChange={props.onChangeContents} />
      <button onClick={props.onClickComment}>등록하기</button>
    </>
  );
}