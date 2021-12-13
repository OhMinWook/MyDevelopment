import InfiniteScroll from "react-infinite-scroller";
import ReviewCommnetListUIItem from "./list.presenterItem";

export default function ReviewCommentListUI(props) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <ReviewCommnetListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
