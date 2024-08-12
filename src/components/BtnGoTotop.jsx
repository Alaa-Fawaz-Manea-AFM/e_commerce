import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BtnGoTotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-10 p-3 rounded-full bg-gray_vetcor"
      >
        <FaArrowUp size={25} />
      </button>
    )
  );
};

export default BtnGoTotop;
