import { getproducts, getUser } from "../constant/api";
import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyState = ({ children }) => {
  const [user, setUser] = useState();
  const [uidUser, setUIdUser] = useState(
    JSON?.parse(localStorage.getItem("uidUser")) || ""
  );
  const [heart, setHeart] = useState(
    JSON?.parse(localStorage.getItem("heart")) || []
  );
  const [cart, setCart] = useState(
    JSON?.parse(localStorage.getItem("cart")) || []
  );

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getproducts(setProducts);
    getUser(setUser, uidUser);
  }, []);

  const value = {
    cart,
    user,
    heart,
    uidUser,
    setCart,
    setUser,
    setHeart,
    products,
    setUIdUser,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyState;

export const useUserContext = () => useContext(MyContext);
