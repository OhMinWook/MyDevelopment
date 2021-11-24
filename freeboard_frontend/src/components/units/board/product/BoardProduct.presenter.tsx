import * as W from "./BoardProduct.styles";

export default function BoardProductUI() {
  return (
    <>
      <W.Wrapper>
        작성자: <W.Input type="text" />
        제목: <W.Input type="text" />
        내용: <W.Input type="text" />
      </W.Wrapper>
    </>
  );
}
