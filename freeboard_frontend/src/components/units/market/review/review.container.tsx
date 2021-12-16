import { useMutation } from "@apollo/client";
import { useRouter } from "next/Router";
import { useEffect, useState, useCallback, ChangeEvent } from "react";
import ReviewUI from "./review.presenter";
import { CREATE_BOARD } from "./review.queries";
import { Modal } from "antd";

export default function Review(props) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  // const [error, setError] = useState({
  //   writererror: "",
  //   passworderror: "",
  //   titleerror: "",
  //   contenterror: "",
  // });

  const [imageUrls, setImageUrl] = useState(["", "", ""]);
  const [file, setFile] = useState();

  const onChangeInputs = useCallback(
    (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [id]: event.target.value,
      }));
    },
    []
  );

  function onChangeFIleUrl(fileUrl: string, index: number) {
    const newFileUrls = [...imageUrls];
    newFileUrls[index] = fileUrl;
    setImageUrl(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setImageUrl([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  // function onChangeError(event) {
  //   setError({
  //     ...error,
  //     [event.target.name]: event.target.value,
  //   });
  //   if (inputs.writer === "") setError("작성자를 입력해 주세요");
  //   if (inputs.password === "") setError("비밀번호를 입력해 주세요");
  //   if (inputs.title === "") setError("제목을 입력해 주세요");
  //   if (inputs.contents === "") setError("내용을 입력해 주세요");
  // }

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            images: imageUrls,
          },
        },
      });
      console.log(result);
      alert("후기가 등록이 되었습니다.");
      router.push(`/reviewdetail/${result.data?.createBoard._id}`);
      setIsSubmitting(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <ReviewUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      // onChangeError={onChangeError}
      onChangeFIleUrl={onChangeFIleUrl}
      onChangeFile={props.onChangeFile}
      imageUrls={imageUrls}
      isSubmitting={isSubmitting}
    />
  );
}
