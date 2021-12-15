import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setMyfile] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    // 스토리지에 안 올리고 내 컴퓨터에서 읽는다.
    const fileReader = new FileReader();
    // 주소를 만들어 준다.
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      // 미리보기용 가짜 주소
      setImageUrl(data.target?.result);
      setMyfile(file);
    };
  }

  async function onClickSubmit() {
    let myImageUrl = "";
    // 1. 파일 업로드
    if (file) {
      const result1 = await uploadFile({
        variables: {
          file,
        },
      });
      myImageUrl = result1.data?.uploadFile.url || "";
    }

    // 2. 업로드된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~~~",
          contents: "이미지 업로드 연습중이에요",
          images: [myImageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>이미지 업로드</button>
    </>
  );
}
