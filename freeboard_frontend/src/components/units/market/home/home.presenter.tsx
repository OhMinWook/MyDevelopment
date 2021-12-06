import { Card, Image, Name, Price, Seller, Wrapper } from "./home.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function HomeUI(props) {
  return (
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
            <button onClick={props.onClickBasket(el)}>장바구니담기</button>
          </Card>
        ))}
      </Wrapper>
    </InfiniteScroll>
  );
}
