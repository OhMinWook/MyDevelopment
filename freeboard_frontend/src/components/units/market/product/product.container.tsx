import ProductUI from "./product.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./product.queries";
import { useRef, useState } from "react";

// 타입스크립트
interface FormValues {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  images: string[];
}

export default function Product() {
  const fileRef = useRef(null);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [images, setImages] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event) {
    const myFile = event.target.files?.[0];
    console.log(myFile);
    const value = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(value.data.upload.url);
    setImages([value.data.uploadFile.url]);
  }

  function onChangeFileUrls(fileUrl, index) {
    const newFileUrl = [...fileUrl];
    newFileUrl[index] = fileUrl;
    setImages(newFileUrl);
  }

  function onClick(data: FormValues) {
    // console.log(data);
    const result = async () => {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: [data.tags],
            images: [data.images],
          },
        },
      });
    };
  }
  return (
    <ProductUI
      onClick={onClick}
      onChangeFileUrl={onChangeFileUrls}
      onChangeFile={onChangeFile}
    />
  );
}
