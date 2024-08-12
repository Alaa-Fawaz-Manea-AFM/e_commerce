import Product from "./Product";
import { useUserContext } from "../context/MyState";
import Btn_View_Products from "./Btn_View_Products";

const Products = ({ ref_translate, col, wishlist_Eye, BtnView, length }) => {
  const { products } = useUserContext();

  return (
    <>
      <div
        ref={ref_translate}
        className={`${
          col ? "flex-wrap justify-center" : "h-"
        } overflow-x-auto flex items-center gap-5 w-full`}
      >
        {products.slice(0, length).map((prod, i) => (
          <div key={i}>
            <Product prod={prod} wishlist_Eye={wishlist_Eye} />
          </div>
        ))}
      </div>
      {BtnView ? (
        ""
      ) : (
        <div className="text-center">
          <Btn_View_Products />
        </div>
      )}
    </>
  );
};

export default Products;
