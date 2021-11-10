import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client";

export default function BoardLsitContainerPage() {

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARDS)
    

    function onClickMoveToBoarderNew() {

        router.push(`/Submit/board`)
    }

    function onClickMoveToBoardDetail() {
        router.push(`/Submit/detail/${router.query.detailId}`)
    }

    return (
        <BoardListUI 
            data={data}
            onClickMoveToBoarderNew={onClickMoveToBoarderNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        />
    )
}