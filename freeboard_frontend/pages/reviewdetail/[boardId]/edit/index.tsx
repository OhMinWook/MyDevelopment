import { createContext } from "react";
import Review from "../../../../src/components/units/market/review/review.container";

export const Context = createContext({});
export default function EditPage() {
  const Value = {
    isEdit: true,
  };
  return (
    <Context.Provider value={Value}>
      <Review />
    </Context.Provider>
  );
}
