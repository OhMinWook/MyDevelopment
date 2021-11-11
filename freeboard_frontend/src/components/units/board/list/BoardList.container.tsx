import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from 'next/Router'
import { useQuery } from "@apollo/client";



export default function BoardLsitContainerPage() {

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARDS)
    

    function onClickBoarderNew() {

        router.push(`/board`)
    }

    function onClickBoardDetail() {
        router.push(`/detail/${router.query.detailId}`)
    }

    return (
        <BoardListUI 
            data={data}
            onClickBoarderNew={onClickBoarderNew}
            onClickBoardDetail={onClickBoardDetail}
        />
    )
}