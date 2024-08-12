import {
  Hero,
  Vector,
  Explore,
  Arrival,
  FlashSales,
  Categories,
  Month_products,
  Enhance_Experience,
} from "../components";

const home = () => {
  return (
    <div className="space-y-20 max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
      <Hero />

      <FlashSales />

      <hr className="opacity-20 w-full" />

      <Categories />

      <hr className="opacity-20 w-full" />

      <Month_products />

      <Enhance_Experience />

      <Explore test />

      <Arrival />

      <Vector />
    </div>
  );
};

export default home;
