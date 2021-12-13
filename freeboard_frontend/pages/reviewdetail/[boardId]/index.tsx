import ReviewDetail from "../../../src/components/units/market/reviewdetail/detail.container";
import ReviewCommentList from "../../../src/components/units/marketComment/list/list.container";
import ReviewCommnet from "../../../src/components/units/marketComment/write/write.container";

export default function ReviewDetailPage() {
  return (
    <>
      <ReviewDetail />;
      <ReviewCommnet />
      <ReviewCommentList />
    </>
  );
}
