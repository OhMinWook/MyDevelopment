import React, { ChangeEvent } from "react";

export interface IHome {
  search: string | undefined;
}

export interface IHomeUIProps {
  best: any;
  onChangeSearch: (value: string) => void;
  refetch: any;
  onLoadMore: (page: number) => void;
  onError: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
