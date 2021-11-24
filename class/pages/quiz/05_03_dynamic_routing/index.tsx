import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createProduct(createBoardInput: $createBoardInput) {
      _id
      wirter
      password
      title
      contents
    }
  }
`;

export default function DynamicRoutingPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickBoard() {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });

      // 버튼을 눌렀을 때 정보가 잘 등록이 되는지 확인하기 위한 콘솔
      console.log(result);
      console.log(result.data.createBoard._id);
      router.push(`/quiz/05_04_dynamic_routed/${result.data.createBoard._id}`);
    } catch (error) {
      alert(`상품등록에 실패했습니다. ${error.message}`);
    }
  }

  return (
    <>
      작성자: <input onChange={onChangeWriter} type="text" />
      <br />
      비밀번호: <input onChange={onChangePassword} type="password" />
      <br />
      제목: <input onChange={onChangeTitle} type="text" />
      <br />
      상세내용: <input onChange={onChangeContents} type="text" />
      <br />
      <button onClick={onClickBoard}>상품 등록 화면</button>
    </>
  );
}
