import { Navigation, Button, Input, Search, Icon } from "./Navigation.styles";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function NavigationUI() {
  return (
    <Navigation>
      <Button>신상품</Button>
      <Button>베스트</Button>
      <Button>알뜰쇼핑</Button>
      <Button>특가/혜택</Button>
      <div>
        <Input placeholder="검색어를 입력해주세요" type="text" />
        <Icon>
          <SearchIcon />
        </Icon>
      </div>
    </Navigation>
  );
}
