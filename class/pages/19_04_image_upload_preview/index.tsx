import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  // 이미지 여러 개 넣을 것이기 때문에 배열을 초깃값으로 해준다.
  const [myImages, setMyImages] = useState<String[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    // 한번에 여러 개 선택할 수도 있기 때문에
    // files이고 배열이다.
    // files 가 있을때 0번째로 가게 된다.
    const myFile = event.target.files?.[0];
    console.log(myFile);

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

  function onClickImage() {
    fileRef.current?.click();
  }

  return (
    <>
      {/* 이걸 클릭시 */}
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <img src={`https://storage.googleapis.com/${myImages[0]}`} />
      {/* 아래에 있는 이것이 실행된다. */}
      {/* 위를 클릭했을 때 자동으로 클릭하도록 해줘야 한다. ref의 역할 */}
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </>
  );
}
