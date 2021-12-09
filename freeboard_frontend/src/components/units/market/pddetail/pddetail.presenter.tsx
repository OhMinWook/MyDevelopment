import KakaoMap from "../../../commons/map/map.container";
import {
  Remarks,
  Wrapper,
  Name,
  Price,
  Contents,
  Image,
  Edit,
} from "./pddetail.styles";

export default function ProductDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Image
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
        />
        <div>
          <Name>{props.data?.fetchUseditem.name}</Name>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Price>{props.data?.fetchUseditem.price}</Price>
          {process.browser ? (
            <Contents
              dangerouslySetInnerHTML={{
                __html: String(props.data?.fetchUseditem.contents),
              }}
            />
          ) : (
            <div />
          )}
          <KakaoMap />
          <Edit onClick={props.onClickEdit}>수정하기</Edit>
        </div>
      </Wrapper>
    </>
  );
}
