import { useState } from "react";
import { Category_page } from "../components";
import { useUserContext } from "../context/MyState";
import { calculateTotal } from "../constant/api";
import { bkash, mastercard, nagad, visa } from "../assets";

const CheckOut = () => {
  const { cart } = useUserContext();
  const [checked_color, setChecked_color] = useState("checked_2");

  const checked_color_fun = (name) => checked_color == name;

  return (
    <div className="space-y-5 max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
      <div className="mb-20 flex items-center justify-between">
        <Category_page />
      </div>
      <div className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 gap-32 md:gap-10">
        <div className="space-y-10 max-w-[470px] w-full">
          <h2 className="font-medium text-4xl">Billing Details</h2>

          <form className="space-y-5 w-11/12 m-auto">
            <div className="space-y-2">
              <label htmlFor="First_Name" className="text-gray_vetcor">
                First Name <span className="text-red">*</span>
              </label>
              <div className="bg-gray p-3 rounded-md">
                <input
                  type="text"
                  name="First Name"
                  required
                  id="First_Name"
                  className="bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="Company_Name" className="text-gray_vetcor">
                Company Name
              </label>
              <div className="bg-gray p-3 rounded-md">
                <input
                  type="text"
                  name="Company Name"
                  required
                  id="Company_Name"
                  className="bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="Street_Address" className="text-gray_vetcor">
                Street Address <span className="text-red">*</span>
              </label>
              <div className="bg-gray p-3 rounded-md">
                <input
                  type="text"
                  name="Street Address"
                  required
                  id="Street_Address"
                  className="bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="optional" className="text-gray_vetcor">
                Apartment, floor, etc. (optional)
              </label>
              <div className="bg-gray p-3 rounded-md">
                <input
                  type="text"
                  name="optional"
                  required
                  id="optional"
                  className="bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="Town_City" className="text-gray_vetcor">
                Town/City <span className="text-red">*</span>
              </label>
              <div className="bg-gray p-3 rounded-md">
                <input
                  type="text"
                  name="Town City"
                  required
                  id="Town_City"
                  className="bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="Email_Address" className="text-gray_vetcor">
                Email Address <span className="text-red">*</span>
              </label>
              <div className="bg-gray p-3 rounded-md">
                <input
                  type="text"
                  name="Email Address"
                  required
                  id="Email_Address"
                  className="bg-transparent"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="max-w-[527px] space-y-5">
          {cart?.slice(0, 2)?.map((prod) => (
            <div key={prod.uid}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
                    className="w-12 h-11"
                  />

                  <span className="line-clamp-1 w-1/2">{prod.name}</span>
                </div>
                <span>${prod.price}</span>
              </div>
            </div>
          ))}

          <div className="space-y-2">
            <div className="flex items-center justify-between pb-2 border-b-2 border-gray_vetcor">
              <h2>Subtotal:</h2>
              <span>${calculateTotal(cart)}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b-2 border-gray_vetcor">
              <h2>Shipping:</h2>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b-2 border-gray_vetcor">
              <h2>Total:</h2>
              <span>${calculateTotal(cart)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div
              onClick={() => setChecked_color("checked_1")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="flex items-center justify-center rounded-full w-5 h-5 border-[3px] border-black p-[2px]">
                <span
                  className={`${
                    checked_color_fun("checked_1")
                      ? "translate-x-[3%] -translate-y-[2%] bg-black"
                      : ""
                  } rounded-full w-full h-full `}
                ></span>
              </div>
              <span>Bank</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <img
                src={bkash}
                alt="Bkash"
                className="w-10 h-7 object-contain"
              />
              <img src={visa} alt="visa" className="w-10 h-7 object-contain" />
              <img
                src={mastercard}
                alt="mastercard"
                className="w-10 h-7 object-contain"
              />
              <img
                src={nagad}
                alt="nagad"
                className="w-10 h-7 object-contain"
              />
            </div>
          </div>
          <div
            onClick={() => setChecked_color("checked_2")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex items-center justify-center rounded-full w-5 h-5 border-[3px] border-black p-[2px]">
              <span
                className={`${
                  checked_color_fun("checked_2")
                    ? "translate-x-[3%] -translate-y-[2%] bg-black"
                    : ""
                } rounded-full w-full h-full `}
              ></span>
            </div>
            <span>Cash on delivery</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <div className="w-[250px] h-14 border-2 border-black rounded-md overflow-hidden">
              <input
                type="text"
                name="Coupon Code"
                placeholder="Coupon Code"
                className="px-5"
              />
            </div>

            <button className="bg-red text-white rounded-md w-44 h-14">
              Apply Coupon
            </button>
          </div>
          <button className="bg-red text-white rounded-md w-44 h-14">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
