import _ from "lodash";
import SearchPageUI from "./search01.presenter";

export default function SearchPage(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.refetchBoardCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <SearchPageUI onChangeSearchbar={onChangeSearchbar} />;
}
