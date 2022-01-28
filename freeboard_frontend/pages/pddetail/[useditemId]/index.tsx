import ProductDetail from "../../../src/components/units/market/pddetail/pddetail.container";
import ProductQuestion from "../../../src/components/units/productComment/list/list.container";
import ProductComment from "../../../src/components/units/productComment/write/write.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <ProductComment />
      <ProductQuestion />
    </>
  );
}
