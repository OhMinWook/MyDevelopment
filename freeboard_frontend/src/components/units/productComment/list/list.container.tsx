import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import ProductQuestionUI from "./list.present";
import { FETCH_USEDITEM_QUESTIONS } from "./list.queries";

export default function ProductQuestion(props) {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  return <ProductQuestionUI data={data} />;
}
