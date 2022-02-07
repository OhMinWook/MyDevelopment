import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IReviewProps {
  data: any;
}

export interface IReviewUIProps {
  imageUrls: string[];
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputs: () => (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  isSubmitting: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  password: string;
  defaultValue?: string | number | ReadonlyArray<string> | undefined;
}
