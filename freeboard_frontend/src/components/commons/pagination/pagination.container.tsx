import { useState, MouseEvent } from "react";
import Paginations01UI from "./pagination.presenter";

export default function Paginations01(props) {
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (!event.target) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  }

  function onClickPrevPage() {
    if (props.startpage <= 1) return;
    setActivedPage(props.startpage - 10);
    props.setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (props.startpage + 10 > lastPage) return;
    setActivedPage(props.startpage + 10);
    props.setStartPage((prev) => prev + 10);
  }

  return (
    <Paginations01UI
      startpage={props.startpage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
