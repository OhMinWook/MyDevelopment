import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import ProductQuestionUI from "./list.present";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./list.queries";

export default function ProductQuestion(props) {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  return (
    <ProductQuestionUI
      data={data}
      onClickDelete={onClickDelete}
      onClickDeleteModal={onClickDeleteModal}
      isOpenDeleteModal={isOpenDeleteModal}
    />
  );
}
