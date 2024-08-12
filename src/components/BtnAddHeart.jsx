import { toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa";
import { useUserContext } from "../context/MyState";

const BtnAddHeart = ({ uid }) => {
  const { heart, setHeart } = useUserContext();
  const solid = heart?.includes(uid);

  const toggleHeart = () => {
    try {
      const updatedHeart = solid
        ? heart.filter((id) => id !== uid)
        : [...heart, uid];

      localStorage.setItem("heart", JSON?.stringify(updatedHeart));
      setHeart(updatedHeart);

      toast.success(
        `${solid ? "Removed" : "Added"} to favourites successfully`
      );
    } catch (error) {
      toast.error("Oops, please try again");
    }
  };

  return (
    <FaRegHeart onClick={toggleHeart} size={25} color={solid ? "red" : ""} />
  );
};

export default BtnAddHeart;
