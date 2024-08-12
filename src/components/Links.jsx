import { Link, useLocation } from "react-router-dom";
import { links_Navbar } from "../constant/constant";
import { useUserContext } from "../context/MyState";

const Links = ({ col }) => {
  const { user } = useUserContext();
  const { pathname } = useLocation();

  return (
    <ul
      className={`${
        col ? "flex-col" : ""
      } flex items-center justify-center gap-5`}
    >
      {links_Navbar.map((link) => {
        const value = `${link.slice(0, 1).toUpperCase()}${link.slice(1)}`;
        const to = link == "home" ? "" : link;

        return (
          <li
            key={link}
            className={`${
              pathname.slice(1) === to ? "border-b-2 border-gray_vetcor" : ""
            } hover:border-b-2 hover:border-gray_vetcor`}
          >
            <Link to={`/${to}`}>{value}</Link>
          </li>
        );
      })}
      {!user?.email ? (
        <li
          className={`${
            pathname.slice(1) === "sign-up"
              ? "border-b-2 border-gray_vetcor"
              : ""
          } hover:border-b-2 hover:border-gray_vetcor`}
        >
          <Link to="/sign-up">Sigh Up</Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Links;
