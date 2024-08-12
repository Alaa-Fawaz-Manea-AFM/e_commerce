import { IoStarSharp } from "react-icons/io5";

const Stars = ({ stars }) => {
  // stars
  const start = Math.min(stars, 5);
  const showGoldStars = Array.from({ length: start }).map((_, i) => (
    <IoStarSharp key={i} size={20} className="text-yellow" />
  ));

  const showEmptyStars = Array.from({ length: 5 - start }).map((_, i) => (
    <IoStarSharp key={i} size={20} className="text-gray_vetcor" />
  ));

  return (
    <div className="flex items-center gap-1">
      {showGoldStars}
      {showEmptyStars}
    </div>
  );
};

export default Stars;
