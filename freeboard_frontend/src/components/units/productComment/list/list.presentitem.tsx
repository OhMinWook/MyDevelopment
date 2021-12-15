import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_USEDITEM_QUESTION } from "./list.queries";

export default function ProductQuestionListItem(props) {
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  const onClickDelete = (id) => async () => {
    const result = await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: id,
      },
      update(cache, { data }) {
        const deletedId = data?.deleteUseditemQuestion;
        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev, { readField }) => {
              const newFetchQuestions = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...newFetchQuestions];
            },
          },
        });
      },
    });
    console.log(result);
  };
  return (
    <>
      <div>
        <div>{props.el?.contents}</div>
        {/* <button onClick={onClickUpdate}>수정하기</button> */}
        <button onClick={onClickDelete(props.el._id)}>삭제하기</button>
      </div>
    </>
  );
}
