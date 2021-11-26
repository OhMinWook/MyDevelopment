import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseapp } from "../../../../../pages/_app";
import { Wrapper } from "./BoardProduct.styles";

export default function FirebaseProduct() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // 조회한 값들이 배열로 저장되어져야 하므로 초깃값을 빈 배열로 준다.
  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);

  // 등록 파이어 베이스
  const onClickSubmit = async () => {
    const product = collection(getFirestore(firebaseapp), "product");
    await addDoc(product, {
      writer: writer,
      title: title,
      contents: contents,
    });
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContents(event.target.value);
  };

  // 조회 파이어 베이스
  const onClickFetchProduct = async () => {
    const fetchproduct = collection(getFirestore(firebaseapp), "product");
    const result = await getDocs(fetchproduct);
    // 데이터베이스에 있는 데이터와 아이디를 조회
    const products = result.docs.map((el) => el.data());
    const productId = result.docs.map((el) => el.id);
    setData(products);
    setDataId(productId);
  };

  const onClickDelete = async (event) => {
    console.log(event.target.id);
    const remove = doc(getFirestore(firebaseapp), "product", event.target.id);
    deleteDoc(remove);
  };

  return (
    <>
      writer : <input type="text" onChange={onChangeWriter} />
      title : <input type="text" onChange={onChangeTitle} />
      contents : <input type="text" onChange={onChangeContent} />
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetchProduct}>조회하기</button>
      <br />
      <br />
      <br />
      {data.map((el, index) => (
        <Wrapper key={dataId[index]}>
          <div>{el.writer}</div>
          <div>{el.title}</div>
          <div>{el.contents}</div>
          <button onClick={onClickDelete} id={dataId[index]}>
            삭제하기
          </button>
        </Wrapper>
      ))}
    </>
  );
}
