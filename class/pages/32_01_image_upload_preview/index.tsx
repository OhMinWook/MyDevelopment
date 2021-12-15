import { useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    // 스토리지에 안 올리고 내 컴퓨터에서 읽는다.
    const fileReader = new FileReader();
    // 주소를 만들어 준다.
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
    };
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </>
  );
}
