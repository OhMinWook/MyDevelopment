import {
  Title,
  Wrapper,
  InnerWrapper,
  Index,
  Image,
  Name,
  Price,
  Button,
} from "./basket.styles";

export default function BasketUI(props) {
  return (
    <Wrapper>
      <Title>장바구니!!</Title>
      {props.basketItems.map((el, index) => (
        <InnerWrapper key={el._id}>
          <Index>{index + 1}</Index>
          <Image src={`https://storage.googleapis.com/${el.images[0]}`} />
          <Name>{el.name}</Name>
          <Price>{el.price}</Price>
          <Button onClick={props.onClickDelete(el._id)}>X</Button>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
}
