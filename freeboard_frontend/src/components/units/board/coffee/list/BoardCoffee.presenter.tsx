import {
  Img1,
  Tag,
  Wrapper,
  Img2,
  Img3,
  RowWrapper,
} from "./BoardCoffee.styles";

export default function CoffeeUI(props) {
  return (
    <Wrapper>
      <RowWrapper>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : {props.coffee[0]}</Img2>
          <Img3>detail : </Img3>
        </Tag>
      </RowWrapper>
    </Wrapper>
  );
}
