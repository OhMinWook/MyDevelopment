import { v4 as uuidv4 } from "uuid";
import { Word } from "./search01.styles";

export default function SearchPageUI(props) {
  return (
    <>
      <input type="text" placeholder="검색어를 입력하세요" />
      <button>검색</button>
      {props.data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>
            {el.title
              .replaceAll(props.keyword, `ref${props.keyword}ref`)
              .split("ref")
              .map((el) => (
                <Word key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </Word>
              ))}
          </span>
          <span>{el.contents}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={props.onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
