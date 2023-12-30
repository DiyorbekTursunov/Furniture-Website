import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isDark }) => {
  return (
    <nav className="container navbar__container">
      <Link to={"/"} className={isDark ? "link_dark link__Furniture" : "link link__Furniture"}>
        Furniture
      </Link>
      <ul className="navbar__ul">
        <li className="navbar_li">
          <Link
            className={isDark ? "link_dark" : "link "}
            to={"/"}
          >
            home
          </Link>
        </li>
        <li className="navbar_li">
          <Link
            className={isDark ? "link_dark" : "link "}
            to={"/furnitures"}
          >
            furnitures
          </Link>
        </li>
        <li className="navbar_li">
          <Link
            className={isDark ? "link_dark" : "link "}
            to={"/my-works"}
          >
            my works
          </Link>
        </li>
        <li className="navbar_li">
          <Link
            className={isDark ? "link_dark" : "link "}
            to={"/contact-us"}
          >
            contact us
          </Link>
        </li>
        <li className="navbar_li">
          <Link
            className={isDark ? "link_dark" : "link "}
            to={"/purchase"}
          >
            purchase
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
