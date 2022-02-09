import { ChangeEvent } from "react";
import { IQuery, IUserPoint } from "../../../../commons/types/generated/types";

export interface IPropsMyPageUI {
  onHandleOk: () => void;
  onHandleCancle: () => void;
  onCompleteAddressSearch: (data: any) => void;
  userLoggedIn?: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  coin: boolean;
  onChangePoint: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPayment: () => void;
  basketItems: string[];
  onClickDelete: (id: string) => () => void;
  onClickAddressSearch: () => void;
  address: string;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  userPoint?: IUserPoint | undefined;
  useditemsIPicked?: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
  isopen: boolean;
  addressDetail: string;
  onClickEdit: () => void;
}
