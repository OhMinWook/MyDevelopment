import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import ProductCommentUI from "./write.presenter";
import { CREATE_USEDITEM_QUESTION } from "./write.queries";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "../list/list.queries";

export default function ProductComment() {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  async function onClickComment(data) {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  return <ProductCommentUI onClickComment={onClickComment} />;
}
