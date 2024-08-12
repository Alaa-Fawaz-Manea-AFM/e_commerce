import { useRef } from "react";
import Product from "./Product";
import Subtitle from "./Subtitle";
import { TiArrowRight } from "react-icons/ti";
import { translateProducts } from "../constant/api";
import { useUserContext } from "../context/MyState";
import Btn_View_Products from "./Btn_View_Products";

const Explore = () => {
  const { products } = useUserContext();
  const ref_translate = useRef(null);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-7">
        <Subtitle category="Our Products" title="Explore Our Products" />

        <div className="space-x-2 max-ss:ml-auto">
          <button
            onClick={() => translateProducts(ref_translate, "left", 370)}
            className="bg-gray rotate-180 p-1 rounded-full"
          >
            <TiArrowRight size={30} />
          </button>
          <button
            onClick={() => translateProducts(ref_translate, "right", 370)}
            className="bg-gray p-1 rounded-full"
          >
            <TiArrowRight size={30} />
          </button>
        </div>
      </div>
      <div
        ref={ref_translate}
        className="h-fit overflow-x-auto flex flex-col gap-5 w-full"
      >
        <div className="flex items-center gap-10">
          {products?.slice(0, products.length / 2).map((prod, i) => (
            <div key={i}>
              <Product prod={prod} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-10">
          {products?.slice(products.length / 2).map((prod, i) => (
            <div key={i}>
              <Product prod={prod} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Btn_View_Products />
      </div>
    </>
  );
};

export default Explore;
