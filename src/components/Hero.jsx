import Hero_slider from "./Hero_slider";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => (
  <div className="grid grid-cols-1 justify-between md:grid-cols-5 gap-10">
    <ul className="col-span-1 border-gray border-r-2 pr-5 w-52 max-md:hidden">
      <li className="flex items-center justify-between">
        <Link to="/">Woman’s Fashion</Link>
        <MdKeyboardArrowRight size={23} />
      </li>
      <li className="flex items-center justify-between">
        <Link to="/">Men’s Fashion</Link>
        <MdKeyboardArrowRight size={23} />
      </li>
      <li>
        <Link to="/">Electronics</Link>
      </li>
      <li>
        <Link to="/">Home & Lifestyle</Link>
      </li>
      <li>
        <Link to="/">Medicine</Link>
      </li>
      <li>
        <Link to="/">Sports & Outdoor</Link>
      </li>
      <li>
        <Link to="/">Baby’s & Toys</Link>
      </li>
      <li>
        <Link to="/">Groceries & Pets</Link>
      </li>
      <li>
        <Link to="/">Health & Beauty</Link>
      </li>
    </ul>
    <div className="flex-1 col-span-1 md:col-span-4">
      <Hero_slider />
    </div>
  </div>
);

export default Hero;
