import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cart,
  Home,
  Login,
  About,
  Signup,
  Account,
  Contact,
  CheckOut,
  Wishlist,
  ProductInfo,
} from "./pages";
import {
  NavBar,
  NoPage,
  Footer,
  BtnGoTotop,
  LayoutLoginAndSign,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <div className="mt-44">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/productinfo?/:category?/:id"
            element={<ProductInfo />}
          />

          <Route element={<LayoutLoginAndSign />}>
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
      <ToastContainer />
      <BtnGoTotop />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
