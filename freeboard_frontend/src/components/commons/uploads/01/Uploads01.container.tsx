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
  async function onChangeFile(event) {
    const file = checkValidationImage(event.target.file?.[0]);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(props.file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      props.setImageUrl(data.target?.result);
      props.setFile(props.file);
    };

    try {
      let myImageUrl = [];
      if (props.file) {
        const result = await uploadfile({
          variables: {
            file: props.file,
          },
        });
        myImageUrl = result.data?.uploadFile.url || "";
        props.onChangeFilrUrls(result.data.uploadfile.url, props.index);
      }
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

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
