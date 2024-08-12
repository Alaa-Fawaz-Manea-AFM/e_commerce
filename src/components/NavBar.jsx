import { useState } from "react";
import { Links, TopBar } from ".";
import { Link } from "react-router-dom";
import { logOut } from "../constant/api";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useUserContext } from "../context/MyState";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  IoClose,
  IoStarSharp,
  IoLogInOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { order } from "../assets";

const NavBar = () => {
  const { user, cart, heart } = useUserContext();
  console.log(user);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);

  const toggleMenuFun = () => setToggleMenu((pre) => !pre);
  const toggleUserFun = () => setToggleUser((pre) => !pre);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-2xl mx-auto">
        <TopBar />

        <div className="h-20 bg-white flex items-center">
          <div className="w-[95%] sm:w-[90%] mx-auto flex items-center justify-between gap-5">
            <Link to="/" className="font-bold text-2xl">
              Exclusive
            </Link>
            <div className="max-md:hidden">
              <Links />
            </div>

            <div className="flex gap-2">
              <div className="flex items-center justify-between gap-1 h-9 w-[350px] max-md:hidden">
                <form className="flex items-center w-full min-w-[270px] bg-gray px-2 rounded-md">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="bg-transparent w-full p-1 outline-none"
                    placeholder="What are you looking for?"
                  />
                  <label htmlFor="search">
                    <CiSearch size={30} />
                  </label>
                </form>
                <div className="flex items-center gap-2">
                  <Link to="/wishlist" className="relative cursor-pointer">
                    <FaRegHeart size={25} />
                    <span className="absolute -top-4 -right-1 bg-red rounded-full text-center min-w-5 min-h-5 text-white">
                      {heart?.length}
                    </span>
                  </Link>
                  <Link to="/cart" className="relative cursor-pointer">
                    <AiOutlineShoppingCart size={25} />
                    <span className="absolute -top-4 -right-1 bg-red rounded-full text-center min-w-5 min-h-5 text-white">
                      {cart?.length}
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={toggleUserFun}
                    className="bg-red w-fit p-2 rounded-full block"
                  >
                    <FaRegUser size={20} color="white" />
                  </button>
                  {toggleUser ? (
                    <>
                      <div
                        onClick={toggleUserFun}
                        className="bg-black/30 z-10 fixed w-screen h-screen top-0 left-0"
                      />
                      <div className="absolute w-64 top-10 right-0 md:right-10 p-5 z-20 shadow-2xl bg-white rounded-md space-y-4">
                        <Link to="/account" className="flex items-center gap-2">
                          <FaRegUser size={25} />
                          <span>Manage My Account</span>
                        </Link>
                        <button className="flex items-center gap-2">
                          <img src={order} alt="order" className="w-7" />
                          <span>My Order</span>
                        </button>
                        <button className="flex items-center gap-2">
                          <IoCloseCircleOutline size={30} />
                          <span>My Cancellations</span>
                        </button>

                        <button className="flex items-center gap-2">
                          <IoStarSharp size={30} />
                          <span>My Reviews</span>
                        </button>
                        {user?.email ? (
                          <button
                            onClick={logOut}
                            className="flex items-center gap-2"
                          >
                            <BiLogOut size={25} />
                            <span>Log Out</span>
                          </button>
                        ) : (
                          <Link
                            to="/sign-up"
                            className="flex items-center gap-2"
                          >
                            <IoLogInOutline size={25} />
                            <span>sign Up</span>
                          </Link>
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <button>
                  <IoMdMenu
                    onClick={toggleMenuFun}
                    size={30}
                    className="md:hidden"
                  />

                  {toggleMenu ? (
                    <div className="md:hidden fixed">
                      <div
                        onClick={toggleMenuFun}
                        className="bg-black/50 z-10 fixed w-screen h-screen top-0 left-0"
                      />
                      <div className="fixed top-32 right-1/2 translate-x-1/2 text-white bg-black hfit w-fit space-y-5 p-5 rounded-md z-20 max-w-[90%]">
                        <div className="relative">
                          <IoClose
                            onClick={toggleMenuFun}
                            size={30}
                            className="absolute top-0 right-2 cursor-pointer"
                          />
                          <Links col />
                        </div>
                        <div className="flex items-center flex-col gap-10 w-[280px]">
                          <form className="flex items-center w-full bg-gray px-2 rounded-md">
                            <input
                              type="text"
                              name="search"
                              id="search"
                              className="bg-transparent w-full p-1 outline-none"
                              placeholder="What are you looking for?"
                            />
                            <label htmlFor="search">
                              <CiSearch size={30} />
                            </label>
                          </form>
                          <div className="flex items-center gap-5">
                            <Link to="/wishlist" className="relative">
                              <FaRegHeart size={25} />
                              <span className="absolute -top-4 -right-1 bg-red rounded-full text-center min-w-5 min-h-5 text-white">
                                {heart?.length}
                              </span>
                            </Link>
                            <Link
                              to="/cart"
                              className="relative cursor-pointer"
                            >
                              <AiOutlineShoppingCart size={25} />
                              <span className="absolute -top-4 -right-1 bg-red rounded-full text-center min-w-5 min-h-5 text-white">
                                {cart?.length}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
