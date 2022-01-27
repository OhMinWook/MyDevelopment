import * as P from "./product.styles";
import DaumPostcode from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useContext } from "react";
import { Context } from "../../../../../pages/pddetail/[useditemId]/edit";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import KakaoMap from "../../../commons/map/map.container";
import { schema } from "./product.validation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
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
        <Modal
          visible={true}
          onOk={props.onHandleOk}
          onCancel={props.onHandleCancle}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <P.Wrapper>
        <div>
          <div>
            <P.Title>{isEdit ? "상품 수정" : "상품 등록"}</P.Title>
          </div>
          <P.InnerWrapper>
            <P.Subject>품명</P.Subject>
            <P.InputWrapper>
              <P.Input
                type="text"
                {...register("name")}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <div>{formState.errors.name?.message}</div>
            </P.InputWrapper>
          </P.InnerWrapper>
          <P.InnerWrapper>
            <P.Subject>요약</P.Subject>
            <P.InputWrapper>
              <P.Input
                type="text"
                {...register("remarks")}
                defaultValue={props.data?.fetchUseditem.remarks}
              />
              <div>{formState.errors.remarks?.message}</div>
            </P.InputWrapper>
          </P.InnerWrapper>
          <P.InnerWrapper>
            <P.Subject>가격</P.Subject>
            <P.InputWrapper>
              <P.Input
                type="text"
                {...register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              />
              <div>{formState.errors.price?.message}</div>
            </P.InputWrapper>
          </P.InnerWrapper>
          <P.InnerWrapper>
            <P.Subject>태그</P.Subject>
            <P.InputWrapper>
              {props.hashArr.map((el, idx) => (
                <span key={idx} onClick={props.deleteHash(el.index)}>
                  {el}
                </span>
              ))}
              <P.Input
                type="text"
                onKeyUp={props.onKeyUp}
                defaultValue={props.data?.fetchUseditem.tags}
                {...register("tags")}
              />
              <div>{formState.errors.tags?.message}</div>
            </P.InputWrapper>
          </P.InnerWrapper>
          <P.InnerWrapper>
            <P.Subject>내용</P.Subject>
            <P.ContentWrapper>
              <ReactQuill
                onChange={handleChange}
                defaultValue={props.data?.fetchUseditem.contents}
                style={{ width: "470px" }}
              />
              <div>{formState.errors.contents?.message}</div>
            </P.ContentWrapper>
          </P.InnerWrapper>
          <P.AddressWrapper>
            <P.AdressInnerWrapper>
              <P.AdressNumber>
                <P.AdressTitle>우편번호</P.AdressTitle>
                <P.NumberWrapper>
                  <P.AdressInput
                    readOnly
                    value={
                      props.zipcode ||
                      props.data?.fetchUseditem.useditemAddress.zipcode ||
                      ""
                    }
                  />
                  <P.SearchButton
                    type="button"
                    value="검색"
                    onClick={props.onClickAddressSearch}
                  />
                </P.NumberWrapper>
              </P.AdressNumber>
              <P.Adress>
                <P.AdressTitle>주소</P.AdressTitle>
                <P.AdressInput
                  readOnly
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress.address ||
                    ""
                  }
                />
              </P.Adress>
              <P.Adress>
                <P.AdressTitle>상세 주소</P.AdressTitle>
                <P.AdressInput
                  onChange={props.onChangeAddressDetil}
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.addressDetail
                  }
                />
              </P.Adress>
            </P.AdressInnerWrapper>
            <div>
              <KakaoMap address={props.address} />
            </div>
          </P.AddressWrapper>
          <P.ImageWrapper>
            <P.Subject>사진 첨부</P.Subject>
            <P.ButtonWrapper>
              {props.images[0] ? (
                <P.Picture
                  src={`https://storage.googleapis.com/${props.images[0]}`}
                />
              ) : (
                <P.ImageClick onClick={props.onClickImages}>Image</P.ImageClick>
              )}
              <P.Image
                style={{ display: "none" }}
                type="file"
                onChange={props.onChangeFile}
                ref={props.fileRef}
              />
            </P.ButtonWrapper>
          </P.ImageWrapper>
        </div>
        <P.Submit>{isEdit ? "수정하기" : "등록하기"}</P.Submit>
      </P.Wrapper>
    </form>
  );
}
