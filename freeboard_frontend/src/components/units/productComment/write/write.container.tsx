import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import ProductCommentUI from "./write.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./write.queries";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "../list/list.queries";
import { useState } from "react";
import { Modal } from "antd";

export default function ProductComment(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const onClickComment = async () => {
    await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: router.query.useditemId,
      },
      update(cahce, { data }) {
        cahce.modify({
          fields: {
            fetchUseditemQuestions: (prev) => {
              return [data?.createUseditemQuestion, ...prev];
            },
          },
        });
      },
    });
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: contents || props.el.contents,
          },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMb_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      console.log(result);
      props.setIsEdit?.(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <ProductCommentUI
      onClickUpdate={onClickUpdate}
      onClickComment={onClickComment}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
