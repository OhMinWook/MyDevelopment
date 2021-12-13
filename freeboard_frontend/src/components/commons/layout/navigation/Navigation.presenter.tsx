import { Navigation, Button } from "./Navigation.styles";
import * as React from "react";

export default function NavigationUI(props) {
  return (
    <Navigation>
      <Button onClick={props.onClickProductSubmit}>ProductSubmit</Button>
      <Button>베스트</Button>
      <Button onClick={props.onClickMypage}>마이페이지</Button>
      <Button onClick={props.onClickReview}>상품 후기</Button>
    </Navigation>
  );
}
