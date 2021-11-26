import { useMutation } from "@apollo/client";
import ImageUploadUI from "./UploadWriter.presenter";
import { useState, useRef } from "react";
import { CREATE_BOARD, UPLOAD_FILE } from "./UploadWriter.query";
import { useRouter } from "next/Router";

export default function ImageUpload() {
  const fileRef = useRef(null);
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFIle] = useMutation(UPLOAD_FILE);

  const [images, setImages] = useState([]);
  // useState를 스프레드연산자를 활용해 작성
  const [input, setInput] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  function onChangeInputs(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  const onClickSubmit = async () => {
    try {
      const submit = await createBoard({
        variables: {
          createBoardInput: {
            ...input,
            images,
          },
        },
      });
      console.log(submit);
      alert("등록이 성공했습니다.");
      router.push(`/uploadDetail/${submit.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeFile = async (event) => {
    const File = event.target.files?.[0];
    console.log(File);

    // 이미지 검증
    if (!File?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (File.size > 5 * 1024 * 1024) {
      alert("파일용량이 너무 큽니다.");
      return;
    }
    if (!File.type.includes("jpeg") && !File.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFIle({
      variables: {
        file: File,
      },
    });
    setImages([result.data.uploadFile.url]);
    console.log(result.data.uploadFile.url);
    // alert("등록이 완료되었습니다.");
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <ImageUploadUI
      input={input}
      images={images}
      fileRef={fileRef}
      onChangeInputs={onChangeInputs}
      onChangeFile={onChangeFile}
      onClickSubmit={onClickSubmit}
      onClickImage={onClickImage}
    />
  );
}
