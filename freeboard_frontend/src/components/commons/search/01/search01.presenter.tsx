import { Searchbar, SearchbarInput } from "./search01.styles";

export default function SearchPageUI(props) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
