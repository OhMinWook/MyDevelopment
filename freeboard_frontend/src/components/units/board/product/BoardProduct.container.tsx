import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseapp } from "../../../../../pages/_app";
import BoardProductUI from "./BoardProduct.presenter";

export default function BoardProduct() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  async function onClickSubmit() {
    getFirestore(firebaseapp);

    const product = collection(getFirestore(firebaseapp), "product");
    await addDoc(product, {
      writer: writer,
      title: title,
      contents: contents,
    });
  }

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  return (
    <BoardProductUI
      addDoc={addDoc}
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
    />
  );
}
