import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";
import { translateProducts } from "../constant/api";
import { Subtitle, Products, CountdownTimer } from "./";

const FlashSales = () => {
  const ref_translate = useRef(null);

  const targetDate = new Date("2024-08-20T00:00:00");

  return (
    <>
      <div className="flex items-end justify-between flex-wrap gap-7">
        <div className="flex items-end gap-10 flex-wrap">
          <Subtitle category="Today’s" title="Flash Sales" />

          <CountdownTimer targetDate={targetDate} />
        </div>

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
      <Products ref_translate={ref_translate} />
    </>
  );
};

export default FlashSales;
