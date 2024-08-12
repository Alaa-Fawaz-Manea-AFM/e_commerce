import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/MyState";
import { Product, Products, Subtitle } from "../components";
import { toast } from "react-toastify";

const Wishlist = () => {
  const { heart, setHeart, cart, setCart, products } = useUserContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const addAllToCart = () => {
    try {
      const updatedCart = cart.slice();

      filteredProducts.forEach((prod) => {
        const existingProduct = updatedCart.find(
          (cartProd) => cartProd.uid === prod.uid
        );

        if (existingProduct) {
          existingProduct.count++;
        } else {
          updatedCart.push(prod);
        }
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);

      toast.success("Added all products to cart successfully");
    } catch (error) {
      toast.error("Oops, please try again");
    }
  };

  const delete_wishlist = (uid) => {
    try {
      const filter = filteredProducts.filter((prod) => prod.uid !== uid);
      const filterUid = filter.map((prod) => prod.uid);

      localStorage.setItem("heart", JSON?.stringify(filter));
      setFilteredProducts(filter);
      setHeart(filterUid);
      toast.success("Removed From Heart, Successfully");
    } catch (error) {
      toast.error("Oops, Plaes Try again");
    }
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => heart.includes(product.uid))
    );
  }, [heart, cart, products]);
  return (
    <div className="space-y-5 max-w-screen-2xl w-[95%] sm:w-[90%] md: mx-auto">
      <div className="flex items-center justify-between">
        <h2>Wishlist ({filteredProducts?.length})</h2>
        <button onClick={addAllToCart}>Move All To Bag</button>
      </div>

      <div className="overflow-x-auto flex items-center gap-5 w-full h-[400px]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <div key={prod.uid} className="">
              <Product wishlist prod={prod} delete_wishlist={delete_wishlist} />
            </div>
          ))
        ) : (
          <p className="text-black flex items-center w-full justify-center flex-col gap-5">
            <h2 className="text-3xl">You have no favorite products.</h2>
            <Link to="/" className="text-red text-xl font-semibold">
              Go to add
            </Link>
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Subtitle wishlist category="Just For You" />
        <button name="View All Products">
          <Link
            to="/"
            className="border-2 border-gray_vetcor px-11 py-3 rounded-md"
          >
            See All
          </Link>
        </button>
      </div>
      <Products length={10} BtnView wishlist_Eye />
    </div>
  );
};

export default Wishlist;
