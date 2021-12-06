import { createContext } from "react";
import Product from "../../../../src/components/units/market/product/product.container";

export const Context = createContext({});
export default function EditPage() {
  const Value = {
    isEdit: true,
  };
  return (
    <Context.Provider value={Value}>
      <Product />
    </Context.Provider>
  );
}
