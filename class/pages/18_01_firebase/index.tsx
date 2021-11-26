import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseapp } from "../_app";

export default function FirebasePage() {
  async function onClickSubmit() {
    getFirestore(firebaseapp);

    //     const board = collection(getFirestore(firebaseapp), "board");
    //     await addDoc(board, {
    //       writer: "철수",
    //       title: "제목입니다",
    //       contents: "내용입니다",
    //     });
    //   }
    const product = collection(getFirestore(firebaseapp), "product");
    await addDoc(product, {
      writer: "영희",
      title: "마우스입니다.",
      contents: "좋은 마우스입니다",
    });
  }

  async function onClickFetch() {
    const board = collection(getFirestore(firebaseapp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }

  return (
    <>
      <div>파이어베이스 연습페이지 입니다</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
