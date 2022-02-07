import {
  BestCard,
  Items,
  BestLine,
  BestWrapper,
  Button,
  ButtonWrapper,
  Card,
  CardHeader,
  Content,
  Image,
  Like,
  LikeWrapper,
  Name,
  Price,
  Seller,
  Wrapper,
  BestTitleWrapper,
} from "./home.styles";
import InfiniteScroll from "react-infinite-scroller";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import SearchPage from "../../../commons/search/01/search01.container";
import React, { ChangeEvent } from "react";
import Slider from "react-slick";
import { IHomeUIProps } from "./home.types";

export default function HomeUI(props: IHomeUIProps) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "230px",
    slidesToShow: 3,
    speed: 500,
  };

  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.target.src =
      "https://i.pinimg.com/564x/a4/3e/e6/a43ee6d3e310564af22b71bdfb1a52e7.jpg";
  };

  return (
    <>
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

      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        <BestWrapper>
          <BestTitleWrapper>
            <Items>Best Items</Items>
            <SearchPage
              refetch={props.refetch}
              onChangeSearch={props.onChangeSearch}
            />
          </BestTitleWrapper>
          <BestLine />
          <Slider {...settings}>
            {props.best?.fetchUseditemsOfTheBest.map((el: any) => (
              <BestCard key={uuidv4()}>
                <Image
                  onClick={props.onClickpdDetail(el._id)}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onError={onError}
                />
                <CardHeader>
                  <Name>
                    {el.name
                      .replaceAll(props.keyword, `###${props.keyword}###`)
                      .split("###")
                      .map((el: any) => (
                        <div key={uuidv4()} isMatched={props.keyword === el}>
                          {el}
                        </div>
                      ))}
                  </Name>
                  <Price>{el.price}</Price>
                </CardHeader>
                <Seller>{el.seller.name}</Seller>
                {process.browser ? (
                  <Content
                    dangerouslySetInnerHTML={{
                      __html: String(el.contents),
                    }}
                  />
                ) : (
                  <div />
                )}
                <LikeWrapper>
                  <Like
                    src="/images/like.png"
                    onClick={props.onClickLike(el._id)}
                  />
                  <div>{el.pickedCount}</div>
                </LikeWrapper>
                <ButtonWrapper>
                  <Button onClick={props.onClickBasket(el)}>장바구니</Button>
                  <Button onClick={props.onClickBuying(el._id)}>
                    구매하기
                  </Button>
                </ButtonWrapper>
              </BestCard>
            ))}
          </Slider>
        </BestWrapper>
        <Items>UsedItem List</Items>
        <BestLine />
        <Wrapper>
          {props.data?.fetchUseditems.map((el) => (
            <Card key={uuidv4()}>
              <Image
                onClick={props.onClickpdDetail(el._id)}
                src={`https://storage.googleapis.com/${el.images[0]}`}
                onError={onError}
              />
              <CardHeader>
                <Name>
                  {el.name
                    .replaceAll(props.keyword, `###${props.keyword}###`)
                    .split("###")
                    .map((el: any) => (
                      <div key={uuidv4()} isMatched={props.keyword === el}>
                        {el}
                      </div>
                    ))}
                </Name>
                <Price>{el.price}</Price>
              </CardHeader>
              <Seller>{el.seller.name}</Seller>
              {process.browser ? (
                <Content
                  dangerouslySetInnerHTML={{
                    __html: String(el.contents),
                  }}
                />
              ) : (
                <div />
              )}
              <LikeWrapper>
                <Like
                  src="/images/like.png"
                  onClick={props.onClickLike(el._id)}
                />
                <div>{el.pickedCount}</div>
              </LikeWrapper>
              <ButtonWrapper>
                <Button onClick={props.onClickBasket(el)}>장바구니</Button>
                <Button onClick={props.onClickBuying(el._id)}>구매하기</Button>
              </ButtonWrapper>
            </Card>
          ))}
        </Wrapper>
      </InfiniteScroll>
    </>
  );
}
