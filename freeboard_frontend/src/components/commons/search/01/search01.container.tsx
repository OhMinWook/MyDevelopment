import _ from "lodash";
import SearchPageUI from "./search01.presenter";
import { IPropsSearchPage } from "./search01.types";

export default function SearchPage(props: IPropsSearchPage) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    {
      props.refetchBoardsCount && props.refetchBoardsCount({ search: data });
    }
    props.onChangeSearch(data);
  }, 200);

  function onChangeSearchbar(event: any) {
    getDebounce(event.target.value);
  }

  return <SearchPageUI onChangeSearchbar={onChangeSearchbar} />;
}
