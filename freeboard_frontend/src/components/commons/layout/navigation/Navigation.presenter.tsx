import { Navigation, Button, Input, Search, Icon } from "./Navigation.styles";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function NavigationUI(props) {
  return (
    <Navigation>
      <Button onClick={props.onClickProductSubmit}>ProductSubmit</Button>
      <Button>베스트</Button>
      <Button onClick={props.onClickMypage}>마이페이지</Button>
      <Button onClick={props.onClickReview}>상품 후기</Button>
      <div>
        <Input placeholder="검색어를 입력해주세요" type="text" />
        <Icon>
          <SearchIcon />
        </Icon>
      </div>
    </Navigation>
  );
}
