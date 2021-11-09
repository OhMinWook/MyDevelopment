import { Body, Html, Searchs, Title, Wrapper,
         InputTitle, SearchButton, BoardListWrap, 
         BoardListType, BoardWriter, BoardNumber, BoardDate} from "../../../styles/BoardList";
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`  
export default function BoardList() {
    
    const {data} = useQuery(FETCH_BOARDS)
    const router = useRouter()
    
    async function onClickDelete(event) {
        try{
            await deleteBoardList({
                variables : {
                    number : Number(event.target.id)
                },
                refreshQueries: [{ query :FETCH_BOARDS}]
            })
        } catch(error) {
            alert(error.message)
        }
    }

    return (
    <Html>
        <Wrapper>
            <Title>베스트 게시글</Title>
            <Body>
                <Searchs>
                    <InputTitle type="text" placeholder="제목을 입력하세요"/>
                    <input type="text" placeholder="YYYY.MM.DD- YYYY.MM.DD"/>
                    <SearchButton>검색하기</SearchButton>
                </Searchs>
                <ul>
                    <li>
                        <div>번호</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일</div>
                    </li>
                {data?.fetchBoards.map((el, index) => (
                    <li key={el.id}>
                        <div>{index + 1}</div>
                        <div>{el.title}</div>
                        <div>{el.writer}</div>
                        <div>{(el.createdAt).slice(0,10)}</div>
                    </li>    
                ))}
                </ul>
            </Body>
            <button onClick={onClickDelete}></button>
        </Wrapper>
    </Html>
    )
}