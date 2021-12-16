import { useState } from "react";

export default function HashTagPage() {
  const [hashArr, setHashArr] = useState<String[]>([]);

  const onKeyUp = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const deleteHash = (idx) => () => {
    hashArr.splice(idx, 1);
    setHashArr([...hashArr]);
  };

  return (
    <>
      <div style={{ backgroundColor: "blue", display: "flex" }}>
        <div style={{ backgroundColor: "red", color: "white" }}>
          {hashArr.map((el, idx) => (
            <span key={idx} onClick={deleteHash(idx)}>
              {el}
            </span>
          ))}
        </div>
        <input type="text" onKeyUp={onKeyUp} />
      </div>
    </>
  );
}
