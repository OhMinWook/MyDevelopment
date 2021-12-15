import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  // 배열안에 파일들이 들어간다.
  const [file, setMyfile] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    // 스토리지에 안 올리고 내 컴퓨터에서 읽는다.
    const fileReader = new FileReader();
    // 주소를 만들어 준다.
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      // 미리보기용 가짜 주소
      setImageUrl(data.target?.result);
      setMyfile((prev) => [...prev, file]);
    };
  }

  async function onClickSubmit() {
    let myImageUrls = ["", "", ""];
    // 1. 파일 업로드
    if (file.length) {
      // 1. 각각 올리기 테스트
      // const start = performance.now();
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // await uploadFile({ variables: { file: file[0] } });
      // const end = performance.now();
      // console.log(end - start);

      // 2. 동시에 올리기 테스트
      const start = performance.now();
      const result = await Promise.all([
        // Promise.all([ ... ]) vs Promise.race([ ... ])
        uploadFile({ variables: { file: file[0] } }),
        uploadFile({ variables: { file: file[0] } }),
        uploadFile({ variables: { file: file[0] } }),
        uploadFile({ variables: { file: file[0] } }),
        uploadFile({ variables: { file: file[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);

      // result = [result1, result2, result3, result4, result5, .... result10]
      // restlt.map((el) => el.data.uploadFile.url) => [url1, url2, url3, url4, .... , url10]
      // myImageUrls = restlt.map((el) => el.data.uploadFile.url)
      myImageUrls = result.map((el) => el.data?.uploadFile.url);

      // const result1 = await uploadFile({
      //   variables: {
      //     file: file[0],
      //   },
      // });
      // myImageUrls[0] = result1.data?.uploadFile.url || "";

      // const result2 = await uploadFile({
      //   variables: {
      //     file: file[1],
      //   },
      // });
      // myImageUrls[1] = result2.data?.uploadFile.url || "";

      // const result3 = await uploadFile({
      //   variables: {
      //     file: file[2],
      //   },
      // });
      // myImageUrls[2] = result3.data?.uploadFile.url || "";
    }

    // 2. 업로드된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~~~",
          contents: "이미지 업로드 연습중이에요",
          // myimgeUrl 자체가 배열이므로 아래와 같이 얕은 복사를 해준다.
          // 또는 그냥 괄호 없이 myImageUrls만 써도 된다.
          images: [...myImageUrls],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>이미지 업로드</button>
    </>
  );
}
