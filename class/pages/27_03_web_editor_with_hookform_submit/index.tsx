// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

// 동적으로 브라우저에서만 임폴트를 시킨다.
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface FormValues {
  writer: string;
  title: string;
  password: string;
  contents: string;
}

export default function WebEditorReactHookFormSubmitPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
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

  // writer, password, title을 괄호안에 핸들서브밋이 넣어줌
  async function onClickSubmit(data: FormValues) {
    // createBoard 뮤테이션 요청
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: data.title,
            password: data.password,
            contents: data.contents,
          },
        },
      });
      router.push(`27_04_web_editor_detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
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
