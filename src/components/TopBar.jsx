import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-black text-white relative py-2">
    <div className="max-w-screen-2xl w-[95%] sm:w-[90%] mx-auto flex items-center justify-between max-ss:flex-col">
      <div className="text-sm font-semibold flex-1 flex items-center justify-center gap-3">
        <p className="text-xs">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <Link to="/allproducts" className="underline max-ss:hidden">
          ShopNow
        </Link>
      </div>
      <div className="w-24 flex items-center justify-center gap-3">
        <Link to="/allproducts" className="underline ss:hidden">
          ShopNow
        </Link>
        <select
          name="language"
          className="bg-black focus:bg-black focus:border-black xxs:px-4 py-3 rounded-md outline-0 text-sm"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
  </div>
);

export default TopBar;
