import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export interface IReviewListPropsUI {
  refetch: (
    variables?: Partial<IQueryFetchUseditemArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  refetchBoardsCount: (
    variables?: Partial<IQueryFetchUseditemArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;

  onChangeSearch: (value: any) => void;
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToReviewDetail: (event: any) => void;
  keyword: string;
}

export interface IPropsTextToken {
  isMatched: boolean;
}
