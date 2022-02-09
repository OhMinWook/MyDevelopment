import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IEditPropsUI {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => Promise<void>;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}
