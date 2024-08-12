import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitLogIn } from "../constant/api";
import { loader } from "../assets";

const Login = () => {
  const [user_Login, setUser_Login] = useState({
    email: "",
    password: "",
  });
  const [loadig, setLoadig] = useState(false);

  const onChange = (e) => {
    setUser_Login((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const submitSignUpFun = (e) => {
    e.preventDefault();
    submitLogIn(setUser_Login, setLoadig, user_Login, navigate);
  };

  return (
    <div className="col-span-1 md:col-span-1 max-w-96 w-11/12 mx-auto">
      <h2 className="text-4xl mb-5">Log in to Exclusive</h2>
      <p className="">Enter your details below</p>

      <form className="space-y-5 mt-10" onSubmit={submitSignUpFun}>
        <div className="border-b-2 border-gray_vetcor pb-2">
          <input
            type="email"
            name="email"
            required
            placeholder="Email or Phone Number"
            className="w-full outline-none"
            value={user_Login.email}
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
            value={user_Login.password}
            onChange={onChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`${
              loadig ? "cursor-not-allowed opacity-50" : ""
            } px-10 h-12 rounded-md bg-red text-white`}
          >
            {loadig ? (
              <>
                <img
                  src={loader}
                  alt="loader"
                  className="w-5 inline-block mr-2"
                />
                Log in
              </>
            ) : (
              "Log in"
            )}
          </button>
          <button type="button" className="text-red">
            Forget Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
