import {
  Wrapper,
  Input,
  Button,
  ImageInput,
  ImageClick,
} from "./UploadWriter.styles";

export default function ImageUploadUI(props) {
  return (
    <>
      <Wrapper>
        작성자:
        <Input type="text" onChange={props.onChangeInputs} name="writer" />
        비밀번호:
        <Input
          type="password"
          onChange={props.onChangeInputs}
          name="password"
        />
        제목: <Input type="text" onChange={props.onChangeInputs} name="title" />
        내용:
        <Input type="text" onChange={props.onChangeInputs} name="contents" />
        <ImageClick onClick={props.onClickImage}></ImageClick>
        <img src={`https://storage.googleapis.com/${props.images[0]}`} />
        <ImageInput
          type="file"
          onChange={props.onChangeFile}
          ref={props.fileRef}
        />
        <Button onClick={props.onClickSubmit}>등록하기</Button>
      </Wrapper>
    </>
  );
}
