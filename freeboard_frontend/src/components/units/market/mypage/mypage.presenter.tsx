import * as M from "./mypage.styles";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Head from "next/head";
import Paginations01 from "../../../commons/pagination/pagination.container";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { IPropsMyPageUI } from "./mypage.types";

export default function MyPageUI(props: IPropsMyPageUI) {
  return (
    <>
      {props.isopen && (
        <Modal
          visible={true}
          onOk={props.onHandleOk}
          onCancel={props.onHandleCancle}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <M.Wrapper>
        <Head>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
        <M.BoxWrapper>
          <M.SideWrapper>
            <AccountCircleIcon sx={{ fontSize: 60 }}></AccountCircleIcon>
            <M.NameBox>
              {props.userLoggedIn?.fetchUserLoggedIn.name}님
            </M.NameBox>
            <M.Modify>회원정보 수정</M.Modify>
          </M.SideWrapper>
          <M.Box>
            <M.Amount>적립금</M.Amount>
            <M.BalanceWrapper>
              <M.Available>현재 사용 가능한 포인트</M.Available>
              {props.coin ? (
                <M.Balance>
                  {props.userLoggedIn?.fetchUserLoggedIn.userPoint.amount}
                </M.Balance>
              ) : (
                <MonetizationOnIcon></MonetizationOnIcon>
              )}
              <M.StackWrapper>
                <M.StackInput onChange={props.onChangePoint} />
                <M.Stack onClick={props.onClickPayment}>충전</M.Stack>
              </M.StackWrapper>
            </M.BalanceWrapper>
          </M.Box>
        </M.BoxWrapper>
        <M.BasketWrapper>
          <M.Title>장바구니</M.Title>
          <M.ContentWrapper>
            <M.LeftWrapper>
              {props.basketItems.map((el: any, index: number) => (
                <M.InnerWrapper key={el._id}>
                  <M.Index>{index + 1}</M.Index>
                  <M.Image
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                  <M.Name>{el.name}</M.Name>
                  <M.Price>{el.price}원</M.Price>
                  <M.Button onClick={props.onClickDelete(el._id)}>X</M.Button>
                </M.InnerWrapper>
              ))}
            </M.LeftWrapper>
            <M.RightWrapper>
              <M.UpperWrapper>
                <M.TopWrapper>
                  <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                  <M.LocationTitle>배송지</M.LocationTitle>
                </M.TopWrapper>
                <M.LocationSubTitle>배송지를 입력해 주세요</M.LocationSubTitle>
                <M.LocationButton onClick={props.onClickAddressSearch}>
                  주소검색
                </M.LocationButton>
                <M.Address>{props.address}</M.Address>
                <M.AddressDetail onChange={props.onChangeAddressDetail} />
              </M.UpperWrapper>
              <M.BottomWrapper>
                <M.DeliverTitle>배송유형</M.DeliverTitle>
                <M.DeliverWrapper>
                  <M.Radio type="radio" />
                  <div>직접 배송</div>
                </M.DeliverWrapper>
                <M.DeliverWrapper>
                  <M.Radio type="radio" />
                  <div>방문 수령</div>
                </M.DeliverWrapper>
                <M.DeliverWrapper>
                  <M.Radio type="radio" />
                  <div>해외 배송</div>
                </M.DeliverWrapper>
                <M.Message>배송 시 남길 메세지</M.Message>
                <M.MessageInput />
              </M.BottomWrapper>
            </M.RightWrapper>
          </M.ContentWrapper>
        </M.BasketWrapper>
      </M.Wrapper>
    </>
  );
}
