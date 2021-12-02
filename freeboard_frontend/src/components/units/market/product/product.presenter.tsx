import {
  Wrapper,
  Title,
  Input,
  InnerWrapper,
  ButtonWrapper,
  Content,
} from "./product.styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const schema = yup.object().shape({
  name: yup.string().required("입력하세요"),
  remarks: yup.string().required("입력하세요"),
  contents: yup.string().required("입력하세요"),
  price: yup.number().positive().integer().required("입력하세요"),
  tags: yup.string().required("입력하세요"),
});

export default function ProductUI(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClick)}>
      <Wrapper>
        <div>
          <Title>상품 등록</Title>
          <InnerWrapper>
            <div>상품명</div>
            <Input type="text" {...register("name")} />
            <div>{formState.errors.name?.message}</div>
          </InnerWrapper>
          <InnerWrapper>
            <div>한줄 요약</div>
            <Input type="text" {...register("remarks")} />
            <div>{formState.errors.remarks?.message}</div>
          </InnerWrapper>
          <InnerWrapper>
            <div>상품 내용</div>
            <Content type="text" {...register("contents")} />
            <div>{formState.errors.contents?.message}</div>
          </InnerWrapper>
          <InnerWrapper>
            <div>가격</div>
            <Input type="text" {...register("price")} />
            <div>{formState.errors.price?.message}</div>
          </InnerWrapper>
          <InnerWrapper>
            <div>태그</div>
            <Input type="text" {...register("tags")} />
            <div>{formState.errors.tag?.message}</div>
          </InnerWrapper>
          <div>사진 첨부</div>
          <ButtonWrapper>
            <input type="file" {...register("images")} />
            <input type="file" />
            <input type="file" />
          </ButtonWrapper>
        </div>
        <button>등록하기</button>
      </Wrapper>
    </form>
  );
}
