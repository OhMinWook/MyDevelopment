import { Card, Image, Name, Price, Seller, Wrapper } from "./home.styles";
import InfiniteScroll from "react-infinite-scroller";
import Head from "next/head";

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
        loadMore={props.loadMore}
        hasMore={true}
        useWindow={false}
      >
        <Wrapper>
          {props.data?.fetchUseditems.map((el) => (
            <Card key={el._id}>
              <Image src={`https://storage.googleapis.com/${el.images[0]}`} />
              <Name>{el.name}</Name>
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
              <button onClick={props.onClickBasket(el)}>장바구니담기</button>
              <button onClick={props.onClickBuying(el._id)}>구매하기</button>
            </Card>
          ))}
        </Wrapper>
      </InfiniteScroll>
    </>
  );
}
