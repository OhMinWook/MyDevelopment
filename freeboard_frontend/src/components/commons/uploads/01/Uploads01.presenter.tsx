import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";

export default function UploadUI(props) {
  return (
    <>
      {/* 이미지 첨부하는 태그, 클릭시 이미지를 올릴 수 있다. */}
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={
            props.fileUrl
              ? `https://storage.googleapis.com/${props.fileUrl}`
              : `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      {/* 프리뷰 형식으로 업로드 사진을 미리보기하게 해준다. */}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChageFile}
      />
    </>
  );
}
