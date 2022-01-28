import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_USEDITEM_QUESTION } from "./list.queries";
import ProductComment from "../write/write.container";
import * as L from "./list.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function ProductQuestionListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
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

  const onClickChange = () => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <L.Wrapper>
          <L.LeftWrapper>
            <div>
              <L.Image src="https://i.pinimg.com/564x/cb/5c/56/cb5c56e8a65649a9925b41548070eae1.jpg" />
              <L.Name>{props.el?.user.name}</L.Name>
            </div>
            <L.Content>{props.el?.contents}</L.Content>
          </L.LeftWrapper>
          <L.RightWrapper>
            <div>{getDate(props.el?.createdAt)}</div>
            <div>
              <L.Button onClick={onClickDelete(props.el._id)}>삭제</L.Button>
              <L.Button onClick={onClickChange}>수정</L.Button>
            </div>
          </L.RightWrapper>
        </L.Wrapper>
      )}
      {isEdit && (
        <ProductComment isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
