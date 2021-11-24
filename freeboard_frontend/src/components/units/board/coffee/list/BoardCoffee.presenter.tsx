import { Coffee } from "../../../../commons/layout/header/Header.styles";
import {
  Img1,
  Tag,
  Wrapper,
  Img2,
  Img3,
  RowWrapper,
  WholeWrapper,
} from "./BoardCoffee.styles";

export default function CoffeeUI(props) {
  return (
    <WholeWrapper>
      <Wrapper>
        <RowWrapper>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[0]?.title}</Img2>
            <Img3>detail : {props.coffee?.[0]?.description}</Img3>
          </Tag>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[1]?.title}</Img2>
            <Img3>detail : {props.coffee?.[1]?.description}</Img3>
          </Tag>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[2]?.title}</Img2>
            <Img3>detail : {props.coffee?.[2]?.description}</Img3>
          </Tag>
        </RowWrapper>
      </Wrapper>
      <Wrapper>
        <RowWrapper>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[3]?.title}</Img2>
            <Img3>detail : {props.coffee?.[3]?.description}</Img3>
          </Tag>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[4]?.title}</Img2>
            <Img3>detail : {props.coffee?.[4]?.description}</Img3>
          </Tag>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[5]?.title}</Img2>
            <Img3>detail : {props.coffee?.[5]?.description}</Img3>
          </Tag>
        </RowWrapper>
      </Wrapper>
      <Wrapper>
        <RowWrapper>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[6]?.title}</Img2>
            <Img3>detail : {props.coffee?.[6]?.description}</Img3>
          </Tag>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[7]?.title}</Img2>
            <Img3>detail : {props.coffee?.[7]?.description}</Img3>
          </Tag>
          <Tag>
            <Img1 src="/images/americano.jpg" />
            <Img2>title : {props.coffee?.[8]?.title}</Img2>
            <Img3>detail : {props.coffee?.[8]?.description}</Img3>
          </Tag>
        </RowWrapper>
      </Wrapper>
    </WholeWrapper>
  );
}
