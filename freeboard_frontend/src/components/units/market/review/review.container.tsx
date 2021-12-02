import { useMutation } from "@apollo/client";
import { useRouter } from "next/Router";
import { useState } from "react";
import ReviewUI from "./review.presenter";
import { CREATE_BOARD } from "./review.queries";

export default function Review() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [error, setError] = useState({
    writererror: "",
    passworderror: "",
    titleerror: "",
    contenterror: "",
  });

  const [fileUrl, setFileUrl] = useState(["", "", ""]);

  function onChangeInputs(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function onChangeFIleUrl() {}

  function onChangeError(event) {
    setError({
      ...error,
      [event.target.name]: event.target.value,
    });
    if (inputs.writer === "") setError("작성자를 입력해 주세요");
    if (inputs.password === "") setError("비밀번호를 입력해 주세요");
    if (inputs.title === "") setError("제목을 입력해 주세요");
    if (inputs.contents === "") setError("내용을 입력해 주세요");
  }

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            fileUrl,
          },
        },
      });
      console.log(result);
      alert("후기가 등록이 되었습니다.");
      router.push(`/reviewdetail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ReviewUI onChangeInputs={onChangeInputs} onClickSubmit={onClickSubmit} />
  );
}
