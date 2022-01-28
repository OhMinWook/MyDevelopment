import { ChangeEvent, MouseEventHandler, MutableRefObject } from "react";

export interface FormValues {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  images: string[];
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface IProductPropsUI {
  hashArr: string[];
  images: string[];
  isopen: any;
  data?: any;
  zipcode: string;
  address: string;
  fileRef: MutableRefObject<null>;
  deleteHash: (index: number) => void;
  onClickSubmit: (data: FormValues) => void;
  onHandleOk: () => void;
  onHandleCancel: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onKeyUp: (event: any) => void;
  onClickAddressSearch: () => void;
  onChangeAddressDetil: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImages: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: (data: FormValues) => void;
}
