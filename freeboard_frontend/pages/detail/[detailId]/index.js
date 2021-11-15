import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/board/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/board/boardComment/list/BoardCommentList.container";

export default function BoardDetail() {
  return (
    <>
      <BoardDetailContainer />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
