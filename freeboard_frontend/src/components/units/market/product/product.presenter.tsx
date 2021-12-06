import {
  Wrapper,
  Title,
  Input,
  InnerWrapper,
  ButtonWrapper,
  Content,
  InputWrapper,
  Image,
  ImageClick,
  ImageWrapper,
  ContentWrapper,
  Submit,
  Subject,
} from "./product.styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useContext } from "react";
import { Context } from "../../../../../pages/pddetail/[useditemId]/edit";

const schema = yup.object().shape({
  name: yup.string().required("입력하세요"),
  remarks: yup.string().required("입력하세요"),
  contents: yup.string().required("입력하세요"),
  price: yup.number().positive().integer().required("입력하세요"),
  tags: yup.string().required("입력하세요"),
  // images: yup.string().required("입력하세요"),
});

export default function ProductUI(props) {
  const { isEdit } = useContext(Context);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClick)}>
      <Wrapper>
        <div>
          <Title>{isEdit ? "상품 수정" : "상품 등록"}</Title>
          <InnerWrapper>
            <Subject>상품명</Subject>
            <InputWrapper>
              <Input
                type="text"
                {...register("name")}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <div>{formState.errors.name?.message}</div>
            </InputWrapper>
          </InnerWrapper>
          <InnerWrapper>
            <Subject>한줄 요약</Subject>
            <InputWrapper>
              <Input
                type="text"
                {...register("remarks")}
                defaultValue={props.data?.fetchUseditem.remarks}
              />
              <div>{formState.errors.remarks?.message}</div>
            </InputWrapper>
          </InnerWrapper>
          <InnerWrapper>
            <Subject>상품 내용</Subject>
            <ContentWrapper>
              <Content
                type="text"
                {...register("contents")}
                defaultValue={props.data?.fetchUseditem.contents}
              />
              <div>{formState.errors.contents?.message}</div>
            </ContentWrapper>
          </InnerWrapper>
          <InnerWrapper>
            <Subject>가격</Subject>
            <InputWrapper>
              <Input
                type="text"
                {...register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              />
              <div>{formState.errors.price?.message}</div>
            </InputWrapper>
          </InnerWrapper>
          <InnerWrapper>
            <Subject>태그</Subject>
            <InputWrapper>
              <Input
                type="text"
                {...register("tags")}
                defaultValue={props.data?.fetchUseditem.tags}
              />
              <div>{formState.errors.tag?.message}</div>
            </InputWrapper>
          </InnerWrapper>
          <ImageWrapper>
            <Subject>사진 첨부</Subject>
            <ButtonWrapper>
              {props.images[0] ? (
                <img
                  src={`https://storage.googleapis.com/${props.images[0]}`}
                />
              ) : (
                <ImageClick onClick={props.onClickImages}>Image</ImageClick>
              )}
              <Image
                style={{ display: "none" }}
                type="file"
                onChange={props.onChangeFile}
                ref={props.fileRef}
              />
              {/* <div>{formState.errors.images?.message}</div> */}
            </ButtonWrapper>
          </ImageWrapper>
        </div>
        <Submit>{isEdit ? "수정하기" : "등록하기"}</Submit>
      </Wrapper>
    </form>
  );
}
