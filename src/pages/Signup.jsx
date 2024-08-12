import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle, submitSignUp } from "../constant/api";
import { useUserContext } from "../context/MyState";
import { Link, useNavigate } from "react-router-dom";
import { loader } from "../assets";

const Signup = () => {
  const { setUser } = useUserContext();
  const [user_SignUp, setUser_SignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loadig, setLoadig] = useState(false);

  const onChange = (e) => {
    setUser_SignUp((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const submitSignUpFun = (e) => {
    e.preventDefault();
    submitSignUp(setUser_SignUp, setLoadig, user_SignUp, setUser, navigate);
  };

  return (
    <div className="col-span-1 md:col-span-1 max-w-96 w-11/12 mx-auto">
      <h2 className="text-4xl mb-5">Create an account</h2>
      <p className="">Enter your details below</p>

      <form className="space-y-5 mt-10" onSubmit={submitSignUpFun}>
        <div className="border-b-2 border-gray_vetcor pb-2">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full outline-none"
            value={user_SignUp.name}
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 border-gray_vetcor pb-2">
          <input
            type="email"
            name="email"
            required
            placeholder="Email or Phone Number"
            className="w-full outline-none"
            value={user_SignUp.email}
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 border-gray_vetcor pb-2">
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full outline-none"
            value={user_SignUp.password}
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className={`${
            loadig ? "cursor-not-allowed opacity-50" : ""
          } w-full h-14 rounded-md bg-red text-white`}
        >
          {loadig ? (
            <>
              <img
                src={loader}
                alt="loader"
                className="w-5 inline-block mr-2"
              />
              Create Account
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>
      <button
        onClick={() => signInWithGoogle(setUser, navigate, setLoadig)}
        type="button"
        className="border-2 border-gray_vetcor w-full h-14 rounded-md flex items-center justify-center gap-5 mt-3"
      >
        <FcGoogle size={35} /> <span>Sign up with Google</span>
      </button>

      <p className="text-center mt-7">
        Already have account?{" "}
        <Link to="/log-in" className="border-b-2 border-gray_vetcor pb-1">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
