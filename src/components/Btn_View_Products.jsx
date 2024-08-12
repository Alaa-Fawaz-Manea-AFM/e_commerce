import { Link } from "react-router-dom";

const Btn_View_Products = () => (
  <button name="View All Products">
    <Link to="/" className="bg-red text-white px-10 py-4 rounded-md">
      View All Products
    </Link>
  </button>
);

export default Btn_View_Products;
