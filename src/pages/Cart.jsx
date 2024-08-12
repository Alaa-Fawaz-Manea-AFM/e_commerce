import { Link } from "react-router-dom";
import { Category_page } from "../components";
import { useUserContext } from "../context/MyState";
import { IoIosArrowUp, IoIosClose } from "react-icons/io";
import {
  calculateTotal,
  subtotal_product,
  updateLocalStorage,
  removeProductFromCart,
} from "../constant/api";

const Cart = () => {
  const { cart, setCart } = useUserContext();

  // increment count product
  function increment(count, uid) {
    if (+count < 10) {
      updateLocalStorage(count + 1, uid,cart, setCart);
    }
    return;
  }

  // decrement count product
  function decrement(count, uid) {
    if (+count > 1) {
      updateLocalStorage(count - 1, uid, cart, setCart);
    }
    return;
  }

  return (
    <div className="max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto">
      <div className="mb-20 flex items-center justify-between">
        <Category_page />
      </div>

      {cart?.length > 0 ? (
        <>
          <div className="space-y-4">
            <div className="overflow-x-auto w-full">
              <table className="min-w-full">
                <thead className="shadow_contact">
                  <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Product</th>
                    <th className="py-3 px-6 text-left">Price</th>
                    <th className="py-3 px-6 text-left">Quantity</th>
                    <th className="py-3 px-6 text-left">Subtotal</th>
                  </tr>
                </thead>
                <br />
                <br />
                <tbody className="text-gray-600 text-sm font-light">
                  {cart
                    ?.sort((a, b) => a?.name?.length - b?.name?.length)
                    ?.map((product) => (
                      <>
                        <tr key={product.uid} className="shadow_contact group">
                          <td className="py-3 px-6">
                            <span className="flex items-center relative mr-10 ss:mr-0">
                              <img
                                src={product.images?.[0]}
                                alt={product.name}
                                className="w-12 h-12 mr-4"
                              />
                              <span>{product.name.slice(0, 15)}</span>
                              <button
                                onClick={() =>
                                  removeProductFromCart(
                                    product.uid,
                                    cart,
                                    setCart
                                  )
                                }
                                className="group-hover:block hidden bg-red rounded-full absolute -top-2 -left-1"
                              >
                                <IoIosClose color="white" size={20} />
                              </button>
                            </span>
                          </td>
                          <td className="py-3 px-6 text-left">
                            ${product.price}
                          </td>
                          <td className="py-3 px-6">
                            <div className="flex items-center px-2 justify-between border-2 border-gray_vetcor w-[72px] h-11 rounded-md">
                              <span>
                                {product.count < 10 ? (
                                  <>0{product.count}</>
                                ) : (
                                  <>{product.count}</>
                                )}
                              </span>
                              <div className="flex flex-col gap-1">
                                <button
                                  onClick={() =>
                                    increment(product.count, product.uid)
                                  }
                                >
                                  <IoIosArrowUp />
                                </button>
                                <button
                                  onClick={() =>
                                    decrement(product.count, product.uid)
                                  }
                                >
                                  <IoIosArrowUp className="rotate-180" />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-6">
                            ${subtotal_product(product.price, product.count)}
                          </td>
                        </tr>
                        <br />
                        <br />
                      </>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between gap-3 flex-wrap">
              <button className="border-2 border-gray_vetcor w-[218px] h-14 rounded-md">
                Return To Shop
              </button>
              <button className="border-2 border-gray_vetcor w-48 h-14 rounded-md">
                Update Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-5 mt-20 md:mt-10">
            <div className="flex flex-wrap md:items-center gap-5">
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
            <div className="w-11/12 ss:w-4/5 md:w-[470px] h-80 rounded-md space-y-5 py-8 px-6 border-2 border-gray_vetcor">
              <h2 className="font-medium text-xl">Cart Total</h2>

              <div className="flex items-center justify-between pb-2 border-b-2 border-gray_vetcor">
                <h2 className="">Subtotal:</h2>
                <span>${calculateTotal(cart)}</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b-2 border-gray_vetcor">
                <h2 className="">Shipping:</h2>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between">
                <h2>Total:</h2>
                <span>${calculateTotal(cart)}</span>
              </div>

              <div className="flex justify-center">
                <button className="w-64 h-14 rounded-md text-white bg-red font-medium">
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-black flex items-center justify-center flex-col gap-5">
          <h2 className="text-3xl">There are no products with this name</h2>
          <Link to="/" className="text-red text-xl">
            go To Home
          </Link>
        </p>
      )}
    </div>
  );
};

export default Cart;
