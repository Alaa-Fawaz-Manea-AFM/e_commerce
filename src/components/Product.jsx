import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { BtnAddCart, BtnAddHeart, Stars } from ".";
import { RiDeleteBin6Line } from "react-icons/ri";

// _transition custom css

const Product = ({ prod, wishlist_Eye, delete_wishlist }) => {
  const { images, name, price, reviews, stars, category, uid } = prod;

  return (
    <div className="h-[350px] w-[270px] space-y-2 group">
      <div className="relative">
        <div className="h-[210px] bg-gray rounded-sm">
          <img
            src={images?.[0]}
            alt="image"
            className="scale-90 group-hover:scale-100 _transition"
          />
        </div>

        {delete_wishlist ? (
          <button
            className="absolute top-5 right-5"
            onClick={() => delete_wishlist(uid)}
          >
            <RiDeleteBin6Line size={25} />
          </button>
        ) : (
          <>
            <Link
              to={`/${category}/${name?.slice(0, 22)}?id=${uid}`}
              className="absolute top-5 right-5"
            >
              <IoEyeOutline size={25} />
            </Link>
            {wishlist_Eye ? (
              ""
            ) : (
              <div className="absolute top-14 right-5">
                <BtnAddHeart uid={uid} />
              </div>
            )}
          </>
        )}

        <BtnAddCart prod={prod} />
      </div>

      <h2 className="font-medium line-clamp-1">{name}</h2>

      <b className="text-red font-medium">${price}</b>

      <div className="flex items-center gap-3">
        <Stars stars={stars} />
        <span className="text-gray_vetcor">({reviews})</span>
      </div>
    </div>
  );
};

export default Product;
