import { useRef } from "react";
import Subtitle from "./Subtitle";
import { TiArrowRight } from "react-icons/ti";
import { categories } from "../constant/constant";
import { translateProducts } from "../constant/api";

const Categories = () => {
  const ref_translate = useRef(null);

  const handleTranslate = (direction) =>
    translateProducts(ref_translate, direction, 210);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-7">
        <Subtitle category="Categories" title="Browse By Category" />

        <div className="space-x-2 max-ss:ml-auto">
          <button
            onClick={() => handleTranslate("left")}
            className="bg-gray rotate-180 p-1 rounded-full"
          >
            <TiArrowRight size={30} />
          </button>
          <button
            onClick={() => handleTranslate("right")}
            className="bg-gray p-1 rounded-full"
          >
            <TiArrowRight size={30} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div ref={ref_translate} className="overflow-x-auto flex gap-5">
          {categories.map((cate, i) => (
            <div key={i}>
              <div className="w-44 h-36 border-[3px] border-black/10 flex flex-col items-center justify-center rounded-md hover:bg-red hover:text-white group">
                <div className="h-10 w-7">
                  <img
                    src={cate.icon}
                    alt={cate.title}
                    className="group-hover:invert"
                  />
                </div>
                <h2>{cate.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
