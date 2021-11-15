import * as C from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <C.Html>
      <C.Wrapper>
        <C.Header>
          <C.Title>Comment Board</C.Title>
        </C.Header>
        <>
          <C.TopBody>
            <C.Input
              type="text"
              placeholder="작성자"
              onChange={props.onChangeMyWrite}
            />
            <C.Input
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangeMyPassword}
            />
            <C.Images>
              <img src="/images/Star.png" />
              <img src="/images/Star.png" />
              <img src="/images/Star.png" />
              <img src="/images/Star.png" />
              <img src="/images/Star.png" />
            </C.Images>
          </C.TopBody>
          <div>
            <C.Content
              type="text"
              maxLength={100}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
                        무단 경고, 불법 정보 유포시 모니터링 후 
                        삭제될 수 있습니다."
              onChange={props.onChangeMyContent}
            />
            <C.BotBody>
              <C.Count>0 / 100</C.Count>
              <C.Singup onClick={props.onClickSubmit}>등록하기</C.Singup>
            </C.BotBody>
          </div>
        </>
      </C.Wrapper>
    </C.Html>
  );
}
