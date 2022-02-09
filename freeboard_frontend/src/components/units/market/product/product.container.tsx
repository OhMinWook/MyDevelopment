import ProductUI from "./product.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./product.queries";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/Router";
import { FETCH_USED_ITEM } from "../pddetail/pddetail.queries";
import { FormValues } from "./product.types";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function Product() {
  const router = useRouter();
  const fileRef = useRef<>(null);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  const [hashArr, setHashArr] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [zipcode, setZipcode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setaddressDetail] = useState<string>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [isopen, setIsopen] = useState<boolean>(false);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    if (!myFile?.size) {
      alert("해당 파일이 없습니다.");
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
  }

  const onKeyUp = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const deleteHash = (index: number) => () => {
    hashArr.splice(index, 1);
    setHashArr([...hashArr]);
  };

  const onClickImages = () => {
    fileRef.current?.click();
  };
  const onClickAddressSearch = () => {
    setIsopen(true);
  };

  const onHandleOk = () => {
    setIsopen(false);
  };

  const onHandleCancel = () => {
    setIsopen(false);
  };

  const onCompleteAddressSearch = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsopen(false);
  };

  const onChangeAddressDetil = (event: ChangeEvent<HTMLInputElement>) => {
    setaddressDetail(event.target.value);
  };

  async function onClickSubmit(data: FormValues) {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: hashArr,
          images,
          useditemAddress: {
            zipcode,
            address,
            addressDetail,
          },
        },
      },
    });
    console.log(result);
    router.push(`/pddetail/${result.data?.createUseditem._id}`);
  }

  async function onClickEdit(data: FormValues) {
    const edit = await updateUseditem({
      variables: {
        updateUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: hashArr,
          images,
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
      onClickSubmit={onClickSubmit}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeAddressDetil={onChangeAddressDetil}
      onKeyUp={onKeyUp}
      onClickImages={onClickImages}
      onClickEdit={onClickEdit}
      onClickAddressSearch={onClickAddressSearch}
      onHandleOk={onHandleOk}
      onHandleCancel={onHandleCancel}
      images={images}
      isopen={isopen}
      data={data}
      zipcode={zipcode}
      address={address}
      deleteHash={deleteHash}
      hashArr={hashArr}
    />
  );
}
