import { Page } from "./pagination.styles";

export default function Paginations01UI(props) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startpage + index <= props.lastPage && (
            <Page
              key={props.startpage + index}
              onClick={props.onClickPage}
              id={String(props.startpage + index)}
              isActive={props.startpage + index === props.activedPage}
            >
              {props.startpage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
