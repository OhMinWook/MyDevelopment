import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/21_context_api/MyBoardWrite.container";

export const Mycontext = createContext(null);
export default function ContextAPIPage() {
  const MyValue = {
    isEdit: true,
  };

  return (
    <Mycontext.Provider value={MyValue}>
      <MyBoardWrite />
    </Mycontext.Provider>
  );
}
