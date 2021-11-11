import BoardWrite from "../../../../src/components/units/board/write4/BoardWriter.container";
import { gql, useQuery } from '@apollo/client'
import router, { useRouter } from "next/router";

const FETCH_BOARD = gql`
    query fetchBoards($number : Int) {
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
        
    }
`

export default function BoardsEditPage() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables : {
            number: Number(router.query.myNumber)
        }
    })

    return (
        <BoardWrite 
        data={data}
        isEdit={true}/>
    )
}