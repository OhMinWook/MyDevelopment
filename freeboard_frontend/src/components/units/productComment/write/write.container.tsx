import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import ProductCommentUI from "./write.presenter";
import { CREATE_USEDITEM_QUESTION } from "./write.queries";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "../list/list.queries";
import { useState } from "react";

export default function ProductComment() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  // async function onClickComment(data) {
  //   try {
  //     const result = await createUseditemQuestion({
  //       variables: {
  //         createUseditemQuestionInput: {
  //           contents: data.contents,
  //         },
  //         useditemId: router.query.useditemId,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USEDITEM_QUESTIONS,
  //           variables: { useditemId: router.query.useditemId },
  //         },
  //       ],
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

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
              return [...prev, data?.createUseditemQuestion];
            },
          },
        });
      },
    });
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <ProductCommentUI
      onClickComment={onClickComment}
      onChangeContents={onChangeContents}
    />
  );
}
