import { doc, query, setDoc, collection, onSnapshot } from "firebase/firestore";
import { auth, fireDB, provider } from "../firebase/firebase";
import {
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

const submitSignUp = async (
  setUser,
  navigate,
  setLoadig,
  user_SignUp,
  setUser_SignUp
) => {
  try {
    setLoadig(true);
    const { name, email, password } = user_SignUp;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    const user_info = {
      uid: user.uid,
      email,
      name,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    toast.success("Signup Succesfully");
    const userRef = collection(fireDB, "users");
    await setDoc(doc(userRef, user?.uid), {
      user_info,
    });

    setUser({ name, email, password });
    setUser_SignUp({
      name: "",
      email: "",
      password: "",
    });
    navigate("/log-in");
  } catch (err) {
    toast.error("Sig Up Failed");
  } finally {
    setLoadig(false);
  }
};

const signInWithGoogle = async (setUser, navigate, setLoadig) => {
  setLoadig(true);
  try {
    const result = await signInWithPopup(auth, provider);
    const { displayName, email, uid } = result.user;

    const user_info = {
      uid,
      email,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    const userRef = collection(fireDB, "users");
    await setDoc(doc(userRef, uid), {
      user_info,
    });

    localStorage.setItem("uidUser", JSON?.stringify(uid));
    setUser({ displayName, email, uid });
    navigate("/");
    toast.success("log in Succesfully");
  } catch (error) {
    toast.success("log in Failed");
  } finally {
    setLoadig(false);
  }
};

const submitLogIn = async (setUser_Login, setLoadig, user_Login, navigate) => {
  try {
    const { email, password } = user_Login;
    setLoadig(true);

    const result = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("uidUser", JSON?.stringify(result?.user?.uid));
    toast.success("You have successfully logged in.");
    setUser_Login({
      name: "",
      email: "",
      password: "",
    });
    navigate("/");
  } catch (error) {
    toast.error("Oops, Log in Failed.");
  } finally {
    setLoadig(false);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("uidUser");
    window.location.reload();
    toast.success("Log Out Successfully");
  } catch (error) {
    toast.error("Log Out Failed");
  }
};

const getproducts = async (setProducts) => {
  const post = await query(collection(fireDB, "products"));
  onSnapshot(post, (QuerySnapshot) => {
    let arrayPosts = [];
    QuerySnapshot.forEach((doc) => {
      arrayPosts.push({ ...doc.data() });
    });
    setProducts(arrayPosts.sort((a, b) => b.time - a.time));
  });
};

const getUser = async (setUser, uidUser) => {
  const user = await query(collection(fireDB, "users"));
  onSnapshot(user, (QuerySnapshot) => {
    let userArray = [];
    QuerySnapshot.forEach((doc) => userArray.push(doc.data()));

    setUser(userArray.find(({ user }) => user?.uid === uidUser));
  });
};

const translateProducts = (ref_translate, direction, steps) => {
  if (direction === "left") {
    return (ref_translate.current.scrollLeft -= steps);
  }
  return (ref_translate.current.scrollLeft += steps);
};

const removeCart = async (cart, setCart, prod) => {
  if (prod.counr > 1) {
    try {
      const filter = cart.filter((i) => i.uid != prod.uid);
      localStorage.setItem("cart", JSON?.stringify(filter));
      setCart(filter);
      toast.success("Removed from cart successfully");
    } catch (error) {
      toast.error("Oops, please try again");
    }
  }
};

const addCart = async (cart, prod, setCart) => {
  try {
    let find = cart.find((cart) => cart.uid == prod.uid);
    let allCart = [];

    if (find?.count >= 1) {
      let filter = cart.filter((cart) => cart.uid !== prod.uid);
      let count = find.count + 1;

      allCart = [...filter, { ...find, count }];
    } else {
      allCart = [...cart, prod];
    }

    localStorage.setItem("cart", JSON?.stringify(allCart));
    setCart(allCart);
    toast.success("Added to cart successfully");
  } catch (error) {
    toast.error("Oops, please try again");
  }
};

const check_log_in_user = (navigate, user) => {
  if (!user.email) navigate("/sign-up");
  return;
};

const subtotal_product = (count, price) => Number(count * price);

const calculateTotal = (cart = []) =>
  cart.reduce((total, { price, count }) => total + price * count, 0);

const updateLocalStorage = (newCount, uid, cart, setCart) => {
  let find = cart?.find((i) => i.uid === uid);
  let filter = cart?.filter((i) => i.uid !== uid);

  find.count = newCount;
  const allproducts = [find, ...filter];

  localStorage.setItem("cart", JSON?.stringify(allproducts));
  setCart(allproducts);
};

const removeProductFromCart = (uid, cart, setCart) => {
  const filter = cart.filter((prod) => prod.uid !== uid);
  try {
    localStorage.setItem("cart", JSON?.stringify(filter));
    setCart(filter);
    toast.success("Removed To Cart, Successfully");
  } catch (error) {
    toast.error("Oops, Plaes Try again");
  }
};

export {
  logOut,
  getUser,
  addCart,
  removeCart,
  getproducts,
  submitLogIn,
  submitSignUp,
  calculateTotal,
  subtotal_product,
  signInWithGoogle,
  translateProducts,
  check_log_in_user,
  updateLocalStorage,
  removeProductFromCart,
};
