import { useQuery } from "@apollo/client";
import { useState } from "react";
import SearchPageUI from "./search01.presenter";
import { FETCH_BOARDS } from "./search01.queries";

export default function SearchPage() {
  //   const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);

  // 검색 입력 함수
  function onChangeSearch(event) {
    getDebounce(event.target.value);
  }

  // 입력한 search 키워드를 fetchBoard에 요청하기!!
  //   function onClickSearch() {
  //     refetch: ({ search: search, page: 1 });
  //     setKeyword(search);
  //   }

  // 디바운싱(자동 검색)
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 500);

  // 검색 페이지 넘기기
  function onClickPage(event) {
    if (event.target)
      refetch({ search: keyword, page: Number(event.target.id) });
  }

  return (
    <SearchPageUI
      data={data}
      keyword={keyword}
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
    />
  );
}
