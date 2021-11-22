import {
  Img1,
  Tag,
  Wrapper,
  Img2,
  Img3,
  RowWrapper,
} from "../coffee/BoardCoffee.styles";

export default function CoffeeUI(props) {
  return (
    <Wrapper>
      <RowWrapper>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : {props.coffee.title}</Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
      </RowWrapper>
      <RowWrapper>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
        <Tag>
          <Img1 src="/images/americano.jpg" />
          <Img2>title : </Img2>
          <Img3>detail : </Img3>
        </Tag>
      </RowWrapper>
    </Wrapper>
  );
}
