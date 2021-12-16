import { Card, Image, Like, Name, Price, Seller, Wrapper } from "./home.styles";
import InfiniteScroll from "react-infinite-scroller";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import SearchPage from "../../../commons/search/01/search01.container";

export default function HomeUI(props) {
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

      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        // useWindow={false}
      >
        <div>상품검색하기</div>
        <SearchPage
          refetch={props.refetch}
          onChangeSearch={props.onChangeSearch}
        />
        <Wrapper>
          {props.data?.fetchUseditems.map((el) => (
            <Card key={uuidv4()}>
              <Image
                onClick={props.onClickpdDetail(el._id)}
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
              <Name>
                {el.name
                  .replaceAll(props.keyword, `###${props.keyword}###`)
                  .split("###")
                  .map((el) => (
                    <div key={uuidv4()} isMatched={props.keyword === el}>
                      {el}
                    </div>
                  ))}
              </Name>
              <Price>{el.price}</Price>
              <Seller>{el.seller.name}</Seller>
              {process.browser ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: String(el.contents),
                  }}
                />
              ) : (
                <div />
              )}
              <Like
                src="/images/like.png"
                onClick={props.onClickLike(el._id)}
              />
              <div>{el.pickedCount}</div>
              <button onClick={props.onClickBasket(el)}>장바구니담기</button>
              <button onClick={props.onClickBuying(el._id)}>구매하기</button>
            </Card>
          ))}
        </Wrapper>
      </InfiniteScroll>
    </>
  );
}
