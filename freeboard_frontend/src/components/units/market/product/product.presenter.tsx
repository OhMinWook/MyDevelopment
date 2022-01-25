import {
  Wrapper,
  Title,
  Input,
  InnerWrapper,
  ButtonWrapper,
  InputWrapper,
  Image,
  ImageClick,
  ImageWrapper,
  ContentWrapper,
  Submit,
  Subject,
} from "./product.styles";
import DaumPostcode from "react-daum-postcode";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useContext } from "react";
import { Context } from "../../../../../pages/pddetail/[useditemId]/edit";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import KakaoMap from "../../../commons/map/map.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const schema = yup.object().shape({
  name: yup.string().required("상품명을 입력하세요"),
  remarks: yup.string().required("remark를 입력하세요"),
  contents: yup.string().required("내용을 입력하세요"),
  price: yup.number().positive().integer().required("가격을 입력하세요"),
});

export default function ProductUI(props) {
  const { isEdit } = useContext(Context);
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  function handleChange(value: String) {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  return (
    <form onSubmit={handleSubmit(props.onClick)}>
      {props.isopen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
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
              <ReactQuill
                onChange={handleChange}
                defaultValue={props.data?.fetchUseditem.contents}
                style={{ width: "720px" }}
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
              {props.hashArr.map((el, idx) => (
                <span key={idx} onClick={props.deleteHash(el.index)}>
                  {el}
                </span>
              ))}
              <Input
                type="text"
                onKeyUp={props.onKeyUp}
                defaultValue={props.data?.fetchUseditem.tags}
                {...register("tags")}
              />
              {/* <div>{formState.errors.tags?.message}</div> */}
            </InputWrapper>
          </InnerWrapper>
          <KakaoMap address={props.address} />
          <div>
            <div>우편번호</div>
            <input
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchUseditem.useditemAddress.zipcode ||
                ""
              }
            />
            <input
              type="button"
              value="우편번호"
              onClick={props.onClickAddressSearch}
            />
          </div>
          <div>
            <div>주소</div>
            <input
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem.useditemAddress.address ||
                ""
              }
            />
          </div>
          <div>
            <div>상세 주소</div>
            <input
              onChange={props.onChangeAddressDetil}
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.addressDetail
              }
            />
          </div>
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
