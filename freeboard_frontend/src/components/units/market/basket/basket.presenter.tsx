import { Title, Wrapper } from "./basket.styles";

export default function BasketUI(props) {
  return (
    <Wrapper>
      <Title>장바구니</Title>
      {props.basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <img src={`https://storage.googleapis.com/${el.images[0]}`} />
          <span>{el.name}</span>
          <span>{el.remarks}</span>
          <span>{el.price}</span>
          <button id={el._id} onClick={props.onClickDelete}>
            삭제하기
          </button>
        </div>
      ))}
    </Wrapper>
  );
}
