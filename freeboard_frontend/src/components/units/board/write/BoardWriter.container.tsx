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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myaddress, setMyAddress] = useState("");
  const [myaddressdetail, setMyAddressDetail] = useState("");
  const [myzonecode, setMyZonecode] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeurl, setYoutubeUrl] = useState("");
  const [nameerror, setNameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [titleerror, setTitleError] = useState("");
  const [contenterror, setContentError] = useState("");
  const [fileUrl, setFileUrl] = useState(["", "", ""]);

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
  function InputYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }
  function InputAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setMyAddressDetail(event.target.value);
  }

  function onChangeFilrUrls(fileUrl, index) {
    const newFileUrl = [...fileUrl];
    newFileUrl[index] = fileUrl;
    setFileUrl(newFileUrl);
  }

  const onToggleModal = () => {
    setIsModalVisible(true);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible(false);
  };

  async function addBoard() {
    if (name === "") setNameError("????????? ????????? ?????????");
    if (password === "") setTitleError("??????????????? ????????? ?????????");
    if (content === "") setContentError("????????? ??????????????????");
    if (title === "") setTitleError("????????? ????????? ?????????");
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password,
            title,
            contents: content,
            youtubeUrl: youtubeurl,
            boardAddress: {
              zipcode: myzonecode,
              address: myaddress,
              addressDetail: myaddressdetail,
            },
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
    if (youtubeurl) myUpdateBoardInput.youtubeUrl = youtubeurl;

    if (myzonecode || myaddress || myaddressdetail) {
      myUpdateBoardInput.boardAddress = {};
      if (myzonecode) myUpdateBoardInput.boardAddress.zipcode = myzonecode;
      if (myaddress) myUpdateBoardInput.boardAddress.address = myaddress;
      if (myaddressdetail)
        myUpdateBoardInput.boardAddress.addressDetail = myaddressdetail;
    }

    // if(!name) setNameError("????????? ????????? ?????????")
    // if(!password) setTitleError("??????????????? ????????? ?????????")
    // if(!title) setTitleError("????????? ????????? ?????????")
    // if(!content) setContentError("????????? ??????????????????")
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
      InputYoutubeUrl={InputYoutubeUrl}
      InputAddressDetail={InputAddressDetail}
      addBoard={addBoard}
      onClickUpdate={onClickUpdate}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      isModalVisible={isModalVisible}
      myaddress={myaddress}
      myaddressdetail={myaddressdetail}
      myzonecode={myzonecode}
      isEdit={props.isEdit}
      onChangeFilrUrls={onChangeFilrUrls}
      fileUrl={fileUrl}
      // data={props.data}
    />
  );
}
