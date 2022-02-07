import { ApolloQueryResult } from "@apollo/client";
import {
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IPropsSearchPage {
  refetch: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  refetchBoardsCount: (
    variables?: Partial<IQueryFetchUseditemArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;

  onChangeSearch: (data: any) => void;
}
