import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/Router";
import { useEffect, useState, useCallback, ChangeEvent } from "react";
import ReviewUI from "./review.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./review.queries";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD } from "../reviewdetail/detail.queries";
export default function Review(props) {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [writer, setWriter] = useState<string>("");

  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  const onChangeInputs = useCallback(
    (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [id]: event.target.value,
      }));
    },
    []
  );
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            ...inputs,
            images: imageUrls,
            password,
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
  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...imageUrls];
    newFileUrls[index] = fileUrl;
    setImageUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchBoard.imageUrls?.length) {
      setImageUrls([...props.data?.fetchBoard.images]);
    }
  });

  const onClickUpdate = async () => {
    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          updateBoardInput: {
            ...inputs,
            images: imageUrls,
          },
          password,
        },
      });
      console.log(result);
      router.push(`/reviewdetail/${router.query.boardId}`);
      alert("수정을 완료하였습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ReviewUI
      data={data}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      onChangeFileUrls={onChangeFileUrls}
      imageUrls={imageUrls}
      isSubmitting={isSubmitting}
      onClickUpdate={onClickUpdate}
      onChangePassword={onChangePassword}
      onChangeWriter={onChangeWriter}
    />
  );
}
