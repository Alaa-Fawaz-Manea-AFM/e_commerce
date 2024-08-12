import Subtitle from "./Subtitle";
import { Products, Btn_View_Products } from ".";

const Month_products = () => (
  <>
    <div className="flex flex-wrap items-end justify-between gap-7">
      <Subtitle category="This Month" title="Best Selling Products" />

      <Btn_View_Products />
    </div>
    <div className="flex items-center justify-center">
      <Products length={8} BtnView />
    </div>
  </>
);

export default Month_products;
