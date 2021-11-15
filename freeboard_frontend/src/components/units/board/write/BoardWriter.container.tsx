import BoardWriterUI from "./BoardWriter.persenter";
import { useRouter } from "next/Router";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWriter.queries";
import { useMutation } from "@apollo/client";
import { IBoardWriteProps } from "./BoardWriter.types";

export default function BoardWriterContainerPage(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [number, setNumber] = useState("")
  // const [detail, setDetail] = useState("")
  // const [link, setLink] = useState("")

  const [nameerror, setNameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [titleerror, setTitleError] = useState("");
  const [contenterror, setContentError] = useState("");
  // const [numbererror, setNumberError] = useState("")
  // const [detailerror, setDetailError] = useState("")
  // const [linkerror, setLinkError] = useState("")

  function InputName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }
  function InputPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }
  function InputTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  }
  function InputContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
  }
  async function addBoard() {
    if (name === "") setNameError("이름을 입력해 주세요");
    if (password === "") setTitleError("비밀번호를 입력해 주세요");
    if (content === "") setContentError("내용을 입력해주세요");
    if (title === "") setTitleError("제목을 입력해 주세요");
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password,
            title,
            contents: content,
          },
        },
      });
      console.log(result);
      router.push(`/detail/${result.data.createBoard._id}`);
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function onClickUpdate() {
    const myUpdateBoardInput = {};

    if (title) myUpdateBoardInput.title = title;
    if (content) myUpdateBoardInput.contents = content;

    // if(!name) setNameError("이름을 입력해 주세요")
    // if(!password) setTitleError("비밀번호를 입력해 주세요")
    // if(!title) setTitleError("제목을 입력해 주세요")
    // if(!content) setContentError("내용을 입력해주세요")
    // if(name && password && title && content) {
    const result = await updateBoard({
      variables: {
        boardId: router.query.detailId,
        password,
        updateBoardInput: myUpdateBoardInput,
      },
    });
    console.log(result);
    router.push(`/detail/${router.query.detailId}`);
    // }
  }

  return (
    <BoardWriterUI
      nameerror={nameerror}
      passworderror={passworderror}
      titleerror={titleerror}
      contenterror={contenterror}
      InputTitle={InputTitle}
      InputName={InputName}
      InputPassword={InputPassword}
      InputContent={InputContent}
      addBoard={addBoard}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
