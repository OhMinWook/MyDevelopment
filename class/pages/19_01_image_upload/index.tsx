import { gql, useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    // 한번에 여러 개 선택할 수도 있기 때문에
    // files이고 배열이다.
    // files 가 있을때 0번째로 가게 된다.
    const myFile = event.target.files?.[0];
    console.log(myFile);

    // mutation 사용
    // 스토리지에 저장하고 url을 반환하는 역할을 하는 곳
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
  }

  return <input type="file" onChange={onChangeFile} />;
}
