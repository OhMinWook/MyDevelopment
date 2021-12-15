import ProductQuestionListItem from "./list.presentitem";

export default function ProductQuestionUI(props) {
  if (!props.data) return <div />;
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ProductQuestionListItem key={el._id} el={el} />
      ))}
    </>
  );
}
