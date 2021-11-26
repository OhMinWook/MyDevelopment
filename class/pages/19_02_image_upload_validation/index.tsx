import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  // 이미지 여러 개 넣을 것이기 때문에 배열을 초깃값으로 해준다.
  const [, setMyImages] = useState<String[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    // 한번에 여러 개 선택할 수도 있기 때문에
    // files이고 배열이다.
    // files 가 있을때 0번째로 가게 된다.
    const myFile = event.target.files?.[0];
    console.log(myFile);

    // 이미지 파일 검증
    if (!myFile?.size) {
      alert("파일이 없습니다.");
      return;
    }
    // 용량 제한
    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일용량이 너무 큽니다.");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다!!!");
      return;
    }

    // mutation 사용
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    // 실행시켜준다.
    console.log(result.data.uploadFile.url);
    // 배열로 실행을 시켜준다.
    setMyImages([result.data.uploadFile.url]);
  }

  return <input type="file" onChange={onChangeFile} />;
}
