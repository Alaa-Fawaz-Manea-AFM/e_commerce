import { useUserContext } from "../context/MyState";
import { addCart, removeCart } from "../constant/api";

const BtnAddCart = ({ prod }) => {
  const { cart, setCart } = useUserContext();
  const isInCart = cart?.includes(prod?.uid);

  const handleCartAction = () => {
    isInCart ? removeCart(cart, setCart, prod) : addCart(cart, prod, setCart);
  };

  return (
    <button
      onClick={handleCartAction}
      name="Add To Cart"
      className="_transition scale-0 group-hover:scale-100 absolute bottom-0 left-0 w-full h-10 bg-black text-white font-medium"
    >
      {isInCart ? "Remove From Cart" : "Add To Cart"}
    </button>
  );
};

export default BtnAddCart;
