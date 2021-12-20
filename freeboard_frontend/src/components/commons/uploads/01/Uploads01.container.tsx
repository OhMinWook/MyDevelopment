import { useMutation } from "@apollo/client";
import { useRef } from "react";
import UploadUI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { checkValidationImage } from "./Uploads01.validation";
import { Modal } from "antd";

export default function UploadPage(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadfile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current?.click();
  }

  // 이미지를 등록하는 함수

  const onChangeFile = async (event) => {
    const file = checkValidationImage(event.target.files?.[0]);
    try {
      const result = await uploadfile({
        variables: {
          file,
        },
      });
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UploadUI
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
