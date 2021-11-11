import { IsEdit } from '../detail/Boarddetail.types'
import * as R from './BoardList.styles'
import { IBoardListProps } from './BoardList.types'


export default function BoardListUI(props:IBoardListProps) {

    const Time = new Date()
    console.log(Time.getFullYear())
    console.log(Time.getMonth() + 1)  
    console.log(Time.getDate())

    return (
        <R.Wrapper>
            <R.TableTop />
            <R.Row>
            <R.ColumnHeaderBasic>번호</R.ColumnHeaderBasic>
            <R.ColumnHeaderTitle>제목</R.ColumnHeaderTitle>
            <R.ColumnHeaderBasic>작성자</R.ColumnHeaderBasic>
            <R.ColumnHeaderBasic>날짜</R.ColumnHeaderBasic>
            </R.Row>
            {props.data?.fetchBoards.map((el:any, index:any) => (
            <R.Row key={el._id}>
                <R.ColumnBasic>{index + 1}</R.ColumnBasic>
                <R.ColumnTitle id={el._id} onClick={props.onClickBoardDetail}>{el.title}</R.ColumnTitle>
                <R.ColumnBasic>{el.writer}</R.ColumnBasic>
                <R.ColumnBasic>{el.createdAt}</R.ColumnBasic>
            </R.Row>
            ))}
            <R.TableBottom />
            <R.Footer>
            <R.Button onClick={props.onClickBoarderNew}>
                <img/>
                게시물 등록하기
            </R.Button>
            </R.Footer>
      </R.Wrapper>
    )
}