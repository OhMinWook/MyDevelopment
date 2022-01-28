import KakaoMap from "../../../commons/map/map.container";
import * as D from "./pddetail.styles";

export default function ProductDetailUI(props) {
  return (
    <>
      <D.Wrapper>
        <D.Image
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
        />
        <div>
          <D.Name>{props.data?.fetchUseditem.name}</D.Name>
          <D.Remarks>{props.data?.fetchUseditem.remarks}</D.Remarks>
          <D.Tag>{props.data?.fetchUseditem.tags}</D.Tag>
          <D.Price>{props.data?.fetchUseditem.price}원</D.Price>
          {process.browser ? (
            <D.Contents
              dangerouslySetInnerHTML={{
                __html: String(props.data?.fetchUseditem.contents),
              }}
            />
          ) : (
            <div />
          )}
          <D.MapWrapper>
            <KakaoMap
              address={props.data?.fetchUseditem.useditemAddress.address}
            />
            <D.ZipcodeWrapper>
              <D.ZipcodeTitle>우편번호: </D.ZipcodeTitle>
              <D.Zipcode>
                {props.data?.fetchUseditem.useditemAddress.zipcode}
              </D.Zipcode>
            </D.ZipcodeWrapper>
            <D.ZipcodeWrapper>
              <D.ZipcodeTitle>상세주소: </D.ZipcodeTitle>
              <D.Zipcode>
                {props.data?.fetchUseditem.useditemAddress.addressDetail}
              </D.Zipcode>
            </D.ZipcodeWrapper>
          </D.MapWrapper>
          <D.Edit onClick={props.onClickEdit}>수정하기</D.Edit>
        </div>
      </D.Wrapper>
    </>
  );
}
