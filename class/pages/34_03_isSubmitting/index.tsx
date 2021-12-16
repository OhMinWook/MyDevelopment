import { useState, ChangeEvent, useCallback } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const defaultInputs = {
  writer: "",
  title: "",
  password: "",
  contents: "",
};

export default function IsSubmittingPage() {
  //  리액트 훅 폼에서 이즈서브미팅 사용하는 방법
  //   const { formState } = useForm();
  //   formState.isSubmitting;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputs, setInputs] = useState(defaultInputs);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInput = useCallback(
    (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [id]: event.target.value,
      }));
    },
    []
  );

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
          },
        },
      });
      console.log(result);
      // router.push(result.data.createBoard._id) 다이나믹 라우팅
      setIsSubmitting(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeInput("writer")} />
      <br />
      비밀번호: <input type="password" onChange={onChangeInput("password")} />
      <br />
      제목: <input type="text" onChange={onChangeInput("title")} />
      <br />
      내용: <input type="text" onChange={onChangeInput("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
    </>
  );
}
