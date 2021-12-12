import ProductUI from "./product.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./product.queries";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/Router";
import { FETCH_USED_ITEM } from "../pddetail/pddetail.queries";

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
  const router = useRouter();
  const fileRef = useRef(null);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [images, setImages] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  async function onChangeFile(event) {
    const myFile = event.target.files?.[0];
    console.log(myFile);
    if (!myFile?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 큽니다.");
      return;
    }
    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("특정 확장자만 가능합니다.");
      return;
    }
    const value = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    setImages([value.data.uploadFile.url]);
    console.log(value.data.uploadFile.url);
  }

  const onClickImages = () => {
    fileRef.current?.click();
  };

  // function onChangeFileUrls(fileUrl, index) {
  //   const newFileUrl = [...fileUrl];
  //   newFileUrl[index] = fileUrl;
  //   setImages(newFileUrl);
  // }

  async function onClick(data: FormValues) {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: [data.tags],
          images: images,
        },
      },
    });
    console.log(result);
    router.push(`/pddetail/${result.data.createUseditem._id}`);
  }

  // 수정하기
  async function onClickEdit(data: FormValues) {
    const edit = await updateUseditem({
      variables: {
        updateUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: [data.tags],
          images: images,
        },
        useditemId: String(router.query.useditemId),
      },
    });
    console.log(edit);
    router.push(`/pddetail/${router.query.useditemId}`);
    alert("상품 수정이 완료되었습니다.");
  }
  useEffect(() => {
    const Previmages = data?.fetchUseditem.images;
    Previmages && setImages([...Previmages]);
  }, [data]);

  return (
    <ProductUI
      onClick={onClick}
      onChangeFile={onChangeFile}
      images={images}
      onClickImages={onClickImages}
      fileRef={fileRef}
      data={data}
      onClickEdit={onClickEdit}
    />
  );
}