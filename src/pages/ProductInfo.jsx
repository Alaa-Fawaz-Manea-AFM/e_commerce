import {
  Stars,
  Subtitle,
  Products,
  BtnAddHeart,
  Category_page,
} from "../components";
import { toast } from "react-toastify";
import { GoDash } from "react-icons/go";
import { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { HiPlusSmall } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { useUserContext } from "../context/MyState";

const ProductInfo = () => {
  const { products, cart, setCart } = useUserContext();
  const [activeImage, setActiveImage] = useState("");
  const [product, setProduct] = useState({});

  const checked_color_fun = (name) => (product?.color || "green") == name;
  const size_fun = (name) => product.size == name;

  const uid_product = useLocation()
    .search.match(/=\w+/gi)
    ?.join("")
    .replace("=", "");

  const set_size = (size) => setProduct((pre) => ({ ...pre, size }));
  const set_color = (color) => setProduct((pre) => ({ ...pre, color }));

  const negative_count = () => {
    if (product.count > 1) {
      setProduct((pre) => ({ ...pre, count: product.count - 1 }));
    }
  };

  const positive_count = () => {
    if (product.count < 10) {
      setProduct((pre) => ({ ...pre, count: product.count + 1 }));
    }
  };

  const add_to_cart = () => {
    try {
      let filter = cart.filter((cart) => cart.uid != product.uid);
      const allCart = [...filter, product];
      localStorage.setItem("cart", JSON?.stringify(allCart));
      setCart(allCart);
      toast.success("Added To Cart");
    } catch (error) {
      toast.error("Oops, please try again");
    }
  };

  useEffect(() => {
    const product = products.find((prod) => prod.uid === uid_product);
    setProduct(product);
    setActiveImage(product?.images[0]);
  }, [uid_product, products]);

  return (
    <div className="max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
      <div className="mb-20 flex items-center justify-between">
        <Category_page />
      </div>
      <div className="space-y-20">
        <div className="flex gap-20 md:gap-36 flex-col max-md:items-center md:flex-row justify-center">
          <div className="flex gap-5 flex-col-reverse md:flex-row max-md:max-w-[95%]">
            <div className="flex items-center md:flex-col gap-5">
              {product?.images?.map((img, i) => (
                <div
                  onClick={() => setActiveImage(img)}
                  key={i}
                  className={`${
                    activeImage == img ? "border-2 border-gray_vetcor" : ""
                  } w-32 h-20 bg-gray rounded-md`}
                >
                  <img src={img} alt={name} className="rounded-md scale-90" />
                </div>
              ))}
            </div>
            {activeImage ? (
              <div className="min-w-[90%] md:w-[400px] h-[500px] bg-gray rounded-md">
                <img src={activeImage} alt={name} className="scale-90" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="max-w-[400px] space-y-5">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{product?.name}</h2>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <Stars stars={product?.stars} />
                <span className="text-gray_vetcor">
                  ({product?.reviews} Reviews) <span className="mx-3">|</span>
                </span>
                <span className="text-green">In Stock</span>
              </div>
              <span className="block text-xl">
                ${Number(product?.price)?.toLocaleString("en-US")}
              </span>
              <p>{product?.details}</p>
            </div>

            <hr />

            <div className="flex items-center gap-5">
              <h2 className="text-xl">Colours:</h2>
              <div className="flex items-center gap-1">
                <div
                  onClick={() => set_color("green")}
                  className={`${
                    checked_color_fun("green")
                      ? "border-[3px] border-black p-[2px]"
                      : ""
                  } cursor-pointer flex items-center justify-center rounded-full w-5 h-5`}
                >
                  <span
                    className={`${
                      checked_color_fun("green")
                        ? "-translate-x-[2%] -translate-y-[2%]"
                        : ""
                    } bg-green rounded-full w-full h-full `}
                  ></span>
                </div>
                <div
                  onClick={() => set_color("blue")}
                  className={`${
                    checked_color_fun("blue")
                      ? "border-[3px] border-black p-[2px]"
                      : ""
                  } cursor-pointer flex items-center justify-center rounded-full w-5 h-5`}
                >
                  <span
                    className={`${
                      checked_color_fun("blue")
                        ? "-translate-x-[2%] -translate-y-[2%]"
                        : ""
                    } bg-blue-500 rounded-full w-full h-full `}
                  ></span>
                </div>
                <div
                  onClick={() => set_color("red")}
                  className={`${
                    checked_color_fun("red")
                      ? "border-[3px] border-black p-[2px]"
                      : ""
                  } cursor-pointer flex items-center justify-center rounded-full w-5 h-5`}
                >
                  <span
                    className={`${
                      checked_color_fun("red")
                        ? "-translate-x-[2%] -translate-y-[2%]"
                        : ""
                    } bg-red block rounded-full w-full h-full `}
                  ></span>
                </div>
              </div>
            </div>

            {product?.size ? (
              <div className="flex items-center gap-5">
                <span>Size:</span>
                <div className="space-x-2">
                  <button
                    onClick={() => set_size("xs")}
                    type="button"
                    className={`${
                      size_fun("xs") ? "bg-red text-white border-0" : ""
                    } border border-gray_vetcor rounded-md w-8 h-8`}
                  >
                    XS
                  </button>
                  <button
                    onClick={() => set_size("s")}
                    type="button"
                    className={`${
                      size_fun("s") ? "bg-red text-white border-0" : ""
                    } border border-gray_vetcor rounded-md w-8 h-8`}
                  >
                    S
                  </button>
                  <button
                    onClick={() => set_size("m")}
                    type="button"
                    className={`${
                      size_fun("m") ? "bg-red text-white border-0" : ""
                    } border border-gray_vetcor rounded-md w-8 h-8`}
                  >
                    M
                  </button>
                  <button
                    onClick={() => set_size("l")}
                    type="button"
                    className={`${
                      size_fun("l") ? "bg-red text-white border-0" : ""
                    } border border-gray_vetcor rounded-md w-8 h-8`}
                  >
                    L
                  </button>
                  <button
                    onClick={() => set_size("xl")}
                    type="button"
                    className={`${
                      size_fun("xl") ? "bg-red text-white border-0" : ""
                    } border border-gray_vetcor rounded-md w-8 h-8`}
                  >
                    XL
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center rounded-md border border-gray_vetcor w-fit overflow-hidden">
                <button
                  onClick={negative_count}
                  className="w-11 border border-gray_vetcor h-10"
                >
                  <GoDash size={25} className="mx-auto" />
                </button>
                <span className="w-20  block text-center font-medium text-xl">
                  {product?.count}
                </span>
                <button
                  onClick={positive_count}
                  className="w-11 text-5xl bg-red h-10"
                >
                  <HiPlusSmall size={25} className="mx-auto" />
                </button>
              </div>

              <button
                onClick={add_to_cart}
                className="w-40 h-11 rounded-md bg-red text-white"
              >
                Buy Now
              </button>
              <button className="w-10 h-10 rounded-md border border-gray_vetcor flex items-center justify-center">
                <BtnAddHeart uid={product?.uid} />
              </button>
            </div>

            <div className="border border-gray_vetcor rounded-md">
              <div className="flex items-center gap-3 p-4">
                <TbTruckDelivery size={30} />
                <div>
                  <h3 className="font-medium">Free Delivery</h3>
                  <p className="font-medium text-xs mt-1">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr className="text-gray_vetcor" />
              <div className="flex items-center gap-3 p-4">
                <TfiReload size={30} />
                <div>
                  <h3 className="font-medium">Return Delivery</h3>
                  <p className="font-medium text-xs mt-1">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Subtitle category="Related Item" title="" />
          <Products length={4} prodInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
