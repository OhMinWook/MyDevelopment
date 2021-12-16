import { gql, useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: "61b81546717be5002baa6f10",
      },
    }
  );

  const onClickOptimisticUI = () => {
    // 여기서 '좋아요' 증가시시는 뮤테이션(api요청)
    likeBoard({
      variables: {
        boardId: "61b81546717be5002baa6f10",
      },
      optimisticResponse: {
        // 위에서 받은 패치보드의 data
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      // 업데이트된 likeboard data
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61b81546717be5002baa6f10" },
          data: {
            fetchBoard: {
              // 아폴로 룰(id 적는 것, 반드시 적어줘야 한다.)
              _id: "61b81546717be5002baa6f10",
              _typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>좋아요 개수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기!!</button>
    </>
  );
}
