// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

// 동적으로 브라우저에서만 임폴트를 시킨다.
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  function handleChange(value: String) {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    // 컨텐츠라는 스테이트에 벨류가 들어가게 된다.
    // 값이 비었을 떄 빈칸, 값이 차있을 떄 벨류값이 들어가게 된다.
    setValue("contents", value === "<h3><br></h3>" ? "" : value);

    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }

  //   if (process.browser) {
  //     console.log("나는 브라우저이다.");
  //   } else {
  //     console.log("나는 프론트엔드 서버다");
  //   }

  return (
    <form>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <button>등록하기</button>
    </form>
  );
}
