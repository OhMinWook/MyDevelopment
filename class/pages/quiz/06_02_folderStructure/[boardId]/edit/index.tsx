import { createContext } from "react";
import BoardWrite from "../../../../../src/components/units/06-01_folderStructure/boardWrite.container";
export const Context = createContext({});

export default function UpdateBoardEdit() {
  const Value = {
    isEdit: true,
  };

  return (
    <Context.Provider value={Value}>
      <BoardWrite />
    </Context.Provider>
  );
}
